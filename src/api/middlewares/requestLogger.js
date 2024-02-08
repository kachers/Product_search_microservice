function requestLogger(req, res, next) {
    console.log({
      type: 'messageIn',
      body: req.body,
      method: req.method,
      path: req.path,
      dateTime: new Date().toISOString(),
    });
    next();
  }
  
  module.exports = requestLogger;