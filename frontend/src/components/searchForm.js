import React, { useState } from 'react';
import axios from 'axios';
import ProductList from './productList';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');
  const [products, setProducts] = useState([]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const handleClear = () => {
    setProducts([]);
    setQuery('');
    setPage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (query.trim() === '' || !Number.isInteger(Number(page)) || Number(page) <= 0) {
      alert('Invalid input! Please enter a valid search query and page number.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/?query=${query}&page=${page}`);
      setProducts(response.data);
    } catch (error) {
      alert('Error fetching data from the server.');
    }
  };

  return (
    <div className='flex flex-col w-[1050px] items-start rounded-md border border-solid border-gray-300 bg-white shadow-md z-10'>
      <div className='flex justify-between items-center self-stretch py-2'>
        <form onSubmit={handleSubmit} className='flex max-w-[140px] flex-col items-start flex-1 pt-3 pr-2 pb-3 pl-5 gap-4 self-stretch bg-neutral-100'>
          <div className='flex items-center gap-4'>
            <div className='flex flex-col'>
              <label>Search Query:</label>
              <input type='text' value={query} onChange={handleQueryChange} className='border rounded border-gray-300 outline-none'/>
            </div>
            <div className='flex flex-col'>
              <label>Page Number:</label>
              <input type='text' value={page} onChange={handlePageChange} className='border rounded border-gray-300 outline-none'/>
            </div>
            <div className='flex pt-5 gap-2'>
              <button type='submit' className='flex w-20 px-4 py-2 justify-center items-center gap-2 rounded-md bg-neutral-200 font-inter font-medium text-[14px]/[20px] text-neutral-800'>
                Search
              </button>
              <button type='button' onClick={handleClear} className='flex w-20 px-4 py-2 justify-center items-center gap-2 rounded-md bg-neutral-200 font-inter font-medium text-[14px]/[20px] text-neutral-800'>
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className='flex flex-col self-stretch items-flex-start pt-3 pr-2 pb-12 pl-5 gap-1'>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default SearchForm;