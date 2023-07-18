import React from "react";

const CatalogueCard = ({ catalogue }) => {
  const { title, image } = catalogue;

  return (
    <div className="w-[200px] h-[200px] bg-[#FFEBE1] rounded-full flex flex-col justify-center items-center mx-auto shadow-xl shadow-[#1104011f] hover:shadow-2xl hover:shadow-[#f5330c6c] my-4 hover:cursor-pointer">
      <img
        className="w-[100px] h-[115px] mb-2"
        src={image}
        alt={title}
      />
      <h5>{title}</h5>
    </div>
  );
};

export default CatalogueCard;
