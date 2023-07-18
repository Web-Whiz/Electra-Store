import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import CategoryNavBar from '../Pages/Shared/CategoryNavBar';
import GetTheApp from '../Pages/Shared/GetTheApp';

const Main = () => {
    return (
        <div>
            <Navbar />
            <CategoryNavBar />
            <Outlet />
            <GetTheApp />
            <Footer />
        </div>
    );
};

export default Main;