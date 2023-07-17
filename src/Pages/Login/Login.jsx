import React from "react";
import logo from "../../assets/logo.png";
const Login = () => {
  return (
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
        <div className="mt-1">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>
      </div>

      <div className="mt-10 pb-10">
        <button className="w-full block bg-[#ED6620] font-medium text-white border-[#ED6620] border-2 outline-none p-2 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
