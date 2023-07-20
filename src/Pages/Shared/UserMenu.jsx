import {
  BsFillPersonFill,
  BsCart4,
  BsClipboardData,
  BsList,
  BsHeart,
  BsCreditCard,
  BsPencilSquare,
} from "react-icons/bs";
import { FaClipboardCheck, FaUserCircle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
const DashboardMenu = () => {
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
      <div className="p-3 mb-4 bg-[#F4F4F4] flex items-center gap-3">
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
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }>
              <button
                key={index}
                className="p-3 w-full text-lg text-slate-800 font-medium uppercase cursor-pointer hover:text-magenta transition-all border-b-[2px] border-[#F8FAFC] duration-300 flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default DashboardMenu;
