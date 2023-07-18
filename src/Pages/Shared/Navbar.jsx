import logo from "../../assets/Navbar/logo.png";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import BurgerMenu from "../../Components/BurgerMenu/BurgerMenu";
import Hamburger from "hamburger-react";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const { isOpen, setIsOpen, user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-[#F4F4F4] py-6 border-b-2">
        <div className="lg:max-w-screen-2xl px-8 2xl:px-0 mx-auto flex items-center justify-between">
          <div>
            <Link to="/">
              <img className="h-16 w-fit" src={logo} alt="" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="outline-none px-3 border-2 border-white duration-500 focus:border-[#ED6620]"
                placeholder="Search"
                style={{ width: "300px" }}
              />
              {/*Search button*/}
              <button
                className="px-6 py-3 bg-[#ED6620] text-white"
                type="button">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="space-x-8 hidden lg:block">
            <button className="text-xl">
              <FaRegHeart />
            </button>
            <button className="text-xl">
              <FiShoppingCart />
            </button>
            {!user ? (
              <Link to="/login">
                <button className="px-6 py-3 bg-[#ED6620] text-white rounded-md">
                  {" "}
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={handleLogOut}
                className="px-6 py-3 bg-[#ED6620] text-white rounded-md">
                {" "}
                Logout
              </button>
            )}
          </div>

          {/* mobile navigation bar */}
          <div className="block lg:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
            <div
              className={`fixed top-0 left-0 z-50 w-[65%] md:w-[35%] lg:w-[15%] ${
                isOpen
                  ? "translate-x-0 origin-right duration-500"
                  : "-translate-x-[101%] lg:translate-x-0 origin-right duration-500"
              }`}>
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
      {/* <Header/> */}
    </>
  );
};

export default Navbar;
