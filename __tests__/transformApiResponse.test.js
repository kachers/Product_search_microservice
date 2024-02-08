const transformApiResponse = require('../src/api/helpers/transformApiResponse');

describe('transformApiResponse', () => {
  test('calculates final price and transforms API response correctly', () => {
    const apiResponse = {
      data: {
        products: [
          {
            title: 'Product 1',
            description: 'Description 1',
            price: '20.00',
            discountPercentage: '10',
          },
          {
            title: 'Product 2',
            description: 'Description 2',
            price: '30.00',
            discountPercentage: '5',
          },
        ],
      },
    };

    const expectedTransformedProducts = [
      {
        title: 'Product 1',
        description: 'Description 1',
        final_price: '18.00', 
      },
      {
        title: 'Product 2',
        description: 'Description 2',
        final_price: '28.50', 
      },
    ];

    const transformedProducts = transformApiResponse(apiResponse);
    expect(transformedProducts).toEqual(expectedTransformedProducts);
  });
});