import React from "react";
import sofa1 from "../assets/sofa1.webp";
import plp from "../assets/plp_1.webp";
import plp_1 from "../assets/plp_1(1).webp";
import plp_2 from "../assets/plp_1 (2).webp";
import rent1 from "../assets/rent_conviction1_may5.webp";
import rent2 from "../assets/rent_conviction2_may5.webp";
import percent from "../assets/deals_on_renting.webp";
import bed1 from "../assets/plp_1 (1).webp";
import bed2 from "../assets/plp_1 (3).webp";
import bed3 from "../assets/plp_1 (4).webp";
import bed4 from "../assets/plp_1 (5).webp";
import lastBanner from "../assets/why_rent_desktop_banner_may5.webp"

const Spotlight = () => {
  return (
    <div className="p-20 pb-10">
      <div className="bg-gradient-spotlight p-16 h-full rounded-xl">
        <div>
          <p className="font-bold text-gray-700">In the</p>
          <p className="text-4xl font-semibold text-gray-800">Spotlight</p>
        </div>

        <div className="p-20 pl-0 pb-0 flex gap-5 mt-20">
          {/* Product card */}
          <div className="relative">
            <div className="w-96 h-[400px] shadow-xl flex items-end bg-white rounded-2xl">
              <img
                src={plp_2}
                alt=""
                className="absolute bottom-48 w-[400px]"
              />
              <div className="">
                <p className="p-10 pb-4 text-xl font-semibold">Twin Abode</p>
                <p className="bg-[#ceedf0] w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2">
                  Rent
                </p>
                <div className="flex mt-5 ml-10 gap-5 items-start">
                  <p className=" text-2xl font-bold mb-7">&#8377;1,080/mo</p>
                  <div className="flex items-center gap-5">
                    <p className="font-bold text-gray-600 bg-[#fffbdb] p-1 rounded-xl">
                      -34%
                    </p>
                    <p className="font-semibold line-through text-gray-500 ">
                      &#8377;1,633/mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product card end */}
          {/* Product card */}
          <div className="relative">
            <div className="w-96 h-[400px] shadow-xl flex items-end bg-white rounded-2xl">
              <img
                src={plp_1}
                alt=""
                className="absolute bottom-48 left-4 w-[350px]"
              />
              <div className="">
                <p className="p-10 pb-4 text-xl font-semibold">
                  Recliner Zest Leatherette - Brown
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
            <div className="w-96 h-[400px] shadow-xl flex items-end bg-white rounded-2xl">
              <img src={plp} alt="" className="absolute bottom-48 w-[400px]" />
              <div className="">
                <p className="p-10 pb-4 text-xl font-semibold">
                  Vive 3 Seater - Aqua
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
            <div className="w-96 h-[400px] shadow-xl flex items-end bg-white rounded-2xl">
              <img
                src={sofa1}
                alt=""
                className="absolute bottom-48 w-[400px]"
              />
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
        </div>
      </div>

      {/* //!Why Roomee Starts*/}
      <div className="mt-20">
        <div className="flex gap-4 mt-10">
          <div className="w-1/2 h-64 ">
            <img src={rent1} alt="" className="rounded-xl object-cover" />
          </div>
          <div className="w-1/2 h-64">
            <img src={rent2} alt="" className="rounded-xl object-cover" />
          </div>
        </div>
      </div>
      {/* //!Why Roomee Ends*/}

      {/* //! Extra 15% Off starts*/}
      <div className="mt-36">
        <div className=" flex gap-3 items-center mb-2">
          <img src={percent} alt="" className="w-16" />
          <div>
            <p className="text-3xl text-gray-800">Extra 15% off</p>
            <p className="text-gray-600">TO RENT</p>
          </div>
        </div>

        <div className="p-20 pl-0 pb-0 flex gap-12 mt-20">
          {/* Product card */}
          <div className="relative">
            <div className="w-96 h-[400px] shadow-xl shadow-[#ffdd4b] flex items-end bg-white rounded-2xl">
              <img src={bed1} alt="" className="absolute bottom-48 w-[400px]" />
              <div className="w-full">
                <p className="p-5 mt-10 text-2xl font-normal">
                  Allen Engineered Wood Queen Bed in Ivory White Finish
                </p>
                <div className=" bg-yellow-300 rounded-2xl rounded-t-none">
                  <p className=" w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2"></p>

                  <div className="flex mt-5 ml-10 gap-5 items-start">
                    <p className=" text-3xl font-bold mb-7">
                      34% <span className="text-sm">&nbsp;Off</span>
                    </p>
                    <div className="flex items-center">
                      <p className="font-semibold text-2xl text-gray-800 ">
                        &#8377;440/mo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product card end */}
           {/* Product card */}
           <div className="relative">
            <div className="w-96 h-[400px] shadow-xl shadow-[#ffdd4b] flex items-end bg-white rounded-2xl">
              <img src={bed2} alt="" className="absolute bottom-48 w-[400px]" />
              <div className="w-full">
                <p className="p-5 mt-10 text-2xl font-normal">
                  Bordo Solid Wood Queen Bed with 6" Premium Mattress
                </p>
                <div className=" bg-yellow-300 rounded-2xl rounded-t-none">
                  <p className=" w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2"></p>

                  <div className="flex mt-5 ml-10 gap-5 items-start">
                    <p className=" text-3xl font-bold mb-7">
                     34% <span className="text-sm">&nbsp;Off</span>
                    </p>
                    <div className="flex items-center">
                      <p className="font-semibold text-2xl text-gray-800 ">
                        &#8377;880/mo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product card end */}
           {/* Product card */}
           <div className="relative">
            <div className="w-96 h-[400px] shadow-xl shadow-[#ffdd4b] flex items-end bg-white rounded-2xl">
              <img src={bed3} alt="" className="absolute bottom-48 w-[400px]" />
              <div className="w-full">
                <p className="p-5 mt-10 text-2xl font-normal">
                Bordo Solid Wood Queen Bed with 6" Premium Mattress
                </p>
                <div className=" bg-yellow-300 rounded-2xl rounded-t-none">
                  <p className=" w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2"></p>

                  <div className="flex mt-5 ml-10 gap-5 items-start">
                    <p className=" text-3xl font-bold mb-7">
                      34% <span className="text-sm">&nbsp;Off</span>
                    </p>
                    <div className="flex items-center">
                      <p className="font-semibold text-2xl text-gray-800 ">
                        &#8377;880/mo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product card end */}
           {/* Product card */}
           <div className="relative">
            <div className="w-96 h-[400px] shadow-xl shadow-[#ffdd4b] flex items-end bg-white rounded-2xl">
              <img src={bed4} alt="" className="absolute bottom-48 w-[400px]" />
              <div className="w-full">
                <p className="p-5 mt-10 text-2xl font-normal">
                 Haimish Engineered Wood King Bed with 6" premium Mattress
                </p>
                <div className=" bg-yellow-300 rounded-2xl rounded-t-none">
                  <p className=" w-20 font-semibold text-gray-600 rounded-full rounded-l-none p-2"></p>

                  <div className="flex mt-5 ml-10 gap-5 items-start">
                    <p className=" text-3xl font-bold mb-7">
                      &#8377;-34% <span className="text-sm">&nbsp;Off</span>
                    </p>
                    <div className="flex items-center">
                      <p className="font-semibold text-2xl text-gray-800 ">
                        &#8377;840/mo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product card end */}
        </div>
      </div>
      {/* //! Extra 15% Off ends*/}

      {/* //! Your Furniture, Your Freedom start*/}
<div className="mt-20">
<div>
  <h1 className="text-3xl font-semibold text-gray-900">Your Furniture, Your Freedom</h1>
</div>
<div className="mt-10">
    <img src={lastBanner} alt="" className="rounded-2xl"/>
</div>
</div>
      {/* //! Your Furniture, Your Freedom end*/}
     
    </div>
  );
};

export default Spotlight;
