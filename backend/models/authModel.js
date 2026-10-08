const bcrypt = require('bcryptjs');

// Accepted answers for "Where did we first meet?" / "What was the first day of class 11 like?"
const ACCEPTED_ANSWERS = [
  'class 11',
  'class 11th',
  '11',
  '11th',
  'first class of class 11',
  'first day of class 11',
  'class eleven',
  'eleven',
  'in class 11',
  'class xi',
  'xi'
];

// Salt and hash the accepted answers using bcrypt
const HASHED_ANSWERS = ACCEPTED_ANSWERS.map((ans) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(ans.toLowerCase().trim(), salt);
});

class AuthModel {
  /**
   * Normalizes the user input
   */
  static normalize(input) {
    if (!input || typeof input !== 'string') return '';
    return input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/gi, '') // remove punctuation
      .replace(/\s+/g, ' ');
  }

  /**
   * Verifies the answer against bcrypt hashes
   * @param {string} rawInput 
   * @returns {boolean}
   */
  static verify(rawInput) {
    const normalized = this.normalize(rawInput);
    if (!normalized) return false;

    // Check direct bcrypt comparison against our hashed answers
    for (const hash of HASHED_ANSWERS) {
      if (bcrypt.compareSync(normalized, hash)) {
        return true;
      }
    }

    // Also check if the normalized string contains key substrings
    // (e.g. if she types "it was in class 11 morning class")
    if (normalized.includes('class 11') || normalized.includes('11th') || normalized.includes('class xi')) {
      return true;
    }

    return false;
  }

  /**
   * Helper to hash an arbitrary string (used during development logic)
   */
  static hashString(plainText) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainText, salt);
  }
}

module.exports = AuthModel;
