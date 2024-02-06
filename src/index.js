const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = 8080;

const app = express();
app.use(cors());

function validateQuery(query) {
    return typeof query === 'string' && query.length >= 1;
  }

function validatePage(page) {
    return typeof page === 'string' && parseInt(page) >= 1;
}

function transformApiResponse(response) {
    const apiProducts = response.data.products;
  
    const transformedProducts = apiProducts.map(apiProduct => {
      const finalPrice = parseFloat(apiProduct.price) - (parseFloat(apiProduct.price) * parseFloat(apiProduct.discountPercentage) / 100);
      
      return {
        title: apiProduct.title,
        description: apiProduct.description,
        final_price: finalPrice.toFixed(2),
      };
    });
  
    return transformedProducts;
  }

async function integrateWithAPI(query, page) {
    try {
      const apiUrl = 'https://dummyjson.com/products/search';
      const limit = 2; 
      const skip = (page - 1) * limit; 
      const response = await axios.get(apiUrl, {
        params: { q: query, page: page, limit: limit, skip: skip },
      });
  
      if (response.data && response.data.products) {
        const transformedProducts = transformApiResponse(response);
        return transformedProducts;
    } else {
        throw new Error('Invalid response structure from third-party API');
    }
    } catch (error) {
        console.error('API Request Error:', error.message);
        throw new Error('Error integrating with third-party API');
    }
  }

  app.use((req, res, next) => {
    console.log({
        type: 'messageIn',
        body: req.body,
        method: req.method,
        path: req.path,
        dateTime: new Date().toISOString(),
    });
    next();
});

app.use((req, res, next) => {
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
});

  app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.get('/', async (req, res, next) => {
    console.log('Received a request at /');

    const isQueryValid = validateQuery(req.query.query);
    const isPageValid = validatePage(req.query.page);

    try {
        const isQueryValid = validateQuery(req.query.query);
        const isPageValid = validatePage(req.query.page);

        if (!isQueryValid) {
            throw new Error('Invalid query parameter');
        }

        if (!isPageValid) {
            throw new Error('Invalid page parameter');
        }

        const transformedProducts = await integrateWithAPI(req.query.query, req.query.page);

        res.json(transformedProducts);
    } catch (error) {
        next(error);
    }
});

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });