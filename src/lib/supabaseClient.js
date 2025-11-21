import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY


export const supabase = (supabaseUrl && supabaseKey && supabaseKey !== 'your_anon_key_here')
    ? createClient(supabaseUrl, supabaseKey)
    : null;
