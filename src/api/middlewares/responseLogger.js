function responseLogger(req, res, next) {
    const originalSend = res.send;
  
    res.send = function (body) {
      console.log({
        type: 'messageOut',
        body: body,
        dateTime: new Date().toISOString(),
      });
      originalSend.apply(res, arguments);
    };
  
    next();
  }
  
  module.exports = responseLogger;