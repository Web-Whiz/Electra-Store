import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

import img7 from "../../assets/Footer/image-7.png";
import img6 from "../../assets/Footer/image-6.png";
import img5 from "../../assets/Footer/image-5.png";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4]">
      <div className="lg:max-w-screen-2xl px-8 2xl:px-0 mx-auto py">
        <div className="grid pt-20 pb-10 lg:grid-cols-4  lg:justify-items-end items-start gap-8">
          <div className="">
            <h2 className="uppercase text-xl font-semibold mb-6">Contact us</h2>
            <div className="space-y-4">
              <p className="flex gap-2 font-normal items-start">
                <span className="mt-[3px]">
                  <FaHome />
                </span>
                <span>
                  B2-25 Vinhomes Gardenia, Ham Nghi, Cau Dien Ward, Nam Từ Liêm
                  District, Hanoi, Vietnam
                </span>
              </p>
              <p className="flex gap-2 font-normal items-start">
                <span className="mt-[3px]">
                  <FaPhoneAlt />
                </span>
                <span>Tel: 090 4433 126</span>
              </p>
              <p className="flex gap-2 font-normal items-start">
                <span className="mt-[3px]">
                  <FaEnvelope />
                </span>
                <span>Support: lienhe@electra.store</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-xl font-semibold mb-6">Support</h2>
            <div className="font-normal space-y-3">
              <p>How it Works</p>
              <p>Become a Seller</p>
              <p>Help Center / FAQ</p>
              <p className="text-orange-600">Guarantee for Buyers</p>
              <p>Feedback</p>
              <p>Operation Rules</p>
              <p>Conflict Resolution Policy</p>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-xl font-semibold mb-6">About us</h2>
            <div className="font-normal space-y-3">
              <p>About us</p>
              <p>Contact us</p>
              <hr className="border-[1px]" />
              <p>My Profile</p>
              <p>Favourites</p>
              <p>Messages</p>
            </div>
          </div>
          <div>
            <h2 className="uppercase text-xl font-semibold mb-6">Follow us</h2>
            <div className="flex items-center gap-8">
              <h3 className="text-xl bg-[#1877F2] text-white p-2 rounded-full cursor-pointer hover:scale-110 duration-300">
                <FaFacebookF />
              </h3>
              <h3 className="text-xl bg-[#1DA1F2] text-white p-2 rounded-full cursor-pointer hover:scale-110 duration-300">
                <FaTwitter />
              </h3>
              <h3 className="text-xl bg-gradient-to-bl from-[#ff01b3] via-[#a441ea] to-[#ff6904] text-white p-2 rounded-full cursor-pointer hover:scale-110 duration-300">
                <FaInstagram />
              </h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap gap-4 justify-start md:justify-between items-center py-5">
          <div>
            <img src={img7} alt="" />
          </div>
          <div className="flex items-center md:flex-nowrap flex-wrap gap-4">
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap-reverse py-4 md:justify-between gap-4 items-center">
          <div>
            <p className="text-slate-400 text-center">
              &copy; 2022 Electra store. All Rights Reserved
            </p>
          </div>
          <div>
            <ul className="list-none flex flex-col md:flex-row md:space-x-3">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Prohibited Items</li>
              <li>Prohibited Conduct</li>
              <li>Communication Policy</li>
              <li>Safety Guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
