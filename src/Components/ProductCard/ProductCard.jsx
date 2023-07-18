import React from "react";
import { FaRegHeart, FaShippingFast } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { title, image, price, shipping_cost, location } = product;

  return (
    <div className="w-[280px] h-[360px] mx-auto rounded-2xl hover:shadow-2xl hover:shadow-[#ff8d3c61] duration-300 group">
      <figure className="relative overflow-hidden rounded-2xl">
        <div className="absolute top-6 right-6 duration-300 z-10">
          <button className="hover:scale-110 duration-300 bg-[#000000ab] hover:bg-[#3b1e117d] p-3 rounded-full">
            <FaRegHeart className="text-2xl text-white" />{" "}
          </button>
        </div>
        <img
          className="w-full h-[210px] rounded-2xl group-hover:scale-110 duration-300"
          src={image}
          alt="Here will product title"
        />
      </figure>
      <div className="space-y-4 mx-2 my-2 hover:cursor-pointer">
        <h3 className="text-2xl font-semibold my-4">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-orange-600">
            Price: $<span>{price}</span>
          </p>
          <p className="flex items-center justify-between gap-2 text-lg text-gray-400">
            <span>
              <FaShippingFast />
            </span>{" "}
            {shipping_cost === 0 ? "Free Shipping" : `${shipping_cost}`}
          </p>
        </div>
        <p className="text-lg text-gray-400">{location}</p>
      </div>
    </div>
  );
};

export default ProductCard;
