import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { supabase } from '../supabase/supabase'
// import SetStateAction from "zustand"
import type { } from '@redux-devtools/extension'
// import { User } from '@supabase/supabase-js'
import { UserState } from '../types/types'
// import { useNavigate } from 'react-router-dom'
interface UserActions {
// user: User | null;
    password: string | number | null;
    email: string | number | null;
    signUp: (email: string, password: string) => Promise<void>;
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
    handleAvatarInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // data?: unknown;

}

const useAuthStore = create<UserActions & UserState>()(
    devtools(
        persist(
            (set) => ({
                isLoggedIn: false,
                user: null,
                password: null,
                email: null,
                avatarUrl: null,
                signUp: async (email: string, password: string) => {
                    try {
                        const { data, error } = await supabase.auth.signUp({
                            email: email,
                            password: password,
                        })
                        if (error) {
                            console.error('Error al registrarse:', error)
                        } else {
                            set({ isLoggedIn: true, data: data })
                            // set({
                            //     isLoggedIn: true, data: data,
                            // })
                        }
                    } catch (error) {
                        console.log(error)

                    }

                },
                logIn: async (email, password) => {

                    try {
                        const { data, error } = await supabase.auth.signInWithPassword({
                            email,
                            password,
                        })

                        if (error) {
                       
                        
                            console.error('Error al iniciar sesión:', error)
                        } else {
                            set({ isLoggedIn: true, data: data })
                        }

                    } catch (error) {
                        console.log(error)

                    }

                },
                logOut: async () => {
                    await supabase.auth.signOut()
                    set({ isLoggedIn: false, avatarUrl: null })
                },
                handleAvatarInputChange: async (event: React.ChangeEvent<HTMLInputElement>) => {
                    const file = event.target.files?.[0]

                    if (file) {
                        try {
                            // Sube el archivo al bucket 'avatar' en Supabase Storage
                            const { error } = await supabase.storage
                                .from('avatar')
                                .upload(`avatar_${Date.now()}.png`, file)

                            if (error) {
                                console.error(error.message)
                                return
                            } else {
                                // Obtiene la URL del archivo subido y la muestra en la interfaz
                                const avatarUrl = `${supabase.storage}/avatar/${file}`
                                // setImageUrl(fileUrl)
                                console.log(avatarUrl)
                                set({ avatarUrl: avatarUrl })
                            }
                        } catch (error) {
                            console.error(error)
                        }
                    }
                },
            }),

            {
                name: 'auth-storage',
                storage: createJSONStorage(() => sessionStorage),
                // getStorage: () => localStorage,
            }
        )
    )
)



export default useAuthStore