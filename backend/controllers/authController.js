const AuthModel = require('../models/authModel');
const ResponseView = require('../views/responseView');

class AuthController {
  /**
   * Unlocks the surprise web app using bcrypt-verified security
   * POST /api/unlock
   */
  static unlock(req, res) {
    try {
      const { answer } = req.body;

      if (!answer) {
        return ResponseView.fail(
          res,
          'Please enter your answer to unlock!',
          { hint: 'Think about where we first met...' },
          422
        );
      }

      const isMatch = AuthModel.verify(answer);

      if (isMatch) {
        return ResponseView.success(
          res,
          {
            unlocked: true,
            recipient: 'Matsurika',
            greeting: 'Welcome Matsu-Chan! Happy 19th Birthday! ❤️'
          },
          'Access granted! The birthday surprise is unlocked.'
        );
      } else {
        return ResponseView.fail(
          res,
          'Wrong answer, sweetie!',
          {
            unlocked: false,
            hint: 'Think back to the very first day of school when a certain boring class suddenly became the best place to be... Class 11! 😉'
          },
          401
        );
      }
    } catch (err) {
      console.error('[AuthController.unlock] Error:', err);
      return ResponseView.error(res, 'Internal server error verifying answer');
    }
  }

  /**
   * Generates a bcrypt hash for any test string during development logic
   * POST /api/hash
   */
  static hashSecret(req, res) {
    try {
      const { text } = req.body;
      if (!text) {
        return ResponseView.fail(res, 'Text is required to hash');
      }
      const hash = AuthModel.hashString(text);
      return ResponseView.success(res, { hash }, 'Hash generated using bcrypt');
    } catch (err) {
      return ResponseView.error(res, err.message);
    }
  }
}

module.exports = AuthController;
