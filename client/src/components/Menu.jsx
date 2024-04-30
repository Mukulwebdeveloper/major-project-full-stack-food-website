import React, { useState } from "react";
// import blogbanner from "../FoodImages/breadcumb_bg_2-1.jpg";
// import titlticon from "../FoodImages/title_icon.svg";
// import Burger from "../FoodImages/Burger.jpg";
// import icecream from "../FoodImages/i6.png";
// import delivarymen from "../FoodImages/delivarymen.jpg";
// import delivarymen2 from "../FoodImages/delivarymen2.png";
// import redchilli from "../FoodImages/red_chili.webp";
import categories from "./Menuapi";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import {
  BlogBanner,
  Burger,
  Delivarymen,
  Delivarymen2,
  Icecream,
  Redchilli,
  Titlticon,
} from "../assets";
import Header from "./Header";
import { motion } from "framer-motion";
import { buttonClick, staggerFadeInOut } from "../animations";
import { Delivery, HeroBg } from "../assets";
import { randomData } from "../utils/styles";
import { HiCurrencyRupee } from "../assets/icons";

const Menu = () => {
  const [menudata, setmenudata] = useState(categories);

  return (
    <>
      <Header />
      {/* Banner Image */}
      <div
        className=" mt-[100px] md:mt-40 mx-20 bg-no-repeat   bg-contain cursor-pointer"
        style={{
          backgroundImage: `url(${BlogBanner})`,
          height: "350px",
          width: "100%",
        }}
      >
        <div className="md:relative top-20 right-10 cursor-pointer">
          <h1 className="mt-10 text-white justify-center align-middle  text-center text-6xl  font-bold ">
            Popular Menu
          </h1>
          <h1 className="flex text-white justify-center align-middle mt-5 text-center text-3xl ">
            Home{" "}
            <span className="text-orange-400 font-semibold text-xl mt-1.5 ">
              {" "}
              &nbsp;&nbsp;Menu
            </span>
          </h1>
        </div>
      </div>

      <div className="flex title">
        <div className="w-60">
          <img src={Redchilli} alt="" />
        </div>

        <div className=" flex flex-col text-center ">
          <img
            src={Titlticon}
            alt=""
            className="md:relative left-80 ml-60 top-7 w-10 "
          />
          <p className="text-red-500 font-semibold">Menu Board</p>
          <p className="text-2xl my-3 font-semibold">
            See The Menu <span className="text-red-500">Board</span>
          </p>
          <p className="text-gray-400 text-xl mb-5">
            Objectively pontificate quality models before intuitive information.
            Dramatically recaptiualize multifunctional materials.
          </p>
        </div>
      </div>

      {/* products */}
      <div className="flex">
        <div className="">
          {randomData &&
            randomData.map((item) => {
              //   const { id, name, imageURL, price } = item;
              const { id, product_name, imageURL, product_price } = item;

              return (
                <>
                  <div
                    key={id}
                    className="hover:scale-105 float-left flex mt-5  justify-center  ml-8 "
                  >
                    <div className="     rounded-lg bg-white ">
                      <img src={imageURL} alt="img" className="w-300 h-300" />

                      <p className="text-center  text-xl font-semibold mt-2">
                        {product_name.slice(0, 14)}
                      </p>
                      <p className="text-center  text-red-500 text-xl font-semibold mt-1">
                        Rs {product_price}
                      </p>
                      <div className="text-center">
                        <span className=" text-orange-400">
                          <StarIcon />
                        </span>
                        <span className=" text-orange-400">
                          <StarIcon />
                        </span>
                        <span className=" text-orange-400">
                          <StarIcon />
                        </span>
                        <span className=" text-orange-400">
                          <StarHalfIcon />
                        </span>
                        <span className=" text-orange-400">
                          <StarHalfIcon />
                        </span>
                      </div>

                      <div className="flex m-5">
                        <button className="p-3    mt-4  text-white bg-orange-400 rounded-md hover:bg-red-500">
                          Add to cart
                        </button>
                        <div className="flex  ml-12">
                          <p className="p-1 h-10 w-10 mt-6  m-1 text-white rounded-lg bg-orange-400 text-center">
                            <FavoriteIcon />
                          </p>
                          <p className="p-1 h-10 w-10 mt-6 m-1 text-white rounded-lg bg-orange-400 text-center">
                            <RemoveRedEyeIcon />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>

        <div className="flex flex-col title">
          <div className=" md:w-300 ml-2">
            <div className=" mr-10 mt-12">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-6 font-semibold text-center w-full">
                  Our Fastest Delivery{" "}
                  <span className="text-red-500">Services</span>
                </div>
                <div>
                  <img
                    src={Delivarymen}
                    alt=""
                    className="flex justify-center w-300 h-250"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-6 font-semibold text-center w-full">
                  Let's Check Your <span className="text-red-500">Order.</span>
                </div>
                <div>
                  <img
                    src={Delivarymen2}
                    alt=""
                    className="flex justify-center w-300 h-250"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-2 font-semibold text-center w-full text-white bg-red-500 rounded-full h-50">
                  Offer 60% discount <div className="text-white">Order Now</div>
                </div>
                <div>
                  <img
                    src={Burger}
                    alt=""
                    className=" mt-6  ml-6 flex justify-center w-50 rounded-full h-150"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 ">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div>
                  <img
                    src={Icecream}
                    alt=""
                    className="flex justify-center w-100 h-150"
                  />
                </div>
                <div className="text-3xl text-white p-6 font-bold bg-red-500 text-center w-13 rounded-full h-20 mt-3">
                  50% OFF <div className="text-red-500 mt-8">Order Now </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:w-300 ml-2">
            <div className=" mr-10 mt-12">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-6 font-semibold text-center w-full">
                  Our Fastest Delivery{" "}
                  <span className="text-red-500">Services</span>
                </div>
                <div>
                  <img
                    src={Delivarymen}
                    alt=""
                    className="flex justify-center w-300 h-250"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-6 font-semibold text-center w-full">
                  Let's Check Your <span className="text-red-500">Order.</span>
                </div>
                <div>
                  <img
                    src={Delivarymen2}
                    alt=""
                    className="flex justify-center w-300 h-250"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-10">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-2 font-semibold text-center w-full text-white bg-red-500 rounded-full h-50">
                  Offer 60% discount <div className="text-white">Order Now</div>
                </div>
                <div>
                  <img
                    src={Burger}
                    alt=""
                    className=" mt-6  ml-6 flex justify-center w-50 rounded-full h-150"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 ">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div>
                  <img
                    src={Icecream}
                    alt=""
                    className="flex justify-center w-100 h-150"
                  />
                </div>
                <div className="text-3xl text-white p-6 font-bold bg-red-500 text-center w-13 rounded-full h-20 mt-3">
                  50% OFF <div className="text-red-500 mt-8">Order Now </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-6 font-semibold text-center w-full">
                  Let's Check Your <span className="text-red-500">Order.</span>
                </div>
                <div>
                  <img
                    src={Delivarymen2}
                    alt=""
                    className="flex justify-center w-300 h-250"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-10">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-2 font-semibold text-center w-full text-white bg-red-500 rounded-full h-50">
                  Offer 60% discount <div className="text-white">Order Now</div>
                </div>
                <div>
                  <img
                    src={Burger}
                    alt=""
                    className=" mt-6  ml-6 flex justify-center w-50 rounded-full h-150"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 ">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div>
                  <img
                    src={Icecream}
                    alt=""
                    className="flex justify-center w-100 h-150"
                  />
                </div>
                <div className="text-3xl text-white p-6 font-bold bg-red-500 text-center w-13 rounded-full h-20 mt-3">
                  50% OFF <div className="text-red-500 mt-8">Order Now </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className=" mr-10 mt-4">
              <div className="rounded-lg  bg-white">
                <div className="text-3xl p-6 font-semibold text-center w-full">
                  Let's Check Your <span className="text-red-500">Order.</span>
                </div>
                <div>
                  <img
                    src={Delivarymen2}
                    alt=""
                    className="flex justify-center w-300 h-250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
