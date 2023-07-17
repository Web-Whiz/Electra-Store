import React from 'react';
import freeShipping from '../../assets/product-card/shipping.tif.png'
import { FaRegHeart } from 'react-icons/fa';

const ProductCard = ({product}) => {

    const {id, title, image, price, shipping_cost, category, popular} = product;

    return (
        <div className='w-[280px] h-[360px] mx-auto rounded-2xl hover:shadow-2xl hover:shadow-[#7bb2ff87] duration-300 group'>
            <figure className='relative overflow-hidden rounded-2xl'>
                <div className='absolute top-6 right-6 duration-300 z-10'>
                    <button className='hover:scale-110 duration-300 bg-[#000000ab] hover:bg-[#193b53b1] p-3 rounded-full'><FaRegHeart className='text-2xl text-white' /> </button>
                </div>
                <img className='w-full h-[210px] rounded-2xl group-hover:scale-110 duration-300' src={image} alt="Here will product title" />
            </figure>
            <div className='space-y-4 mx-2 my-2 hover:cursor-pointer'>
                <h3 className='text-2xl font-semibold my-4'>{title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-semibold text-orange-600'>Price: $<span>{price}</span></p>
                    <p className='flex items-center justify-between gap-2 text-lg text-gray-400'><span><img className='w-6' src={freeShipping} alt="" /></span> Free Shipping</p>
                </div>
                <p className='text-lg text-gray-400'>Dhaka</p>
            </div>
        </div>
    );
};

export default ProductCard;