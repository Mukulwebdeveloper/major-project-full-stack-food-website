import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import {
  AboutBanner,
  AboutImg1,
  AboutImg2,
  Img1,
  Img2,
  Img3,
  Team1,
  Team2,
  Team3,
  Team4,
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Profile1,
  Profile2,
} from "../assets";

const AboutUs = () => {
  return (
    <>
      <Header />
      {/* Banner Image */}
      <motion.div className="mt-[100px] md:mt-40 flex flex-col items-start justify-start gap-4 px-12 md:px-20">
        <img src={AboutBanner} className="w-full md:h-[400px]" />

        <div className="relative md:-top-[300px] md:left-[500px] right-10 cursor-pointer">
          <h1 className="md:mt-10 text-white justify-center align-middle  text-center text-2xl md:text-5xl font-semibold ">
            About Us
          </h1>
          <h1 className="flex text-white justify-center align-middle md:mt-5 text-center text-sm md:text-3xl ">
            Home{" "}
            <span className="text-orange-300 font-semibold text-sm md:text-xl md:mt-1.5 ml-1 md:ml-4 ">
              About us
            </span>
          </h1>
        </div>

        {/* About us */}
        <div className="flex  -mt-20">
          <div className="flex">
            <img src={AboutImg1} alt="foodimg" />
            <img src={AboutImg2} alt="foodimg" className="relative right-60" />
          </div>
          <div className="ml-20 ">
            <h1 className="text-orange-400 ml-9 font-semibold text-xl">
              About Company
            </h1>
            <h1 className="text-4xl font-bold mt-4 ml-9">
              We Make Sure Quality & Healthy Foods
            </h1>
            <h1 className=" text-gray-400 mt-6 ml-9">
              Conveys the commitment of the restaurant to prioritize both
              quality And health in their food offerings. It implies that the
              recipe.
            </h1>

            <div className="flex font-semibold mt-5 ml-7">
              <p className="m-3">Food Items management</p>
              <p className="m-3">Table reservation</p>
            </div>
            <div className="flex font-semibold ml-7">
              <p className="m-3">Customer feedback portal</p>
              <p className="m-3">Location-based services</p>
            </div>

            <button className="bg-orange-400 hover:bg-red-500 m-20  w-150 text-white p-5 mt-5 flex justify-center ml-10">
              See Details
            </button>
          </div>
        </div>

        {/* why choose us*/}
        <div className="flex mt-20">
          <div>
            <p className="text-orange-400 ml-9 font-semibold text-xl">
              Why Choose Us
            </p>
            <p className="text-4xl font-bold mt-4 ml-9 w-100">
              Discover Art Of Food With Us.
            </p>
            <p className=" text-gray-400 mt-6 ml-9 w-100">
              Embark on a journey of culinary exploration discover the Art of
              good Food with us. Our passion
              <button className="bg-orange-400  hover:bg-red-500 m-20 w-150 text-white p-5 mt-5 flex justify-center ml-0">
                See Details
              </button>
            </p>
          </div>

          {/* Cards */}
          <div className="w-400 h-500 bg-white m-5 ">
            <div className="p-6 border-r-amber-50  ">
              <img src={Img1} alt="" />
              <p className="text-xl font-bold mt-4 ml-9">Quality Foods</p>
              <p className=" text-gray-400 mt-6 ml-9 w-100">
                Praesent rutrum ligula ligula, eget viverra neque congue sed.
                Donec
              </p>
            </div>
          </div>
          <div className="w-400 h-500 bg-white m-5">
            <div className="p-6 border-r-amber-50  ">
              <img src={Img2} alt="" />
              <p className="text-xl font-bold mt-4 ml-9">Table reservation</p>
              <p className=" text-gray-400 mt-6 ml-9 w-100">
                Guarantee your spot, and enjoy a hassle-free dining Experience
                with our
              </p>
            </div>
          </div>
          <div className="w-400 h-500 bg-white m-5">
            <div className="p-6 border-r-amber-50  ">
              <img src={Img3} alt="" />
              <p className="text-xl font-bold mt-4 ml-9">Online Order</p>
              <p className=" text-gray-400 mt-6 ml-9 w-100">
                Order online and savor the Delicious flavors from the Comfort of
                home
              </p>
            </div>
          </div>
        </div>

        {/* Experts Chefs */}
        <div className="bg-white">
          <div>
            <p className="text-orange-400  mt-10 relative top-5 font-semibold text-xl flex justify-center">
              Expert Chefs
            </p>
            <p className="text-4xl font-bold mt-10 w-100 flex justify-center">
              Meet Our Expert Chefs
            </p>

            <div className="flex justify-center mt-10">
              <div className="m-5 rounded-md">
                <img src={Team1} alt="" />
              </div>
              <div className="m-5 rounded-md">
                <img src={Team2} alt="" />
              </div>
              <div className="m-5 rounded-md">
                <img src={Team3} alt="" />
              </div>
              <div className="m-5 rounded-md">
                <img src={Team4} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Global Sponsers */}
        <div>
          <p className="flex justify-center text-gray-400 mt-10">
            Global 5K+ Happy Sponsors With us
          </p>
          <div className=" flex justify-center">
            <img src={Brand1} alt="" className=" hover:text-red-500 m-20" />
            <img src={Brand2} alt="" className=" hover:text-red-500 m-20" />
            <img src={Brand3} alt="" className=" hover:text-red-500 m-20" />
            <img src={Brand4} alt="" className=" hover:text-red-500 m-20" />
            <img src={Brand5} alt="" className=" hover:text-red-500 m-20" />
          </div>
        </div>
        {/* Coustomer says */}

        <div className="flex bg-red-50 p-10">
          <div>
            <p className="text-orange-400 mt-5  ml-9 relative top-5 font-semibold text-xl">
              Customer Feedback
            </p>
            <p className="text-4xl font-bold mt-10 ml-9 w-100">
              What Customers Say About Us
            </p>
            <p className=" text-gray-400 mt-6 ml-9 w-100">
              Convallis libero dignissim, pulvinar sem. Class aptent taciti
              sociosqu ad litora torquent per Conubia nostra,
            </p>
          </div>
          <div className="flex bg-white p-5 m-10">
            <div className="m-3">
              <img src={Profile1} alt="" className="w-50 h-50 rounded-full" />
            </div>
            <div>
              <p className="text-xl font-semibold">Michel Clerk</p>
              <p className=" text-gray-400">USA London</p>
              <p className="border-bottom"></p>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti dicta sequi animi deserunt ipsam.
              </p>
            </div>
          </div>

          <div className="flex bg-white p-5 m-10">
            <div className="m-3">
              <img src={Profile2} alt="" className="w-50 h-50 rounded-full" />
            </div>
            <div>
              <p className="text-xl font-semibold">Samuel John</p>
              <p className=" text-gray-400">DYM USA</p>
              <p className="border-bottom"></p>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti dicta sequi animi deserunt ipsam.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
