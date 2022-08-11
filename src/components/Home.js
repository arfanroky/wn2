import React, { useState } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import SideNav from './SideNav';

const Home = () => {
    const [query, setQuery] = useState('');
    console.log(query);
    return (
   <>
   <Navbar setQuery={setQuery}/>
       <main className='bg-gray-100'>
         <div className='container mx-auto '>
            <div className="grid md:grid-cols-4  grid-cols-1 gap-6">
              <div className="col-span-1 ">
              <SideNav/>
              </div>
                <div className='col-span-3'>
                <Products query={query}/>
                </div>
            </div>
        </div>
       </main>
   </>
    );
};

export default Home;