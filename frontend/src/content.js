/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  BIRTHDAY SURPRISE CONTENT CONFIGURATION
 *  Tailored for Matsurika's 19th Birthday (October 9) • From Kuttush
 *  Includes couple memories, piano soundtrack, and long-distance celebration!
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const BIRTHDAY_CONTENT = {
  // Recipient & sender details
  recipient: {
    name: "Matsurika",
    nickname: "Matsu-Chan",
    age: 19,
    birthdayDate: "October 9",
    senderName: "Kuttush",
    favoriteColors: ["Black", "Navy Blue"],
    favoriteFood: "Mutton Kosha",
  },

  // 1. Lock screen configuration
  lockScreen: {
    title: "Only Matsurika can open this.",
    subtitle: "A private corner of the universe crafted with love across the miles ✨",
    question: "Where did we first meet?",
    inputPlaceholder: "Type your answer here...",
    unlockButtonText: "Unlock My Surprise ✨",
    acceptedAnswers: [
      "class 11",
      "class 11th",
      "11",
      "11th",
      "first class of class 11",
      "first day of class 11",
      "class eleven",
      "eleven",
      "in class 11",
      "class xi",
      "xi"
    ],
    wrongAnswerHint: "Think back to when you first caught my eye in school... Class 11! 😉",
  },

  // 2. Intro / Hero section
  intro: {
    tagline: "October 9 • The Day My Universe Began",
    mainHeading: "Happy 19th Birthday, Matsurika",
    subHeading: "From Kuttush, across every mile, with every beat of my heart ✨",
    scrollPrompt: "Scroll down to relive our journey ↓",
  },

  // 3. "Since Class 11" Story Timeline (With our couple photos!)
  timeline: [
    {
      id: 1,
      tag: "Where It All Began",
      year: "Class 11",
      title: "The Very First Day in Class 11",
      photo: "/photos/photo1.jpg",
      alt: "The look that started it all",
      caption:
        "The classroom was loud and unremarkable—until you walked in. One look into those deep, captivating eyes, and suddenly an ordinary school day turned into the very first chapter of my favorite story.",
    },
    {
      id: 2,
      tag: "Timeless Romance",
      year: "Vintage Hearts",
      title: "Our 90s Retro Romance",
      photo: "/photos/couple1.jpg",
      alt: "Kuttush and Matsurika in vintage style",
      caption:
        "Looking like we walked straight out of a classic retro love story. You in your gorgeous saree with that gentle smile, and me in denim by your side. We proved from early on that what we have is timeless.",
    },
    {
      id: 3,
      tag: "Our Signature Color",
      year: "Together As One",
      title: "Dressed in Black, Standing Tall",
      photo: "/photos/couple3.jpg",
      alt: "Kuttush and Matsurika in matching black traditional attire",
      caption:
        "Black and deep tones have always been our trademark. Seeing you in that elegant black saree, holding each other close—there is no place in the entire world I'd rather stand than right next to you.",
    },
    {
      id: 4,
      tag: "My Safe Haven",
      year: "Quiet Moments",
      title: "Leaning on Each Other",
      photo: "/photos/couple4.jpg",
      alt: "Matsurika resting on Kuttush's shoulder",
      caption:
        "Sitting together on the steps, feeling you rest your head gently against my shoulder. In a fast-moving, chaotic world, holding you close is the greatest peace I have ever known.",
    },
    {
      id: 5,
      tag: "Our Starlit World",
      year: "Defying The Distance",
      title: "Two Souls, One Universe",
      photo: "/photos/couple2.jpg",
      alt: "Anime illustration of Kuttush and Matsurika",
      caption:
        "Even when physical miles separate us, our thoughts and souls live in the exact same warm place. Looking into your eyes is like looking into my forever.",
    },
    {
      id: 6,
      tag: "Chapter 19",
      year: "October 9, 2026",
      title: "Nineteen & Infinite Love",
      photo: "/photos/photo5.jpg",
      alt: "Matsurika in navy blue smiling gracefully",
      caption:
        "Nineteen years of pure grace and sunshine. Distance cannot dim your brightness, and no number of kilometers can ever weaken what we built. Happy 19th Birthday, my love!",
    },
  ],

  // 4. Photo Gallery (Showcasing our couple pictures & Matsurika's radiance)
  gallery: [
    {
      src: "/photos/couple3.jpg",
      title: "Royal in Matching Black",
      description: "Our signature color. Standing together as one, looking like absolute royalty.",
    },
    {
      src: "/photos/couple1.jpg",
      title: "Our 90s Vintage Aesthetic",
      description: "A classic look that belongs in a framed vintage record cover. Timeless us.",
    },
    {
      src: "/photos/couple4.jpg",
      title: "Resting on My Shoulder",
      description: "Your head against my shoulder—the safest, sweetest feeling in the whole world.",
    },
    {
      src: "/photos/couple2.jpg",
      title: "Our Anime Fairy Tale",
      description: "A little piece of art illustrating the warmth and bond that distance can never touch.",
    },
    {
      src: "/photos/photo1.jpg",
      title: "The Eyes That Won My Heart",
      description: "The gaze that stole my heart on day one of class 11 and never let go.",
    },
    {
      src: "/photos/photo2.jpg",
      title: "Effortless Poise & Beauty",
      description: "No one carries elegance, poise, and quiet charm the way Matsurika does.",
    },
    {
      src: "/photos/photo5.jpg",
      title: "Welcoming 19 in Navy Blue",
      description: "Basking under the open sky and smiling softly as she steps into 19.",
    },
  ],

  // 5. "19 Reasons I Love You" (19 interactive cards)
  reasons: [
    {
      id: 1,
      title: "Turning School Into Magic",
      text: "How you were the sole reason a boring Class 11 classroom transformed into the absolute best part of my day.",
    },
    {
      id: 2,
      title: "The Mutton Kosha Smile",
      text: "That priceless, adorable foodie grin on your face whenever authentic hot Mutton Kosha is served!",
    },
    {
      id: 3,
      title: "Making Distance Feel Small",
      text: "How your sweet voice on the phone can make thousands of kilometers vanish in a single breath.",
    },
    {
      id: 4,
      title: "Your Signature Colors",
      text: "How breathtaking you look in black and navy blue—effortless, timeless, and completely stunning.",
    },
    {
      id: 5,
      title: "Your Generous Heart",
      text: "The quiet empathy and genuine kindness you show to everyone around you without ever asking for praise.",
    },
    {
      id: 6,
      title: "Being My Safe Space",
      text: "The way you patiently listen when I ramble on, making me feel understood and completely at peace.",
    },
    {
      id: 7,
      title: "Our Secret Language",
      text: "Our silly inside jokes, shared glances, and little quirks that only you and I understand.",
    },
    {
      id: 8,
      title: "Your Calming Presence",
      text: "How just seeing your face on video call or holding your hand in my memories settles all my stress.",
    },
    {
      id: 9,
      title: "Your Passion & Drive",
      text: "The determined, focused look in your eyes when you set your mind to achieving something you care about.",
    },
    {
      id: 10,
      title: "Your Playful Pout",
      text: "That undeniably cute expression whenever you are pretending to be mad at me for five seconds.",
    },
    {
      id: 11,
      title: "Warmth That Feels Like Home",
      text: "The memory of your head resting on my shoulder, where time stops and nothing else in the world matters.",
    },
    {
      id: 12,
      title: "Believing in Me",
      text: "How you always believe in my dreams, even during the quiet days when I hesitate to believe in myself.",
    },
    {
      id: 13,
      title: "Your Natural Grace",
      text: "The way you carry yourself with authentic confidence, never pretending to be anyone else.",
    },
    {
      id: 14,
      title: "Late Night Conversations",
      text: "Those long distance calls into the early morning where minutes feel like seconds.",
    },
    {
      id: 15,
      title: "Your Genuine Honesty",
      text: "Your candid, loyal heart that always stays true to what you believe and who you love.",
    },
    {
      id: 16,
      title: "The Little Things You Remember",
      text: "How you remember tiny details I mentioned weeks ago that I didn't even realize you caught.",
    },
    {
      id: 17,
      title: "Your Mesmerizing Eyes",
      text: "The depth and kindness in your eyes that made me fall for you on day one of 11th grade.",
    },
    {
      id: 18,
      title: "Sharing Food Across Miles",
      text: "Because even through a screen, I still want you to have the sweetest and best piece of mutton!",
    },
    {
      id: 19,
      title: "Nineteen & Infinite",
      text: "Because at 19, you are everything I ever prayed for, and loving you across any distance is the easiest choice of my life.",
    },
  ],

  // 6. Typewriter Love Letter (Expressing long-distance love)
  loveLetter: {
    salutation: "My Dearest Matsurika,",
    paragraphs: [
      "Happy 19th Birthday, my love. As I sit down to write this, my mind drifts right back to that first morning of Class 11. I had no idea that walking into that room would give me the person who would become my entire universe.",
      "Being in a long-distance relationship on your special day is not easy. I wish I could be standing right in front of you today, taking your hand, seeing that radiant smile up close, and wishing you happy birthday with a warm hug that lasts forever.",
      "Yet, every mile between us only proves how strong and pure what we have truly is. You are my first thought in the morning and my last prayer at night. You are the warmth in my heart, the voice that calms all my chaos, and the future I work so hard for.",
      "Nineteen is such a beautiful milestone. Watching you grow into this intelligent, graceful, compassionate woman is my greatest pride. I know distance is only temporary, but our love is forever.",
      "Tonight, look up at the moon. It's the exact same moon looking down on both of us. Until the day I can hold you in my arms again, please know that all my love is wrapped around you today.",
    ],
    closing: "Forever and always yours,",
    signature: "Yours, Kuttush ❤️",
    date: "October 9, 2026",
  },

  // 7. Background Music Configuration (Piano Solo)
  music: {
    src: "/music.mp3",
    trackName: "Our Piano Melody ✨",
    artist: "Piano Solo for Matsu-Chan",
    autoplayPrompt: "Tap to play our romantic piano melody 🎹",
  },

  // 8. Final Surprise (Tailored for Long Distance Birthday Celebration!)
  finalSurprise: {
    buttonPrompt: "Distance means nothing when you mean everything...",
    buttonText: "Open Your Gift 🎁",
    celebrationTitle: "Happy 19th Birthday, Matsu-Chan! ❤️",
    revealMessage:
      "Distance cannot stop our date! Tonight at 8:00 PM: Our Special Long-Distance Date & Hot Mutton Kosha delivered right to your door! 🍛✨",
    details: [
      "🍛 Authentic Hot Mutton Kosha ordered & delivered straight to your doorstep tonight",
      "📱 A private candlelit video call at 8:00 PM — dress up in your favorite dark outfit and we'll celebrate together",
      "🎂 We cut your cake and have dinner together across the screen",
      "📦 A special courier birthday gift parcel arriving into your hands",
      "✈️ Counting down every second until our next reunion where I get to hold you tight in person"
    ],
    closingNote: "No matter how many kilometers lie between us, every heartbeat of mine belongs right next to yours. Soon I will be holding your hand again. Happy 19th Birthday, my angel. — Kuttush ❤️",
  },
};
