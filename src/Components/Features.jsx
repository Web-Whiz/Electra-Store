import feature1 from "../assets/Features/feature1.png";
import feature2 from "../assets/Features/feature2.png";
import feature3 from "../assets/Features/feature3.png";
import feature4 from "../assets/Features/feature4.png";

const Features = () => {
  const features = [
    {
      title: "No Fake Reviews",
      photo: feature1,
    },
    {
      title: "100% Money Protection",
      photo: feature2,
    },
    {
      title: "Efficient & Trusted Website",
      photo: feature3,
    },
    {
      title: "Buy Good Items, Cheap",
      photo: feature4,
    },
  ];
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-screen-2xl py-14 mx-auto px-8 2xl:px-0 grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
        {features.map((feature) => {
          return (
            <div key={feature.title} className="text-center space-y-4">
              <img className="mx-auto" src={feature.photo} alt="" />
              <h2 className="text-lg">{feature.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
