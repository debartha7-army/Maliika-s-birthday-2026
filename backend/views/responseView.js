/**
 * MVC View Layer for formatting API JSON responses
 */
class ResponseView {
  static success(res, data = {}, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      status: 'success',
      message,
      data,
      timestamp: new Date().toISOString()
    });
  }

  static fail(res, message = 'Action failed', errors = null, statusCode = 400) {
    return res.status(statusCode).json({
      status: 'fail',
      message,
      errors,
      timestamp: new Date().toISOString()
    });
  }

  static error(res, message = 'Internal Server Error', statusCode = 500) {
    return res.status(statusCode).json({
      status: 'error',
      message,
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = ResponseView;
