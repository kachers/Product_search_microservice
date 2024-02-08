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
  
  module.exports = transformApiResponse;