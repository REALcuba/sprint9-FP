import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { supabase } from '../supabase/supabase'
// import SetStateAction from "zustand"
import type { } from '@redux-devtools/extension'
import { User } from '@supabase/supabase-js'
interface UserState {
    isLoggedIn: boolean;
    user: User | null;
    password: string | number | null;
    email: string | number | null;
    data?: unknown;
}

interface UserActions {
    user: string | null;
    signUp: (email: string, password: string) => Promise<void>;
    logIn: (email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
    data?: unknown;

}

const useAuthStore = create<UserActions & UserState>()(
    devtools(
        persist(
            (set) => ({
                isLoggedIn: false,
                user: null,
                password: null,
                email: null,
                signUp: async (email: string, password: string) => {
                    const { data, error } = await supabase.auth.signUp({
                        email: email,
                        password: password,
                    })
                    if (error) {
                        console.error('Error al registrarse:', error)
                    } else {
                        set({ isLoggedIn: true, data })
                        console.log(data)

                    }
                },
                logIn: async (email, password) => {
                    const { data, error } = await supabase.auth.signInWithPassword({
                        email,
                        password,
                    })
                    if (error) {
                        console.error('Error al iniciar sesión:', error)
                    } else {
                        set({ isLoggedIn: true, data })

                    }
                },
                logOut: async () => {
                    await supabase.auth.signOut()
                    set({ isLoggedIn: false, user: null })
                },
                // signup: (_username: string | null, password: string | null) => {

                // }
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