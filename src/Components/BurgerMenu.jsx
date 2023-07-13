// import { useState } from "react";

import { AiFillHome, AiOutlineBulb, AiOutlineUser } from "react-icons/ai";
import { MdDashboard, MdCodeOff } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { LuGithub, LuLinkedin } from "react-icons/lu";

import Hamburger from "hamburger-react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useStateContext from "../Hooks/useStateContext";
const BurgerMenu = () => {
  const { isOpen, setIsOpen } = useStateContext();
  const navItem = [
    {
      name: "Home",
      path: "/",
      icon: <AiFillHome />,
      sectionId: "home",
    },
    {
      name: "Features",
      path: "/features",
      icon: <AiOutlineBulb />,
      sectionId: "features",
    },
    {
      name: "Skills",
      path: "#skills",
      icon: <MdCodeOff />,
      sectionId: "skills",
    },
    {
      name: "Portfolio",
      path: "#portfolio",
      icon: <MdDashboard />,
      sectionId: "portfolio",
    },
    {
      name: "About",
      path: "/about",
      icon: <AiOutlineUser />,
      sectionId: "about",
    },
    {
      name: "Contact",
      path: "/blog",
      icon: <IoMdContacts />,
      sectionId: "contact",
    },
  ];
  return (
    <div
      className={`w-full overflow-y-scroll navbar-scrollbar px-3 py-5 h-screen bg-[#F4F4F4]`}>
      <h2 className="text-slate-800 text-4xl flex justify-end lg:hidden">
        <Hamburger toggled={isOpen} toggle={() => setIsOpen(false)} />
      </h2>
      <div className="mt-16 flex justify-center">
        <Link to="/">
          <img className=" w-56 cursor-pointer" src={logo} alt="" />
        </Link>
      </div>
      <div className="py-10 mt-8 mx-5 flex flex-col">
        {navItem.map((item, index) => {
          return (
            <div
              key={index}
              className="py-2 px-2 text-lg text-slate-700 font-medium uppercase cursor-pointer hover:text-magenta transition-all duration-300">
              <button className="cursor-pointer hover:text-magenta flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </div>
          );
        })}
        <div className="w-full h-[1px] bg-slate-700 flex flex-row items-center self-stretch mt-8 mb-4"></div>
        <div>
          <h2 className="text-lg uppercase text-slate-400">find with me</h2>
          <div className="flex justify-around mt-6 gap-3">
            <a
              href="https://www.facebook.com/Muhammad.Hamim.01"
              rel="noreferrer"
              target="_blank"
              className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
              <FiFacebook />
            </a>
            <a
              href="https://github.com/Muhammad-Hamim"
              rel="noreferrer"
              target="_blank"
              className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
              <LuGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadhamim01/"
              rel="noreferrer"
              target="_blank"
              className="text-xl bg-gray-900 text-white p-3 rounded-md hover:text-magenta duration-300 hover:-translate-y-2">
              <LuLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
