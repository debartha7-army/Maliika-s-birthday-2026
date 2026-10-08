class ContentModel {
  static getSurpriseData() {
    return {
      recipient: {
        name: 'Matsurika',
        nickname: 'Matsu-Chan',
        sender: 'Kuttush',
        age: 19,
        birthday: 'October 9, 2026',
        favoriteFood: 'Mutton Kosha'
      },
      lockScreen: {
        title: 'Only Matsurika can open this.',
        subtitle: 'A private corner of the universe crafted with love across the miles ✨',
        question: 'Where did we first meet?',
        placeholder: 'Hint: Remember the very first day of school...',
        wrongHint: 'Think back to when you first caught my eye in school... Class 11! 😉'
      },
      giftReveal: {
        title: 'Happy 19th Birthday, Matsu-Chan! ❤️',
        revealedMessage: 'Distance cannot stop our date! Tonight at 8:00 PM: Our Special Long-Distance Date & Hot Mutton Kosha delivered right to your door! 🍛✨',
        subtext: 'Dress up in your favorite outfit, we will celebrate across the screen together, cut your cake, and open your parcels! ✨'
      }
    };
  }
}

module.exports = ContentModel;
