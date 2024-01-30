import React from "react";
import newImg from "../assets/new_renting.webp";
import sofa1 from "../assets/sofa1.webp";
import almira1 from "../assets/almira1.webp";
import bed1 from "../assets/bed1.webp";
import chair1 from "../assets/chair1.webp";
import sofa2 from "../assets/sofa2.webp";
import almira2 from "../assets/almira2.webp";
import bed2 from "../assets/bed2.webp";
import chair2 from "../assets/chair2.webp";


const NewArrivals = () => {
  return (
    <div>
      <div className="p-20 flex gap-3 items-center mb-2">
        <img src={newImg} alt="" className="w-16" />
        <div>
          <p className="text-3xl text-gray-800">New Arrivals</p>
          <p className="text-gray-600">TO RENT</p>
        </div>
      </div>
      <div className=" p-20 flex gap-10 flex-wrap ">
        {/* Product card */}
        <div className="relative">
          <div className="w-96 h-[400px] shadow-xl flex items-end">
            <img src={sofa1} alt="" className="absolute bottom-36 w-[400px]" />
            <div className="">
              <p className="p-10 pb-4 text-xl font-semibold">
                Noah Fabric 3 Seater Sofa in Turquoise Color
              </p>
              <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                Rent
              </p>
              <div className="flex mt-5 ml-10 gap-5 items-start">
                <p className=" text-2xl font-bold mb-7">&#8377;560/mo</p>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                    -34%
                  </p>
                  <p className="font-semibold line-through text-gray-500 ">
                    &#8377;847/mo
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
         {/* Product card end */}

        {/* Product card */}
        <div className="relative">
          <div className="w-96 h-[400px] shadow-xl flex items-end">
            <img src={almira1} alt="" className="absolute bottom-48 left-10 w-[300px]" />
            <div className="">
              <p className="p-10 pb-4 text-xl font-semibold">
              Haimish Engineered Wood 2 Door Wardrobe with...
              </p>
              <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                Rent
              </p>
              <div className="flex mt-5 ml-10 gap-5 items-start">
                <p className=" text-2xl font-bold mb-7">&#8377;560/mo</p>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                    -34%
                  </p>
                  <p className="font-semibold line-through text-gray-500 ">
                    &#8377;847/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product card */}
        {/* Product card */}
        <div className="relative">
          <div className="w-96 h-[400px] shadow-xl flex items-end">
            <img src={bed1} alt="" className="absolute bottom-36 w-[400px]" />
            <div className="">
              <p className="p-10 pb-4 text-xl font-semibold">
              Mojave Solid Wood Queen Bed In Teak Finish
              </p>
              <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                Rent
              </p>
              <div className="flex mt-5 ml-10 gap-5 items-start">
                <p className=" text-2xl font-bold mb-7">&#8377;680/mo</p>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                    -34%
                  </p>
                  <p className="font-semibold line-through text-gray-500 ">
                    &#8377;1029/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product card */}
        {/* Product card */}
        <div className="relative">
          <div className="w-96 h-[400px] shadow-xl flex items-end">
            <img src={chair1} alt="" className="absolute bottom-48 left-10 w-[300px]" />
            <div className="">
              <p className="p-10 pb-4 text-xl font-semibold">
              Fly Mid Back Office Chair with Mesh Back & Fixed...
              </p>
              <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                Rent
              </p>
              <div className="flex mt-5 ml-10 gap-5 items-start">
                <p className=" text-2xl font-bold mb-7">&#8377;240/mo</p>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                    -34%
                  </p>
                  <p className="font-semibold line-through text-gray-500 ">
                    &#8377;363/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product card */}
         {/* Product card */}
         <div className="relative mt-32">
          <div className="w-96 h-[400px] shadow-xl flex items-end">
            <img src={sofa2} alt=""className="absolute bottom-36 w-[400px]"  />
            <div className="">
              <p className="p-10 pb-4 text-xl font-semibold">
              Ella Leatherette 3 Seater Sofa in Sand Beige Color
              </p>
              <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                Rent
              </p>
              <div className="flex mt-5 ml-10 gap-5 items-start">
                <p className=" text-2xl font-bold mb-7">&#8377;760/mo</p>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                    -34%
                  </p>
                  <p className="font-semibold line-through text-gray-500 ">
                    &#8377;1149/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product card */}
         {/* Product card */}
         <div className="relative mt-32">
          <div className="w-96 h-[400px] shadow-xl flex items-end">
            <img src={almira2} alt="" className="absolute bottom-48 left-10 w-[300px]" />
            <div className="">
              <p className="p-10 pb-4 text-xl font-semibold">
              Haimish Engineered Wood 2 Door Wardrobe without...
              </p>
              <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                Rent
              </p>
              <div className="flex mt-5 ml-10 gap-5 items-start">
                <p className=" text-2xl font-bold mb-7">&#8377;520/mo</p>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                    -34%
                  </p>
                  <p className="font-semibold line-through text-gray-500 ">
                    &#8377;786/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product card */}
         {/* Product card */}
         <div className="relative mt-32">
          <div className="w-96 h-[400px] shadow-xl flex items-end">
            <img src={bed2} alt="" className="absolute bottom-36 w-[400px]"  />
            <div className="">
              <p className="p-10 pb-4 text-xl font-semibold">
              Dune Engineered Wood Box Storage Queen...
              </p>
              <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                Rent
              </p>
              <div className="flex mt-5 ml-10 gap-5 items-start">
                <p className=" text-2xl font-bold mb-7">&#8377;864/mo</p>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                    -34%
                  </p>
                  <p className="font-semibold line-through text-gray-500 ">
                    &#8377;1307/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product card */}
         {/* Product card */}
         <div className="relative mt-32">
          <div className="w-96 h-[400px] shadow-xl flex items-end">
            <img src={chair2} alt="" className="absolute bottom-48 left-10 w-[300px]" />
            <div className="">
              <p className="p-10 pb-4 text-xl font-semibold">
              Glen Solid Wood and Upholstered Bar Stool...
              </p>
              <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                Rent
              </p>
              <div className="flex mt-5 ml-10 gap-5 items-start">
                <p className=" text-2xl font-bold mb-7">&#8377;320/mo</p>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                    -34%
                  </p>
                  <p className="font-semibold line-through text-gray-500 ">
                    &#8377;483/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product card */}
      </div>
    </div>
  );
};

export default NewArrivals;
