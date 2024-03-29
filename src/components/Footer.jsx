import React from "react";
import logo from "../assets/logo_name.png";
import socialIcon1 from "../assets/twitter.webp";
import socialIcon2 from "../assets/facebook-circular.webp";
import socialIcon3 from "../assets/insta.webp";
import socialIcon4 from "../assets/linkedin.webp";
import socialIcon5 from "../assets/apple-store.webp";
import socialIcon6 from "../assets/google-play-stroe.webp";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="lg:p-20 p-5 pb-0 w-full flex flex-row gap-10 lg:flex-nowrap flex-wrap">
        <div className="lg:w-5/6 w-full  h-full flex gap-16">
          <div className="lg:w-1/3 w-full  h-72">
            <img src={logo} alt="" />
            <div className="flex gap-7 justify-center mt-10 lg:flex-nowrap flex-wrap">
              <img
                src={socialIcon1}
                alt=""
                className="w-10 h-10 cursor-pointer"
              />
              <img
                src={socialIcon2}
                alt=""
                className="w-10 h-10 cursor-pointer"
              />
              <img
                src={socialIcon3}
                alt=""
                className="w-10 h-10 cursor-pointer"
              />
              <img
                src={socialIcon4}
                alt=""
                className="w-10 h-10 cursor-pointer"
              />
            </div>
          </div>
          <div className="lg:w-1/3 w-full  lg:h-72 h-auto flex justify-around lg:flex-nowrap flex-wrap">
            <div>
              <ul className="flex flex-col gap-3 text-lg font-semibold text-gray-600">
                <li className="hover:text-black cursor-pointer">Home</li>
                <li className="hover:text-black cursor-pointer">
                  Buy Furniture
                </li>
                <li className="hover:text-black cursor-pointer">
                  Rent Furniture
                </li>
                <li className="hover:text-black cursor-pointer">
                  Annual Returns
                </li>
              </ul>
            </div>
            <div >
              <ul className="lg:flex hidden flex-col gap-3 text-lg font-semibold text-gray-600">
                <li className="hover:text-black cursor-pointer">About Us</li>
                <li className="hover:text-black cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-black cursor-pointer">
                  Terms and Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/6 w-full  lg:h-72 h-full lg:p-10 mb-5 pt-0 flex flex-col justify-start items-center">
          <p className="text-xl font-semibold mb-5">Need Help?</p>
          <button className="pl-5 pr-5 pt-2 pb-2 text-white text-lg font-semibold rounded-full bg-[#059baa] hover:border hover:border-[#059baa] hover:bg-white hover:text-black hover:translate-y-1 duration-500">
            Help Center
          </button>
        </div>
      </div>
      <hr />
      <div className="lg:p-20 p-10 flex lg:flex-nowrap flex-wrap justify-center">
        <div className="lg:w-2/3 w-full">
          <p className="font-semibold">CITIES WE DELIVER TO</p>
          <p>
            Bengaluru, Mumbai, Pune, Delhi, Gurugram, Noida, Hyderabad, Chennai,
            Ghaziabad, Faridabad, Jaipur, Mysuru, Chandigarh, Vijayawada, Nashik
          </p>
        </div>
        <div className="lg:w-1/3 w-full flex gap-5 mt-10 lg:mt-0 lg:flex-nowrap flex-wrap">
          <img src={socialIcon5} alt="" className="w-52 h-auto" />
          <img src={socialIcon6} alt="" className="w-52 h-auto" />
        </div>
      </div>
      <hr />
      <div className="w-full h-32 flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/pramendra-shukla-11812a221/"
          target="_blank"
          className="text-xl text-gray-700 hover:text-black font-bold shadow-md rounded-2xl p-2"
        >
          Made With ❤️ &nbsp;By Pramendra Shukla
        </a>
      </div>
    </>
  );
};

export default Footer;
