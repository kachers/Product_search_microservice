import React from 'react';
import Product from './product';

const ProductList = ({ products }) => {
  return (
    <div className='flex flex-col items-center max-w-[1000px] gap-2'>
      {products.map((product) => (
        <Product key={product.title} product={product} />
      ))}
    </div>
  );
};

export default ProductList;