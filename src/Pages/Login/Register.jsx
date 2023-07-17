import React from "react";
import logo from "../../assets/logo.png";
const Register = () => {
  return (
    <div className="mt-10">
      <div className="">
        <label htmlFor="name" className="text-lg font-normal">
          Name
        </label>
        <input
          id="name"
          className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="my-4">
        <label htmlFor="email" className="text-lg font-normal">
          Email
        </label>
        <input
          id="email"
          className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
          type="email"
          placeholder="Your Email"
        />
      </div>
      <div className="">
        <label htmlFor="password" className="text-lg font-normal">
          Password
        </label>
        <input
          id="password"
          className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
          type="password"
          placeholder="Your Password"
        />
        <div className="mt-2 space-x-2">
          <input type="checkbox" className="" id="condition" />
          <label htmlFor="condition">
            I agree the{" "}
            <span className="hover:text-[#ED6620] cursor-pointer font-medium">
              Terms & conditions
            </span>
          </label>
        </div>
      </div>

      <div className="mt-10 pb-10">
        <button className="w-full block bg-[#ED6620] font-medium text-white border-[#ED6620] border-2 outline-none p-2 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
