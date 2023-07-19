import React from "react";
import img from "../../assets/MoneyBackImage.png";

const MoneyBackGuarantee = () => {
  return (
    <div className="bg-[#FFF0E9] relative">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <div className="py-48">
          <h2 className="font-bold w-[375px] text-[36px]">
            Money Back Garantee
          </h2>
          <p className="mt-[17px] text-[24px]">
            Recieve your items as described<br></br>
            or get your money back
          </p>
          <button className="btn w-[214px] h-[54px] bg-[#ED6620] mt-[40px]">
            +List and Item
          </button>
        </div>
        <div className="absolute right-0">
          <img src={img} className="" />
        </div>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;
