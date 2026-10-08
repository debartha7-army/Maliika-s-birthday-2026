/**
 * Unified API Client for connecting Frontend to Node/Express/Supabase Backend
 */
import { supabase } from './supabase';

const API_BASE = '/api';

export async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('[API] Backend unreachable, falling back to local client state:', err.message);
    return null;
  }
}

export async function verifyUnlock(answer) {
  try {
    const res = await fetch(`${API_BASE}/unlock`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer }),
    });

    const data = await res.json();
    return {
      ok: res.ok,
      status: res.status,
      data,
    };
  } catch (err) {
    console.warn('[API] Unlock request failed, using local verification fallback:', err.message);
    return null;
  }
}

export async function submitWish({ sender = 'Matsurika', wish = '', reaction = '🌙✨' }) {
  // 1. Direct cloud sync to Supabase (works both locally and on Vercel/Netlify static deployment)
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('birthday_wishes')
        .insert([{ sender, wish, reaction, created_at: new Date().toISOString() }])
        .select();
      if (!error) {
        console.log('[Supabase Cloud] Wish saved to cloud database!');
      }
    } catch (e) {
      console.warn('[Supabase Direct Sync]:', e.message);
    }
  }

  // 2. Also submit to backend Express MVC API
  try {
    const res = await fetch(`${API_BASE}/wishes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender, wish, reaction }),
    });
    return await res.json();
  } catch (err) {
    console.log('[API] Backend local fallback used');
    return { status: 'success', message: 'Wish saved' };
  }
}

export async function getWishes() {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('birthday_wishes')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) return data;
    } catch (e) {
      console.warn('[Supabase]', e.message);
    }
  }

  try {
    const res = await fetch(`${API_BASE}/wishes`);
    return await res.json();
  } catch (err) {
    return [];
  }
}
