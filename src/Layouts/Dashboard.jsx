import React from 'react';
import UserMenu from '../Pages/Shared/UserMenu';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-start gap-6 max-w-screen-2xl mx-auto py-5">
        <div className="w-[15%]">
          {/* <div
        className={`fixed top-0 left-0 z-50 w-[65%] md:w-[35%] lg:w-[15%] ${
          isOpen
            ? "translate-x-0 origin-right duration-500"
            : "-translate-x-[101%] lg:translate-x-0 origin-right duration-500"
        }`}> */}
          <UserMenu />
        </div>
        <div className="flex-1 bg-[#F4F4F4]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;