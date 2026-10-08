/**
 * Unified API Client for connecting Frontend to Node/Express/Supabase Backend
 */

// Use relative /api URL so Vite proxy forwards to backend on localhost:5000,
// and works seamlessly when accessing from her mobile phone on the local network!
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

export async function submitWish({ sender = 'Matsurika', wish = '', reaction = '❤️' }) {
  try {
    const res = await fetch(`${API_BASE}/wishes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender, wish, reaction }),
    });
    return await res.json();
  } catch (err) {
    console.warn('[API] Could not submit wish to backend, saved locally:', err.message);
    return null;
  }
}

export async function getWishes() {
  try {
    const res = await fetch(`${API_BASE}/wishes`);
    return await res.json();
  } catch (err) {
    console.warn('[API] Could not fetch wishes from backend:', err.message);
    return [];
  }
}
