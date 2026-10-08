const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabase = null;

if (supabaseUrl && supabaseAnonKey && supabaseUrl !== 'your_supabase_url_here') {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('[Supabase] Initialized successfully with remote project.');
  } catch (err) {
    console.warn('[Supabase] Initialization warning:', err.message);
  }
} else {
  console.log('[Supabase] No valid credentials provided in .env. Running with local fallback store.');
}

module.exports = supabase;
