import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://ceyabzqtsuzhwguwdkla.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_MRMg8KYHYUKzQfeQ0zU_nQ_9YoBx1S5';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
