import React, { useState } from 'react';
import { productsData } from '../Data/ProductsData';
import Navbar from './Navbar';
import Products from './Products';
import SideNav from './SideNav';

const Home = () => {
    const [query, setQuery] = useState('');
    const [priceFilterItem, setPriceFilterItem] = useState(productsData);

    return (
   <>
   <Navbar setQuery={setQuery}/>
       <main className='bg-gray-100'>
         <div className='container mx-auto '>
            <div className="grid md:grid-cols-4  grid-cols-1 gap-6 md:justify-items-stretch justify-items-center">
              <div className="md:col-span-1 w-full md:px-0 px-14">
              <SideNav setPriceFilterItem={setPriceFilterItem}/>
              </div>
                <div className='md:col-span-3'>
                <Products query={query} priceFilterItem={priceFilterItem}/>
                </div>
            </div>
        </div>
       </main>
   </>
    );
};

export default Home;