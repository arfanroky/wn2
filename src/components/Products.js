import React, { useState } from 'react';
import { useEffect } from 'react';
import { productsData } from '../Data/ProductsData';
import ProductCard from './ProductCard';

const Products = ({ query , priceFilterItem}) => {
  const [filtered, setFiltered] = useState(productsData);

  useEffect(() => {
    setFiltered(priceFilterItem)
  }, [priceFilterItem])

  const handleFilterProduct = async (value) => {
    const result = await productsData.filter((pd) => pd.title === value);
     setFiltered(result);
  };

  return (
    <div className="py-4">
      <div className="flex justify-between px-2 mb-4 items-center">
        <p>Home / Home decoration / Artificial</p>
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className="border border-black pr-6 pl-2 cursor-pointer rounded py-1 font-medium"
          >
            Sort by
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-4 shadow mt-4 bg-red-500 hover:bg-red-700 rounded-lg cursor-pointer text-white"
          >
            <li
              className="py-1"
              onClick={() => handleFilterProduct('Decoration')}
            >
              Decoration
            </li>
            <li className="py-1" onClick={() => handleFilterProduct('Stylish')}>
              Stylish
            </li>
            <li
              className="py-1"
              onClick={() => handleFilterProduct('Freshness')}
            >
              Freshness
            </li>
            <li className="py-1" onClick={() => setFiltered(productsData)}>
              All
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {filtered
          .filter((pd) => pd.category.toLowerCase().includes(query))
          .map((pd, index) => (
            <ProductCard key={index} product={pd} />
          ))}
      </div>
    </div>
  );
};

export default Products;
