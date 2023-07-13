import AppDownloadSection from "../Pages/Home/AppDownloadSection";

import Banner from "../Pages/Home/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-[500px]">
        <AppDownloadSection />
      </div>
    </div>
  );
};

export default Home;