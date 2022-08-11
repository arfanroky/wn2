import React, { useEffect, useState } from 'react';
import {AdjustmentsIcon, ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/solid';
import { productsData } from '../Data/ProductsData';

const SideNav = ({setPriceFilterItem}) => {
    const [filterByPrice, setFilterByPrice] = useState([0, 1000])

    useEffect(() => {
        const testing  = async () => {
            const result = await productsData.filter(pd => pd.price >=  filterByPrice[0]);
            const finalResult = await result.filter(pd => pd.price <= filterByPrice[1]);
          await setPriceFilterItem(finalResult);
        }
        testing()
    }, [filterByPrice, setPriceFilterItem])


    return (
        <aside className='p-4 shadow-lg h-[650px] bg-white mt-5 rounded-md'>
            <div className="flex items-center justify-between pb-3 border-b-2">
            <h1 className='font-bold text-xl'>Filter</h1>
            <AdjustmentsIcon className='w-6 h-6'/>
            </div>
            <div className='py-4 border-b-2'>
                <h2 className='font-medium mb-2'>Brand</h2>
                <ul>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Number A</span>
                    </li>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Brand B</span>
                    </li>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Brand C</span>
                    </li>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Miracle</span>
                    </li>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Empty </span>
                    </li>
                </ul>
            </div>

            <div className='py-4 border-b-2'>
                <h2 className='font-medium mb-2'>Category</h2>
                <ul>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Number A</span>
                    </li>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Brand B</span>
                    </li>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Brand C</span>
                    </li>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Miracle</span>
                    </li>
                    <li className='flex gap-4'>
                        <input type="checkbox"/>
                        <span className='font-medium'>Empty </span>
                    </li>
                </ul>
            </div>

            <div className='py-4 border-b-2' >
                <h2 className='font-medium mb-2'>Price</h2>
                <ul>
                    <li className='flex gap-4' onClick={() => setFilterByPrice([0, 100])}>
                        <input type="checkbox"/>
                        <span className='font-medium flex items-center gap-2'> <ArrowLeftIcon className='w-3 h-3 text-red-300'/> $100</span>
                    </li>
                    <li className='flex gap-4' onClick={() => setFilterByPrice([100, 199])}>
                        <input type="checkbox" />
                        <span className='font-medium'>$100 - $199</span>
                    </li>
                    <li className='flex gap-4' onClick={() => setFilterByPrice([200, 599])}>
                        <input type="checkbox"/>
                        <span className='font-medium'>$200 - $599</span>
                    </li>
                    <li className='flex gap-4' onClick={() => setFilterByPrice([600, 999])}>
                        <input type="checkbox"/>
                        <span className='font-medium'>$600 - $999</span>
                    </li>
                    <li className='flex gap-4' onClick={() => setFilterByPrice([1000, 1000])}>
                        <input type="checkbox"/>
                        <span className='font-medium flex items-center gap-2'> <ArrowRightIcon className='w-3 h-3 text-red-300'/> $1000</span>
                    </li>
                </ul>
            </div>
            
        </aside>
    );
};

export default SideNav;