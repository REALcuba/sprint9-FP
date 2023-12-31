
import { createClient } from '@supabase/supabase-js'

// const VITE_SUPABASE_URL = process.env.VITE_SUPABASE_URL
// const VITE_SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY
// const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env

// // export const supabase = createClient(REACT_APP_SUPABASE_URL ?? '', REACT_APP_SUPABASE_ANON_KEY ?? '')const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env;

// export const supabase = createClient(
//     import.meta.env.VITE_SUPABASE_URL ?? '',
//     import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''
// )
const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = import.meta.env

export const supabase = createClient(
    VITE_SUPABASE_URL ?? '',
    VITE_SUPABASE_ANON_KEY ?? ''
)