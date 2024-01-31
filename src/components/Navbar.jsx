import React from "react";
import logo from "../assets/logo_name.png";
import { GrMapLocation } from "react-icons/gr";
import { CgCheckO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="h-auto shadow-xl p-5 flex justify-between bg-[#fcfcfc]">
      
      <div className="flex gap-10 items-center">
        <div>
          <img src={logo} alt="" className="w-52" />
        </div>
        <div className="lg:flex hidden gap-3 items-center">
          <GrMapLocation size={30} className="text-gray-500 " />
          <div>
            <p className="font-semibold text-gray-500 hover:text-[#059baa] cursor-pointer">
              Delivery to <br />
              201310
            </p>
          </div>
        </div>
        <div className="lg:flex hidden gap-2 items-center cursor-pointer ">
          <CgCheckO size={30} className="text-gray-500  " />
          <p className="font-semibold text-gray-500  cursor-pointer ">Buy</p>
          <IoIosArrowDown size={20} className="text-gray-500 " />
        </div>
        <div className="lg:flex hidden gap-2 items-center cursor-pointer ">
          <MdOutlineAccessTime size={30} className="text-gray-500  " />
          <p className="font-semibold text-gray-500  cursor-pointer ">Rent</p>
          <IoIosArrowDown size={20} className="text-gray-500 " />
        </div>
      </div>

      <div className="flex items-center lg:gap-10 gap-5">
        <div>
          <input
            type="text"
            placeholder="What are you searching for?"
            className="lg:flex hidden lg:p-5 p-2 shadow-md rounded-full lg:w-96 w-56 outline-none lg:placeholder:text-lg placeholder:text-sm text-lg text-gray-600"
          />
        </div>
        <div className="">
          <FaRegUser
           
            className="text-gray-500 hover:text-[#059baa] cursor-pointer shadow-sm text-2xl lg:text-3xl"
          />
        </div>
        <div className="">
          <FaRegHeart
           
            className="text-gray-500 hover:text-[#059baa] cursor-pointer shadow-sm text-2xl lg:text-3xl"
          />
        </div>
        <div>
          <HiOutlineShoppingCart
            
            className="text-gray-500 hover:text-[#059baa] cursor-pointer shadow-sm text-2xl lg:text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
