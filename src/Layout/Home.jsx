import AppDownloadSection from "../Pages/Home/AppDownloadSection";
import Banner from "../Pages/Home/Banner";
import Catalogue from './../Pages/Home/Catalogue';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-[500px]">
        <AppDownloadSection />
      </div>
      <div>
        <Catalogue></Catalogue>
      </div>
    </div>
  );
};

export default Home;