import React from 'react';

const ProductCard = ({product}) => {
    const {category, price, offPrice, offPercent, ratings, title, img} = product;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className='h-[250px] w-full'><img className='h-full w-full hover:scale-110 transition' src={img} alt="decoration" /></figure>
        <div className='p-2'>
          <h2 className="font-bold text-xl">{category}</h2>
          <p className='text-gray-500 mb-3'>{title}</p>
         <p className='text-yellow-400 '>{ratings.point} <span className='text-gray-500'>({ratings.count})</span></p>
         <div className="flex gap-2 items-center">
            <span className='text- font-bold'>${price}</span>
            <del className=' font-bold'>{offPrice}</del>
            <span className='text-green-500 font-bold'>{offPercent}</span>
         </div>
        </div>
      </div>
    )
};

export default ProductCard;