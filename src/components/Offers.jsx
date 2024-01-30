import React from "react";
import bedroom from "../assets/bedroom_icon.webp";
import living from "../assets/living_icon.webp";
import appliances from "../assets/appliances_icon.webp";
import storage from "../assets/storage_icon.webp";
import study from "../assets/study_icon.webp";
import dining from "../assets/dining_icon.webp";
import deals from "../assets/deals_and_combos.webp";
import { Carousel } from "@material-tailwind/react";
import desktop1 from "../assets/renting_desktop_top_banners_quake2.jpg";
import desktop2 from "../assets/renting_desktop_top_banners_quake3.jpg";
import desktop3 from "../assets/renting_desktop_top_banners_quake4.jpg";
import desktop4 from "../assets/republic_day_desktop_rent.jpg";
import desktop5 from "../assets/unlmtd_desktop_home_monthly.jpg";
import discount from "../assets/discount.png";
import { TbDiscount2 } from "react-icons/tb";

const Offers = () => {
  return (
    <div className="p-20">
      
      <div className="flex justify-between">
        <div className="flex flex-col items-center cursor-pointer">
          <img src={bedroom} alt="" className="w-36" />
          <p className="text-lg text-gray-600">Bedroom</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img src={living} alt="" className="w-36" />
          <p className="text-lg text-gray-600">Living Room</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img src={appliances} alt="" className="w-36" />
          <p className="text-lg text-gray-600">Appliances</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img src={storage} alt="" className="w-36" />
          <p className="text-lg text-gray-600">Storage</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img src={study} alt="" className="w-36" />
          <p className="text-lg text-gray-600">Study</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img src={dining} alt="" className="w-36" />
          <p className="text-lg text-gray-600">Dining</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img src={deals} alt="" className="w-36" />
          <p className="text-lg text-gray-600">Deals & Combos</p>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <Carousel className="rounded-xl w-1/2" transition={{ duration: 2 }}>
          <img
            src={desktop1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={desktop2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={desktop3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={desktop4}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src={desktop5}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div></div>
      <div className="mt-32">
        <h1 className="text-3xl text-[#222222] font-semibold">
          Offers & Discounts
        </h1>
        <div className="flex gap-10 mt-10 justify-center ">
          <div className="relative cursor-pointer">
            <img src={discount} alt="" className="rounded-2xl " />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex p-5 flex-col justify-center">
              <div className="flex items-center h-10 text-2xl gap-4">
                <TbDiscount2 className="text-black" size={40} />
                <p className="text-black text-2xl font-bold">
                  Get Flat &#8377;2000 off
                </p>
              </div>
              <div className="ml-14">
                <p className="text-gray-800 font-semibold">
                  Apply this coupon to get FLAT &#8377;2000 off on your monthly
                  rent and chill. Great reason to start renting today!
                </p>
                <p className="font-bold text-gray-800 mt-5">Use Coupon Code : ROM2000</p>
              </div>
            </div>
            
          </div>
          <div className="relative cursor-pointer">
            <img src={discount} alt="" className="rounded-2xl " />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex p-5 flex-col justify-center">
              <div className="flex items-center h-10 text-2xl gap-4">
                <TbDiscount2 className="text-black" size={40} />
                <p className="text-black text-2xl font-bold">
                  Flat 30% off upto &#8377;1000
                </p>
              </div>
              <div className="ml-14">
                <p className="text-gray-800 font-semibold">
                  Apply this coupon to get FLAT 30% off upto &#8377;1000 off on your monthly
                  rent and chill. Great reason to start renting today!
                </p>
                <p className="font-bold text-gray-800 mt-5">Use Coupon Code : ROM30</p>
              </div>
            </div>
            
          </div>
          <div className="relative cursor-pointer">
            <img src={discount} alt="" className="rounded-2xl " />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex p-5 flex-col justify-center">
              <div className="flex items-center h-10 text-2xl gap-4">
                <TbDiscount2 className="text-black" size={40} />
                <p className="text-black text-2xl font-bold">
                Flat 50% off upto &#8377;1000
                </p>
              </div>
              <div className="ml-14">
              <p className="text-gray-800 font-semibold">
                  Apply this coupon to get FLAT 50% off upto &#8377;1500 off on your monthly
                  rent and chill. Great reason to start renting today!
                </p>
                <p className="font-bold text-gray-800 mt-5">Use Coupon Code : ROM50</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Offers;
