import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { buttonClick } from "../animations";
import { motion } from "framer-motion";
import { Blog1, Blog2, Logo } from "../assets";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import EastIcon from "@mui/icons-material/East";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { Link } from "react-router-dom";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="relative bottom-0 left-0 w-full overflow-hidden bg-black text-white">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="absolute  block fill-white"
        ></path>
      </svg>
      {/* <div className="flex flex-col items-center justify-center w-full -mt-20">
        <img src={Logo} alt="" className="w-20 h-20 cursor-pointer" />
      </div> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-20 gap-5 px-20 py-10">
        {/* 1 Icon Section*/}
        <div className="flex flex-col ">
          <Link to={"/"} className="text-3xl relative mt-10">
            <img src={Logo} alt="" className="w-20 h-20 mx-20 cursor-pointer" />
          </Link>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            soluta saepe
          </p>
          <motion.div className="flex items-center justify-center mt-5 space-x-4">
            <a
              href="#"
              className="icon text-white transform hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600 hover:scale-150 transition-all duration-150 ease-in-out "
            >
              <FaGithub className="text-black font-semibold" />
            </a>
            <a
              href="#"
              className="icon text-white hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600  transform hover:scale-150 transition-all duration-150 ease-in-out"
            >
              <FaLinkedin className="text-black font-semibold" />
            </a>
            <a
              href="#"
              className="icon text-white hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600  transform hover:scale-150 transition-all duration-150 ease-in-out"
            >
              <FaTwitter className="text-black font-semibold" />
            </a>
            <a
              href="#"
              className="icon text-white hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600  transform hover:scale-150 transition-all duration-150 ease-in-out"
            >
              <FaInstagram className="text-black font-semibold" />
            </a>
          </motion.div>
        </div>
        {/* 2 Our Menu Section */}
        <div className="flex flex-col">
          <ul>
            <li
              className="text-[22px] list-none font-semibold uppercase relative mb-4 text-cartNumBg
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 
          before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-100 to-cartNumBg transition-all ease-in-out duration-100"
            >
              Our Restaurent
            </li>
            <li className="my-4 list-none mx-10 hover:text-cartNumBg cursor-pointer">
              <EastIcon className="mr-1 text-cartNumBg hover:text-white" />
              Home
            </li>
            <li className="my-4 list-none mx-10 hover:text-cartNumBg cursor-pointer">
              {" "}
              <EastIcon className="mr-1 text-cartNumBg hover:text-white" />
              About
            </li>
            <li className="my-4 list-none mx-10 hover:text-cartNumBg cursor-pointer">
              {" "}
              <EastIcon className="mr-1 text-cartNumBg hover:text-white" />
              Blog
            </li>
            <li className="my-4 list-none mx-10 hover:text-cartNumBg cursor-pointer">
              {" "}
              <EastIcon className="mr-1 text-cartNumBg hover:text-white" />
              Menu
            </li>
            <li className="my-4 list-none mx-10 hover:text-cartNumBg cursor-pointer">
              {" "}
              <EastIcon className="mr-1 text-cartNumBg hover:text-white" />
              Service
            </li>
          </ul>
        </div>
        {/* 3 Resent Post Section*/}
        <div className="flex flex-col">
          <ul>
            <li
              className="text-[22px] list-none font-semibold uppercase relative mb-4 text-cartNumBg
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 
          before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-100 to-cartNumBg transition-all ease-in-out duration-100"
            >
              Recent Post
            </li>
            {/* 1 */}
            <li className="my-4 list-none flex">
              <div>
                <img src={Blog1} alt="" className="w-32 h-20 rounded-lg" />
              </div>
              <p className="font-semibold ml-5">
                Mechanic at car service tire change the car.
              </p>
              <div className="relative top-0 left-0">
                <p className="mt-[50px] absolute top-0 -left-[185px] text-orange-400">
                  {" "}
                  <CalendarMonthIcon className="m-1 text-white cursor-pointer" />
                  29 Oct 2023
                </p>
              </div>
            </li>
            {/* 2 */}
            <li className="my-4 list-none flex">
              <div>
                <img src={Blog2} alt="" className="w-32 h-20 rounded-lg" />
              </div>
              <p className="font-semibold ml-5">
                Commercial cleaning crew ladies working.
              </p>
              <div className="relative top-0 left-0">
                <p className="mt-[50px] absolute top-0 -left-[185px] text-orange-400">
                  {" "}
                  <CalendarMonthIcon className="m-1 text-white cursor-pointer" />
                  12 Oct 2022
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* 4 Contact Section*/}
        <div className="flex flex-col">
          <ul>
            <li
              className="text-[22px] list-none font-semibold uppercase relative mb-4 text-cartNumBg
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 
          before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-100 to-cartNumBg transition-all ease-in-out duration-100"
            >
              Contact Now
            </li>
            <li className="my-4 list-none">
              <PlaceIcon className="w-10 h-10 px-1 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-center m-2 cursor-pointer" />
              <p className="mx-10 -mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.5115929455!2d81.25567318446907!3d21.19524787590817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1711022141973!5m2!1sen!2sin"
                  style={{ border: 0, height: "50px", width: "200px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </p>
            </li>
            <li className="my-4 list-none">
              <MarkunreadIcon className="w-10 h-10 px-1 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-center m-2 cursor-pointer" />
              Email: youremail@gmail.com
            </li>
            <li className="my-4 list-none">
              <PhoneIcon className="w-10 h-10 px-1 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white text-center m-2 cursor-pointer " />
              Phone: +91 113-456-7890
            </li>
          </ul>
        </div>
      </div>
      {/* 5 */}
      <div className="mb-20 relative">
        <div className="h-full flex items-center justify-center mb-5">
          <form action="" className="w-96 relative">
            <input
              type="email"
              className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none focus:border-cartNumBg"
            />
            <button
              type="submit"
              className="bg-cartNumBg px-8 py-2 rounded-full text-white absolute top-0 right-0"
            >
              Submit
            </button>
          </form>
        </div>
        <h6 className="text-center mx-2">
          Copyright &copy; {Year} kitchen . All Rights Reserved by FoodWebsite{" "}
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
