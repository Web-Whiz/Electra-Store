import { FaBars } from "react-icons/fa";

const CategoryNavBar = () => {
  const categories = [
    {
      name: "Books",
      img: "https://ibb.co/b3v7C19",
    },
    {
      name: "Electronics",
      img: "https://ibb.co/SJDHvFW",
    },
    {
      name: "Men Fashion",
      img: "https://ibb.co/1Z4v4xQ",
    },
    {
      name: "Women Fashion",
      img: "https://ibb.co/njpPQH3",
    },
    {
      name: "Toys & Kids",
      img: "https://ibb.co/qMw858Z",
    },
    {
      name: "Home & Living",
      img: "https://ibb.co/dDwvGBc",
    },
    {
      name: "Sport & Outdoor",
      img: "https://ibb.co/LtHkN8c",
    },
    {
      name: "Beauty & Cosmetics",
      img: "https://ibb.co/5js7nyQ",
    },
  ];
  return (
    <div className="bg-[#F8FAFC]">
      <ul className="max-w-screen-2xl py-3 mx-auto list-none flex items-center justify-between">
        <li className="cursor-pointer text-xl">
          <FaBars />
        </li>
        {categories.map((category) => {
          return (
            <li key={category.name} className="cursor-pointer">
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryNavBar;
