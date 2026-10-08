const ContentModel = require('../models/contentModel');
const ResponseView = require('../views/responseView');

class ContentController {
  /**
   * Retrieves birthday content configuration
   * GET /api/content
   */
  static getContent(req, res) {
    try {
      const data = ContentModel.getSurpriseData();
      return ResponseView.success(res, data, 'Surprise content fetched successfully');
    } catch (err) {
      console.error('[ContentController.getContent] Error:', err);
      return ResponseView.error(res, 'Failed to fetch surprise content');
    }
  }
}

module.exports = ContentController;
