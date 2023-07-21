import {
  BsFillPersonFill,
  BsCart4,
  BsClipboardData,
  BsList,
  BsHeart,
  BsCreditCard,
  BsPencilSquare,
} from "react-icons/bs";
import { FaClipboardCheck, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  const navItem = [
    {
      name: "My Account",
      path: "",
      icon: <BsFillPersonFill />,
    },
    {
      name: "Cart",
      path: "cart",
      icon: <BsCart4 />,
    },
    {
      name: "My Orders",
      path: "/myorders",
      icon: <FaClipboardCheck />,
    },
    {
      name: "Order History",
      path: "/orderhistory",
      icon: <BsClipboardData />,
    },
    {
      name: "My Lists",
      path: "/mylists",
      icon: <BsList />,
    },
    {
      name: "My Wishlist",
      path: "/mywishlist",
      icon: <BsHeart />,
    },
    {
      name: "Payment History",
      path: "/paymenthistory",
      icon: <BsCreditCard />,
    },
    {
      name: "My Reviews",
      path: "/myreviews",
      icon: <BsPencilSquare />,
    },
  ];
  const { user } = useAuth();
  return (
    <div className="w-full">
      <div className="p-3 mb-4 bg-orange-500 text-white flex items-center gap-3">
        <FaUserCircle className="text-4xl" />
        <div>
          <h3>Hello,</h3>
          <h2 className="text-lg uppercase font-semibold">
            {user?.displayName}
          </h2>
        </div>
      </div>
      <div className="bg-[#F4F4F4]">
        {navItem.map((item, index) => {
          return (
            <NavLink
              to={`${item.path}`}
              key={index}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-slate-800"
              }>
              <button className="p-3 w-full text-lg text-slate-800 font-medium uppercase cursor-pointer hover:text-magenta transition-all border-b-[2px] border-[#F8FAFC] duration-300 flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </NavLink>
          );
        })}
      </div>
      <button className="p-3 mt-4 bg-orange-500 w-full text-white flex items-center gap-3">
        <FaSignOutAlt className="text-4xl" />
        <div>
          <h2 className="text-lg uppercase font-semibold">Logout</h2>
        </div>
      </button>
    </div>
  );
};
export default UserMenu;
