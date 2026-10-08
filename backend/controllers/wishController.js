const WishModel = require('../models/wishModel');
const ResponseView = require('../views/responseView');

class WishController {
  /**
   * Matsurika writes a birthday wish or sends a reaction
   * POST /api/wishes
   */
  static async submitWish(req, res) {
    try {
      const { sender, wish, reaction } = req.body;

      if (!wish && !reaction) {
        return ResponseView.fail(res, 'Please provide a wish message or reaction.');
      }

      const created = await WishModel.createWish({ sender, wish, reaction });
      return ResponseView.success(res, created, 'Wish recorded beautifully in the stars! ✨', 201);
    } catch (err) {
      console.error('[WishController.submitWish] Error:', err);
      return ResponseView.error(res, 'Could not save wish');
    }
  }

  /**
   * Fetches all wishes and reactions
   * GET /api/wishes
   */
  static async getWishes(req, res) {
    try {
      const wishes = await WishModel.getAllWishes();
      return ResponseView.success(res, wishes, 'Wishes retrieved');
    } catch (err) {
      console.error('[WishController.getWishes] Error:', err);
      return ResponseView.error(res, 'Could not fetch wishes');
    }
  }
}

module.exports = WishController;
