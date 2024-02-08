function validateQuery(query) {
    return typeof query === 'string' && query.length >= 1;
  }
  
  module.exports = validateQuery;