import ProductCard from "../Components/ProductCard/ProductCard";
import AppDownloadSection from "../Pages/Home/AppDownloadSection";
import Banner from "../Pages/Home/Banner";
import Header from "../Shared/Navbar/Header";
import Catalogue from "./../Pages/Home/Catalogue";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div>
        <Catalogue></Catalogue>
      </div>
      <div className="md:mx-44 md:my-12 px-2 md:px-0 border-y-2 py-12">
        <div className="flex items-baseline gap-16">
          <h1 className="text-4xl font-semibold">Recommended</h1>
          <button className="text-blue-500 text-lg font-semibold hover:underline">
            See All
          </button>
        </div>
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mt-[500px]">
        <AppDownloadSection />
      </div>
    </div>
  );
};

export default Home;
