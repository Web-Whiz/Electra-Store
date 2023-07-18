import React, { useState } from "react";
import logo from "../../assets/Navbar/logo.png";
import Register from "./Register";
import Login from "./LogIn";
const SignIn = () => {
  const [login, setLogin] = useState("login");
  return (
    <div>
      <div className="lg:max-w-screen-2xl px-8 2xl:px-0 mx-auto min-h-screen flex justify-center items-center">
        <div className="bg-[#F8FAFC] w-full md:w-[60%] lg:w-[40%] xl:w-[30%] h-fit rounded-md my-6">
          <div className="bg-[#ED6620] py-12 rounded-t-md">
            <div className="w-36 h-36 bg-[#F8FAFC] mx-auto rounded-full p-8 cursor-pointer">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="p-6">
            <div className="bg-[#F1F3F6] px-[6px] w-full h-12 rounded-lg grid grid-cols-2 gap-3 items-center text-center relative">
              <div
                className={`bg-[#ED6620] w-1/2 h-1 z-0 duration-700 absolute top-full transform -translate-y-full ${
                  login === "login"
                    ? "left-0 rounded-bl-lg"
                    : "left-1/2 rounded-br-lg"
                } `}></div>
              <button
                className={`${
                  login === "login" ? "text-[#ED6620]" : "text-slate-900"
                }  font-medium z-10`}
                onClick={() => setLogin("login")}>
                Login
              </button>
              <button
                className={`${
                  login === "register" ? "text-[#ED6620]" : "text-slate-900"
                }  font-medium z-10`}
                onClick={() => {
                  setLogin("register");
                }}>
                Register
              </button>
            </div>
            {(login === "login" && <Login />) ||
              (login === "register" && <Register />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
