import React from "react";
import logo from "../../assets/logo.png";
const Login = () => {
  return (
    <div className="lg:max-w-screen-2xl px-8 2xl:px-0 mx-auto min-h-screen flex justify-center items-center">
      <div className="bg-[#F8FAFC] w-full md:w-[60%] lg:w-[40%] xl:w-[30%] h-fit rounded-md my-6">
        <div className="bg-[#ED6620] py-12 rounded-t-md">
          <div className="w-36 h-36 bg-[#F8FAFC] mx-auto rounded-full p-8 cursor-pointer">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-4xl text-center font-semibold">Please Login</h2>
          <div className="mt-10">
            <div className="">
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
            <div className="my-4">
              <label htmlFor="password" className="text-lg font-normal">
                Password
              </label>
              <input
                id="password"
                className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
                type="password"
                placeholder="Your Password"
              />
            </div>
            <div className="mt-10 pb-10">
              <button className="w-full block bg-[#ED6620] font-medium text-white border-[#ED6620] border-2 outline-none p-2 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
