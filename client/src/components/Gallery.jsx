import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { staggerFadeInOut } from "../animations";
import { IoFastFood } from "../assets/icons";
import { statuses } from "../utils/styles";
import { Header, SliderCard } from "../components";
import {
  BlogBanner,
  Burger,
  Delivarymen,
  Delivarymen2,
  EmptyCart,
  Icecream,
  Redchilli,
  Titlticon,
} from "../assets";

const Gallery = () => {
  const [category, setCategory] = useState("fruits");
  const products = useSelector((state) => state.products);

  return (
    <>
      <Header />
      <motion.div className=" w-full flex flex-col justify-center items-start px-6 md:px-16 2xl:px-96 gap-12 pb-24">
        {/* Banner Image */}
        <div
          className=" mt-[100px] md:mt-40 bg-no-repeat   bg-contain cursor-pointer"
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

        {/* .. */}
        <div className="flex title text-center">
          <div className="w-60">
            <img src={Redchilli} alt="" />
          </div>

          <div className=" flex flex-col text-center w-full ">
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
              Objectively pontificate quality models before intuitive
              information. Dramatically recaptiualize multifunctional materials.
            </p>
          </div>
        </div>

        {/* Offers Start */}
        <div className="w-full flex items-center justify-evenly flex-wrap gap-4 ">
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
                    className=" justify-center w-300 h-250"
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
                  <img src={Delivarymen2} alt="" className="w-300 h-250" />
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
        </div>
        {/* Offers End */}

        <div className="w-full overflow-x-scroll md:overflow-x-hidden  flex items-center justify-center gap-6 py-8">
          {statuses &&
            statuses?.map((data, i) => (
              <FilterCard
                data={data}
                category={category}
                setCategory={setCategory}
                index={i}
              />
            ))}
        </div>

        <div className="w-full flex items-center justify-evenly flex-wrap gap-4 mt-2">
          {products && products?.length > 0 ? (
            products
              .filter((data) => data?.product_category === category)
              .map((data, i) => (
                <SliderCard key={data.i} data={data} index={i} />
              ))
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
              <img src={EmptyCart} className="w-300" alt="Empty Cart" />
              <p className="text-xl text-headingColor font-semibold my-2">
                Items Not Available
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export const FilterCard = ({ data, index, category, setCategory }) => {
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.75 }}
        key={index}
        onClick={() => setCategory(data?.category)}
        {...staggerFadeInOut}
        className={`group w-24 min-w-[94px] h-28 cursor-pointer rounded-lg ${
          category === data?.category ? "bg-cartNumBg" : "bg-card"
        } hover:bg-cartNumBg drop-shadow-xl flex flex-col items-center justify-center gap-3`}
      >
        <div
          className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center group-hover:bg-primary ${
            category === data?.category ? "bg-card" : "bg-cartNumBg"
          } group-hover:bg-white flex items-center justify-center`}
        >
          <IoFastFood
            className={`${
              category === data?.category ? "text-textColor" : "text-white"
            } group-hover:text-textColor text-lg`}
          />
        </div>

        <p
          className={`text-sm  ${
            category === data?.category ? "text-white" : "text-textColor"
          } group-hover:text-white`}
        >
          {data?.title}
        </p>
      </motion.div>
    </>
  );
};

export default Gallery;
