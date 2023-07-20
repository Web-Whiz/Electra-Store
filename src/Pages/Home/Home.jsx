import React from "react";
import Banner from "../../Components/HomePage/Banner";
import Features from "../../Components/HomePage/Features";
import Recommended from "../../Components/HomePage/Recommended";
import Catalogue from "../../Components/HomePage/Catalogue.jsx";

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="mt-2">
                <Banner />
            </div>

            {/* Features Section */}
            <div>
                <Features />
            </div>

            {/* All Catalogue Section */}
            <div>
                <Catalogue />
            </div>

            {/* Recommended For You Section */}
            <div>
                <Recommended />
            </div>
        </div>
    );
};

export default Home;
