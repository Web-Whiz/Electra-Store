import logo from "../../assets/logo.png";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
// import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#F4F4F4] py-6 border-b-2">
      <div className="lg:max-w-screen-2xl px-8 2xl:px-0 mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="h-16 w-fit" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <div className="relative flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="outline-none px-3 border-2 border-white duration-500 focus:border-[#ED6620]"
              placeholder="Search"
              style={{ width: "300px" }}
            />
            {/*Search button*/}
            <button className="px-6 py-3 bg-[#ED6620] text-white" type="button">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="space-x-8">
          <button className="text-xl">
            <FaRegHeart />
          </button>
          <button className="text-xl">
            <FiShoppingCart />
          </button>
          <button className="px-6 py-3 bg-[#ED6620] text-white rounded-md">
            {" "}
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
