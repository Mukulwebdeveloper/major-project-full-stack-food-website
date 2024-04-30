import React from "react";
import { RiCheckDoubleLine } from "react-icons/ri";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  BlogBanner,
  BlogDetail,
  DownloadImg,
  Blog4,
  Blog3,
  Profile4,
  Profile5,
  Profile3,
} from "../assets";
import { motion } from "framer-motion";
import Header from "./Header";
// import { BorderStyle } from "@material-ui/icons";

const Blog = () => {
  return (
    <>
      <Header />
      {/* Banner Image */}
      <motion.div
        // className="mt-[100px] md:mt-40 flex flex-col items-start justify-start gap-4 px-12 md:px-20"
        className="w-full flex flex-col justify-center items-start mt-[125px] px-6 md:px-16 2xl:px-96 gap-12 pb-24"
      >
        <img
          src={BlogBanner}
          className="w-full h-[200px] md:h-[400px] lg:h-[400px]"
        />
        {/* 
<div className="mt-3" style={{
          borderStyle:"solid", borderBottomColor:"red", borderBlockWidth:"1px" }}></div> */}
        <div className="relative -top-[170px] left-[130px] md:-top-[170px] md:left-[250px] lg:-top-[300px] lg:left-[500px] right-10 cursor-pointer">
          <h1 className="md:mt-10 text-white justify-center align-middle  text-center text-2xl md:text-5xl font-semibold">
            Blog Details
          </h1>
          <h1 className="flex text-white justify-center align-middle md:mt-5 text-center text-sm md:text-3xl  ">
            Home{" "}
            <span className="text-orange-500 font-semibold text-sm md:text-xl md:mt-1.5 ml-1 md:ml-4 ">
              Blog
            </span>
          </h1>
        </div>

        <div className="flex cursor-pointer -mt-32 md:-mt-[150px]">
          {/* left side */}
          <div className="" style={{ width: "60%" }}>
            <img src={BlogDetail} alt="img" className="rounded-lg sm:w-full" />
            <h1 className="text-3xl font-bold mt-10">
              Different Spice For A Different Cheese Bruschetta
            </h1>
            <p className=" mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have ered alteration in some form, by injected
              humour, or randomised word which don't look even slightly
              believable.
            </p>
            <p className=" mt-5">
              Erators on the Internet tend to repeat predefined chunks as
              necessiary, making this the true generator on the Internet. It
              uses a dictionary of over 200 Latin words, combinedss handful of
              model sentence structures
            </p>
            <h1 className="text-2xl font-bold mt-10">
              Creative approach to every project
            </h1>
            <p className=" mt-5">
              Sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem our asIpsum gen erators on the Internet tend
              to repeat predefined chunks as the as necessliary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 our asliatin words, combined with a handful of model sentence
              structures
            </p>
            <p className="mt-5">
              <RiCheckDoubleLine className="flex flex-col text-red-500" /> there
              isn't anything embarrassing hidden in the middle of text. All the
              Lorem our asIpsum gen erator
            </p>
            <p className="mt-5">
              <RiCheckDoubleLine className="flex flex-col text-red-500" />{" "}
              predefined chunks as the as necessliary, making this the first
              true generator on the
            </p>
            <p className="mt-5">
              <RiCheckDoubleLine className="flex flex-col text-red-500" />{" "}
              asliatin words, combined with a handful of model sentence
              structures
            </p>

            <div className="mt-10">
              <div className="flex ">
                <div>
                  <img src={DownloadImg} alt="" className="rounded-lg" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold  ml-5">
                    Creative approach to every project
                  </h1>
                  <p className=" mt-5 ml-5">
                    Sure there isn't anything embarrassing hidden in the middle
                    of text. All the Lorem our asIpsum gen erators on the
                    Internet tend to repeat predefined chunks as the as
                    necessliary, making this the first true generator
                  </p>
                  <p className=" mt-5 ml-5">
                    Sure there isn't anything embarrassing hidden in the middle
                    of text. All the Lorem our asIpsum gen erators on the
                    Internet tend to repeat predefined.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 cursor-pointer">
              <div
                className="mt-3"
                style={{
                  borderStyle: "solid",
                  borderBottomColor: "red",
                  borderBlockWidth: "1px",
                }}
              ></div>

              <div className="flex  pl-3 pt-3 mt-1">
                <div className="">
                  <span className="font-semibold m-2">Tags:</span>
                  <span className="m-2">Cleaning</span>
                  <span className="m-2">Home</span>
                  <span className="m-2">Moves</span>
                </div>
                <div className=" flex ml-20">
                  <span className="font-semibold ml-2 mt-1">Share:</span>
                  <span className="ml-1 ">
                    <FacebookIcon className="text-orange-400 m-1" />
                  </span>
                  <span className="ml-1 ">
                    <InstagramIcon className="text-orange-400 m-1" />
                  </span>
                  <span className="ml-1 ">
                    <TwitterIcon className="text-orange-400 m-1" />
                  </span>
                  <span className="ml-1 ">
                    <YouTubeIcon className="text-orange-400 m-1" />
                  </span>
                </div>
              </div>
              <div
                className="mt-3"
                style={{
                  borderStyle: "solid",
                  borderBottomColor: "red",
                  borderBlockWidth: "1px",
                }}
              ></div>
            </div>

            {/* Comments */}
            <div className="bg-white rounded-lg p-8 mt-6 cursor-pointer">
              <h1 className="text-3xl font-bold m-3 mt-3">03 Comments</h1>
              <div
                className="mt-4"
                style={{
                  borderStyle: "solid",
                  borderBottomColor: "red",
                  borderBlockWidth: "1px",
                }}
              ></div>
              {/* comment-1 */}
              <div className="flex mt-9">
                <div>
                  <img
                    src={Profile4}
                    alt=""
                    className=" rounded-full mt-4"
                    style={{ width: "145px", height: "100px" }}
                  />
                </div>
                <div className="ml-11">
                  <p className="text-2xl font-bold mt-2">Salin John</p>
                  <p className=" text-orange-400 mt-2">
                    <CalendarMonthIcon className="m-1" />
                    01 Oct 2022
                  </p>
                  <p className=" mt-2">
                    Sure there isn't anything embarrassing hiidden in the
                    middles of text. All erators on the Internet tend to repeat
                    predefined chunks
                  </p>
                  <p className=" mt-2 ">Reply</p>
                </div>
              </div>
              {/* comment-2 */}
              <div className="flex mt-6">
                <div>
                  <img
                    src={Profile5}
                    alt=""
                    className=" rounded-full mt-4"
                    style={{ width: "145px", height: "100px" }}
                  />
                </div>
                <div className="ml-11">
                  <p className="text-2xl font-bold mt-2">Michel Holder</p>
                  <p className=" text-orange-400 mt-2">
                    <CalendarMonthIcon className="m-1" />
                    20 Oct 2022
                  </p>
                  <p className=" mt-2">
                    Sure there isn't anything embarrassing hiidden in the
                    middles of text. All erators on the Internet tend to repeat
                    predefined chunks
                  </p>
                  <p className=" mt-2 ">Reply</p>
                </div>
              </div>
              {/* comment-3 */}
              <div className="flex mt-6">
                <div>
                  <img
                    src={Profile3}
                    alt=""
                    className=" rounded-full mt-4"
                    style={{ width: "145px", height: "100px" }}
                  />
                </div>
                <div className="ml-11">
                  <p className="text-2xl font-bold mt-2">Mouna Sthesia</p>
                  <p className=" text-orange-400 mt-2">
                    <CalendarMonthIcon className="m-1" />
                    29 Oct 2022
                  </p>
                  <p className=" mt-2">
                    Sure there isn't anything embarrassing hiidden in the
                    middles of text. All erators on the Internet tend to repeat
                    predefined chunks
                  </p>
                  <p className=" mt-2 ">Reply</p>
                </div>
              </div>
            </div>
          </div>

          {/* close */}

          {/* right side */}
          <div className="">
            {/* Search box */}
            <div className="bg-blue-100 p-5 m-5 mt-0 rounded-lg cursor-pointer">
              <div className="text-orange-400 font-semibold text-xl ">
                {" "}
                &nbsp;&nbsp; Search
              </div>
              <div
                className="mt-3"
                style={{
                  borderStyle: "solid",
                  borderBottomColor: "red",
                  borderBlockWidth: "1px",
                }}
              ></div>
              <SearchIcon className="text-gray-400 md:relative md:top-12~ md:left-2" />{" "}
              <input
                type="search"
                placeholder="Search"
                className="ml-2 w-[100%] h-8 mt-5 p-7 rounded-lg"
              />
            </div>

            {/* Blogs */}
            <div className="bg-blue-100 p-5 m-5 mt-0 rounded-lg cursor-pointer">
              <span className="text-orange-400 font-semibold text-xl mt-1.5">
                {" "}
                &nbsp;&nbsp;Latest Blog
                <div
                  className="mt-3"
                  style={{
                    borderStyle: "solid",
                    borderBottomColor: "red",
                    borderBlockWidth: "1px",
                  }}
                ></div>
              </span>

              <div className="flex m-2 mt-5">
                <div>
                  <img src={Blog4} alt="" className="w-30 h-20 rounded-lg" />
                </div>
                <div>
                  <p className="font-semibold ml-5">
                    Mechanic at car service tire change the car.
                  </p>
                  <p className="mt-3  ml-5  text-orange-400">
                    {" "}
                    <CalendarMonthIcon className="m-1 text-black" />
                    29 Oct 2023
                  </p>
                </div>
              </div>

              <div className="flex mt-5">
                <div>
                  <img
                    src={Blog3}
                    alt=""
                    className="w-29 h-20 ml-2 rounded-lg"
                  />
                </div>
                <div>
                  <p className="font-semibold ml-5">
                    Commercial cleaning crew ladies working.
                  </p>
                  <p className="mt-3  ml-5  text-orange-400">
                    {" "}
                    <CalendarMonthIcon className="m-1 text-black" />
                    12 Oct 2022
                  </p>
                </div>
              </div>
              <div className="flex m-2 mt-5">
                <div>
                  <img src={Blog4} alt="" className="w-30 h-20 rounded-lg" />
                </div>
                <div>
                  <p className="font-semibold ml-5">
                    Mechanic at car service tire change the car.
                  </p>
                  <p className="mt-3  ml-5  text-orange-400">
                    {" "}
                    <CalendarMonthIcon className="m-1 text-black" />
                    29 Oct 2023
                  </p>
                </div>
              </div>

              <div className="flex mt-5">
                <div>
                  <img
                    src={Blog3}
                    alt=""
                    className="w-29 h-20 ml-2 rounded-lg"
                  />
                </div>
                <div>
                  <p className="font-semibold ml-5">
                    Commercial cleaning crew ladies working.
                  </p>
                  <p className="mt-3  ml-5  text-orange-400">
                    {" "}
                    <CalendarMonthIcon className="m-1 text-black" />
                    12 Oct 2022
                  </p>
                </div>
              </div>
            </div>
            {/* categories */}
            <div className="bg-blue-100 p-5 m-5 mt-0 rounded-lg cursor-pointer">
              <div className="text-orange-400 font-semibold text-xl ">
                {" "}
                &nbsp;&nbsp;Categories
              </div>
              <div
                className="mt-3"
                style={{
                  borderStyle: "solid",
                  borderBottomColor: "red",
                  borderBlockWidth: "1px",
                }}
              ></div>
              <div className="my-4">
                <div className=" pl-3 pt-3  hover:bg-orange-400 bg-white rounded-lg my-5">
                  Home Cleaning{" "}
                  <span className="mr-3 mb-5 text-orange-400 flex justify-end ">
                    35
                  </span>
                </div>
                <div className=" pl-3 pt-3  hover:bg-orange-400 bg-white rounded-lg my-5">
                  Painting & Renovation{" "}
                  <span className="mr-3 mb-5 text-orange-400 flex justify-end ">
                    35
                  </span>
                </div>
                <div className=" pl-3 pt-3  hover:bg-orange-400 bg-white rounded-lg my-5">
                  Cleaning & Pest Control{" "}
                  <span className="mr-3 mb-5 text-orange-400 flex justify-end ">
                    35
                  </span>
                </div>
                <div className=" pl-3 pt-3  hover:bg-orange-400 bg-white rounded-lg my-5">
                  Emergency Services{" "}
                  <span className="mr-3 mb-5 text-orange-400 flex justify-end ">
                    35
                  </span>
                </div>
                <div className=" pl-3 pt-3  hover:bg-orange-400 bg-white rounded-lg my-5">
                  Car Care Services
                  <span className="mr-3 mb-5 text-orange-400 flex justify-end ">
                    35
                  </span>
                </div>
                <div className=" pl-3 pt-3  hover:bg-orange-400 bg-white rounded-lg my-5">
                  Electric & Plumbing{" "}
                  <span className="mr-3 mb-5 text-orange-400 flex justify-end ">
                    35
                  </span>
                </div>
              </div>
            </div>
            {/* popular tags */}
            <div className="bg-blue-100 p-5 m-5 mt-0 rounded-lg cursor-pointer">
              <div className="text-orange-400 font-semibold text-xl ">
                {" "}
                &nbsp;&nbsp;Popular Tags
              </div>
              <div
                className="mt-3"
                style={{
                  borderStyle: "solid",
                  borderBottomColor: "red",
                  borderBlockWidth: "1px",
                }}
              ></div>
              <div className="flex ">
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Cleaning
                </div>
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Car Repair
                </div>
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Plumbing
                </div>
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Painting
                </div>
              </div>
              <div className="flex ">
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Cleaning
                </div>
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Car Repair
                </div>
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Plumbing
                </div>
              </div>
              <div className="flex ">
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Cleaning
                </div>
                <div className="p-2 m-3 rounded-lg bg-white hover:bg-orange-400">
                  Car Repair
                </div>
              </div>
            </div>

            {/* Leave a Reply*/}

            <div className="bg-blue-100 p-5 m-5 mt-0 rounded-lg cursor-pointer">
              <h1 className="text-3xl font-bold m-3 mt-3">Leave a Reply</h1>
              <div
                className="mt-3"
                style={{
                  borderStyle: "solid",
                  borderBottomColor: "red",
                  borderBlockWidth: "1px",
                }}
              ></div>
              <p className="ml-3 mb-5 mt-5 ">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="flex ">
                <div className="m-4">
                  <label htmlFor="" className="ml-0 ">
                    Name*
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2  m-3 ml-0 mt-0 bg-white  rounded-lg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="m-4">
                  <label htmlFor="" className="ml-0 ">
                    Email*
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Mail"
                    className="p-2  m-5 ml-0 mt-0 bg-white  rounded-lg"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="ml-5">
                <label htmlFor="" className="ml-0">
                  Your Comment*
                </label>
                <div>
                  <textarea
                    rows={"80px"}
                    cols={"80px"}
                    placeholder="Comment"
                    className="mt-1  ml-0 p-1   bg-white rounded-lg "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <button
                className="p-3  m-auto  mt-5  text-white bg-orange-400 rounded-md hover:bg-red-500"
                style={{ width: "100%" }}
              >
                Submit Comment
              </button>
            </div>
          </div>
        </div>

        {/* left side */}
      </motion.div>
    </>
  );
};

export default Blog;
