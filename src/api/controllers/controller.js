const validateQuery = require('../helpers/validateQuery');
const validatePage = require('../helpers/validatePage');
const transformApiResponse = require('../helpers/transformApiResponse');
const integrateWithAPI = require('../models/integrateWithAPI');

async function searchController(req, res, next) {
  const isQueryValid = validateQuery(req.query.query);
  const isPageValid = validatePage(req.query.page);
  
  try {
    if (!isQueryValid) {
      throw new Error('Invalid query parameter');
    }

    if (!isPageValid) {
      throw new Error('Invalid page parameter');
    }

    const apiProducts = await integrateWithAPI(req.query.query, req.query.page);
    const transformedProducts = transformApiResponse({ data: { products: apiProducts } });

    res.json(transformedProducts);
  } catch (error) {
    next(error);
  }
}

module.exports = searchController;