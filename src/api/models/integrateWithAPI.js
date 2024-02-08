const axios = require('axios');

async function integrateWithAPI(query, page) {
  try {
    const apiUrl = 'https://dummyjson.com/products/search';
    const limit = 2;
    const skip = (page - 1) * limit;
    const response = await axios.get(apiUrl, {
      params: { q: query, page: page, limit: limit, skip: skip },
    });

    if (response.data && response.data.products) {
      return response.data.products;
    } else {
      throw new Error('Invalid response structure from third-party API');
    }
  } catch (error) {
    console.error('API Request Error:', error.message);
    throw new Error('Error integrating with third-party API');
  }
}

module.exports = integrateWithAPI;