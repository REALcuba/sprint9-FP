import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
// import SetStateAction from "zustand"
import type { } from '@redux-devtools/extension'
interface UserState {
    isLoggedIn: boolean;
    user: { username: string } | null;
    password: string | null;
}

interface UserActions {
    login: (username: string, password: string) => void;
    logout: () => void;
}

const useAuthStore = create<UserActions & UserState>()(
    devtools(
        persist(
            (set) => ({
                isLoggedIn: false,
                user: null,
                password: null,
                login: (username: string | null, password: string | null) => {
                    if (username === null) {
                        // Your login logic here
                        return
                    } else {
                        set({ isLoggedIn: true, user: { username }, password })

                    }
                },
                logout: () => {
                    // Your logout logic here
                    set({ isLoggedIn: false, user: null })
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