import { create } from 'zustand'
import { supabase } from '../supabase/supabase'
import { UserActions, UserState } from '../types/types'

// export interface ProductRow {
//     category: string;
//     id?: string;
//     images: string | null;
//     pick_up_address: string | null;
//     product_name: string;
//     status: string;
//     description: string;
// }

const useAuthStore = create<UserActions & UserState>((set) => ({
    isLoggedIn: false,
    user: null,
    password: null,
    email: null,
    avatarUrl: null,
    productImageUrl: null,
    products: [],
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
    handleProductImageUpload: async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (file) {
            try {
                const { error } = await supabase.storage
                    .from('products')
                    .upload(`product_${Date.now()}.png`, file)
                if (error) {
                    console.error(error.message)
                    return
                } else {
                    const productImageUrl = `${supabase.storage}/products/${file}`
                    console.log(productImageUrl)
                    set({ productImageUrl })
                }
            } catch (error) {
                console.error(error)
            }
        }
    },
    handleAvatarInputChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        if (file) {
            try {
                const { error } = await supabase.storage
                    .from('avatar')
                    .upload(`avatar_${Date.now()}.png`, file)
                if (error) {
                    console.error(error.message)
                    return
                } else {
                    const avatarUrl =  URL.createObjectURL(file)
                    console.log(avatarUrl)
                    set({ avatarUrl: avatarUrl })
                }
            } catch (error) {
                console.error(error)
            }
        }
    },

    fetchProductsFromSupabase: async () => {
        try {
            const { data: products, error } = await supabase
                .from('products')
                .select('*')
            if (products) {
                set({ products: products })
                console.log(products)
            } else {
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
    },

    fetchProfiles: async () => {
        try {
            const { data: profile, error } = await supabase
                .from('profiles')
                .select('*')
            if (error) {
                console.error(error)
            } else {
                set({ profile: profile })
            }
        } catch (error) {
            console.log(error)
        }
    },

    addNewProduct: async (product) => {
        try {
            const { data, error } = await supabase
                .from('products')
                .insert([product])
                .select()
            if (error) {
                console.error(error)
            } else {
                set({ data: data })
            }
        } catch (error) {
            console.log(error)
        }
    },
}))

export default useAuthStore