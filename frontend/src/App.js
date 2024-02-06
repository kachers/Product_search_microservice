import React from 'react';
import './globals.css';
import SearchForm from './components/searchForm';

const App = () => {
  return (
    <div className='flex flex-col h-screen bg-neutral-300 relative'>
      <div className='flex flex-col items-center gap-20 pb-5 bg-neutral-800'>
        <div className='w-[1050px] flex flex-col items-start gap-3 flex-1'>
          <div className='flex items-start gap-2 pt-10'>
            <p className='self-stretch text-neutral-100 font-inter text-2xl font-medium tracking-tight'>Search App</p>
          </div>
        </div>
      </div>    
      <section className='flex flex-col items-center pb-44 bg-neutral-300'>
        <div className='w-screen h-[40px] absolute bg-neutral-800'></div>
        <SearchForm />
      </section>
      <footer className='flex flex-col items-start absolute bottom-0 py-4 px-[135px] gap-2.5'>
        <div className='flex max-w-[1170px] items-start self-stretch gap-2.5'>
          <p className='font-inter font-normal text-sm tracking-tight text-neutral-700'>© 2024 Renars Kacerovskis.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;