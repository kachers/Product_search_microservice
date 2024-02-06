import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='flex items-center gap-4 pl-2 pt-2 pb-4 self-stretch rounded-md border border-neutral-400 bg-neutral-100'>
      <div className='flex items-center gap-4 flex-1'>
        <div className='flex flex-col max-w-[140px] items-left gap-1 flex-1'>
          <p className='text-neutral-700 font-Inter text-xs font-normal tracking-[-0.2px] opacity-70'>Title:</p>
          <p className='font-Inter text-[14px]/[22px] font-medium tracking-[-0.205px] text-neutral-800'>{product.title}</p>
        </div>
        <div className='flex flex-col max-w-[710px] items-left gap-1 flex-1'>
          <p className='text-neutral-700 font-Inter text-xs font-normal tracking-[-0.2px] opacity-70'>Description:</p>
          <p className='font-Inter text-[14px]/[22px] text-gray-700 mb-2'>{product.description}</p>
        </div>
        <div className='flex flex-col max-w-[80px] items-right gap-1 flex-1'>
          <p className='text-neutral-700 font-Inter text-xs font-normal tracking-[-0.2px] opacity-70 text-right'>Final Price:</p>
          <p className='text-green-600 font-bold text-right'>${product.final_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;