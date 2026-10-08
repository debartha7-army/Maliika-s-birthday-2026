const supabase = require('../config/supabase');

// In-memory fallback if Supabase is not connected
const memoryWishes = [];

class WishModel {
  static async createWish({ sender, wish, reaction }) {
    const newWish = {
      id: Date.now().toString(),
      sender: sender || 'Matsurika',
      wish: wish || '',
      reaction: reaction || '❤️',
      created_at: new Date().toISOString()
    };

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('birthday_wishes')
          .insert([
            {
              sender: newWish.sender,
              wish: newWish.wish,
              reaction: newWish.reaction,
              created_at: newWish.created_at
            }
          ])
          .select();

        if (error) {
          console.warn('[Supabase] Insert error, saving to memory fallback:', error.message);
          memoryWishes.push(newWish);
          return newWish;
        }
        return data && data[0] ? data[0] : newWish;
      } catch (err) {
        console.warn('[Supabase] Exception, using memory fallback:', err.message);
        memoryWishes.push(newWish);
        return newWish;
      }
    }

    memoryWishes.push(newWish);
    return newWish;
  }

  static async getAllWishes() {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('birthday_wishes')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          return data;
        }
      } catch (err) {
        console.warn('[Supabase] Fetch error:', err.message);
      }
    }

    return [...memoryWishes].reverse();
  }
}

module.exports = WishModel;
