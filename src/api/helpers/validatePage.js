function validatePage(page) {
    return typeof page === 'string' && parseInt(page) >= 1;
  }
  
  module.exports = validatePage;