const axios = require('axios');
const integrateWithAPI = require('../src/api/models/integrateWithAPI');

jest.mock('axios');

describe('integrateWithAPI', () => {
  test('integrates with API and returns products', async () => {
    const apiResponse = {
        data: {
          products: [
            {
              id: 1,
              title: 'iPhone 9',
              description: 'An apple mobile which is nothing like apple',
              price: 549,
              discountPercentage: 12.96,
              rating: 4.69,
              stock: 94,
              brand: 'Apple',
              category: 'smartphones',
              thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
              images: [
                'https://cdn.dummyjson.com/product-images/1/1.jpg',
                'https://cdn.dummyjson.com/product-images/1/2.jpg',
                'https://cdn.dummyjson.com/product-images/1/3.jpg',
                'https://cdn.dummyjson.com/product-images/1/4.jpg',
                'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
              ],
            },
            {
              id: 2,
              title: 'iPhone X',
              description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
              price: 899,
              discountPercentage: 17.94,
              rating: 4.44,
              stock: 34,
              brand: 'Apple',
              category: 'smartphones',
              thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
              images: [
                'https://cdn.dummyjson.com/product-images/2/1.jpg',
                'https://cdn.dummyjson.com/product-images/2/2.jpg',
                'https://cdn.dummyjson.com/product-images/2/3.jpg',
                'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
              ],
            },
          ],
          total: 4,
          skip: 0,
          limit: 2,
        },
      };

    axios.get.mockResolvedValue(apiResponse);

    const query = 'phone';
    const page = 1;
    const result = await integrateWithAPI(query, page);

    expect(result).toEqual(apiResponse.data.products);
    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/products/search', {
      params: { q: query, page: page, limit: 2, skip: 0 },
    });
  });

  test('throws an error on API request error', async () => {
    axios.get.mockRejectedValue(new Error('Mock API Request Error'));

    await expect(integrateWithAPI('errorQuery', 1)).rejects.toThrow('Error integrating with third-party API');
  });
});