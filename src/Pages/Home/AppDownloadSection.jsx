import appStore from "../../assets/Footer-img/app-store.png";
import playStore from "../../assets/Footer-img/play-store.png";
import phone from "../../assets/Footer-img/image-4.png";

const AppDownloadSection = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="bg-[#EDEFFC] pt-16 pb-32 px-8 lg:pl-44">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Get the App</h2>
          <p className="text-lg font-normal">Buy and Sell Anything.</p>
          <p className="text-lg font-normal">
            Posting for Sale is Completely free
          </p>
        </div>
        <div className="flex flex-wrap gap-8 items-center mt-8">
          <img className="cursor-pointer" src={appStore} alt="" />
          <img className="cursor-pointer" src={playStore} alt="" />
        </div>
      </div>
      <div className="bg-[#A7AFEA] w-full h-full lg:pr-44">
        <img src={phone} className="lg:w-[512px] lg:-ml-32 -mt-28" alt="" />
      </div>
    </div>
  );
};

export default AppDownloadSection;
