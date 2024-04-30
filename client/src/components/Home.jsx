import React from "react";
import { motion } from "framer-motion";
import { buttonClick, staggerFadeInOut } from "../animations";
import { Delivery, HeroBg } from "../assets";
import { randomData } from "../utils/styles";
import { HiCurrencyRupee } from "../assets/icons";

const Home = () => {
  return (
    <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* 1 section */}
      <div className="flex flex-col items-start justify-start gap-4">
        {/* Delivery Section Start */}
        <div className="px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full">
          <p className="text-lg font-semibold text-orange-500">Free Delivery</p>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md">
            <img
              src={Delivery}
              alt="Delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* Delivery section End */}

        <p className="text-[40px] text-headingColor md:text-[72px] font-sans font-extrabold tracking-wide">
          The Fastest Delivery in{" "}
          <span className="text-orange-600">Your City</span>
        </p>

        <p className="text-lg text-textColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsan
          doloribus et similique distinctio, rem deleniti ipsa, nesciunt vitae
          labore voluptates sunt ducimus mollitia id libero! Nostrum expedita
          libero recusandae?
        </p>
        <motion.button
          {...buttonClick}
          className="bg-gradient-to-bl from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 px-4 py-2 rounded-xl text-black text-base font-semibold"
        >
          Order Now
        </motion.button>
      </div>

      {/* 2 section */}
      <div className="py-2 flex-1 flex items-center justify-end relative">
        <img
          src={HeroBg}
          alt=""
          className="absolute top-0 ring-0 md:-right-1 w-full h-510 md:w-[600px] md:h-[550px]"
        />

        <div className="w-full md:w-420 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14">
          {randomData &&
            randomData.map((data, i) => (
              <motion.div
                key={i}
                {...staggerFadeInOut(i)}
                className="w-32 h-36 md:h-auto md:w-190 p-4 bg-lightOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={data.imageURL}
                  alt=""
                  className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
                />

                <p className="text-sm lg:text-xl font-semibold text-textColor ">
                  {data.product_name.slice(0, 14)}
                </p>

                <p className="text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize">
                  {data.product_category}
                </p>

                <p className="text-sm font-semibold text-headingColor flex items-center justify-center ">
                  {/* <span className='text-xs text-red-600'> */}
                  <HiCurrencyRupee className="text-xs text-red-600" />
                  {/* $
            </span>{" "} */}
                  {data.product_price}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
