import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { staggerFadeInOut } from "../animations";
import { IoFastFood } from "../assets/icons";
import { statuses } from "../utils/styles";
import { SliderCard } from "../components";
import { EmptyCart } from "../assets";

const FilterSection = () => {
  const [category, setCategory] = useState("fruits");
  const products = useSelector((state) => state.products);

  return (
    <motion.div className="w-full flex items-start justify-start flex-col">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold">Our Hot Dishes</p>
          <div className="w-40 h-1 rounded-md bg-orange-500"></div>
        </div>
      </div>

      <div className="w-full overflow-x-scroll md:overflow-x-hidden pt-6 flex items-center justify-center gap-6 py-8">
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

      <div className="w-full flex items-center justify-evenly flex-wrap gap-4 mt-12">
        {products && products?.length > 0 ? (
          products
            .filter((data) => data?.product_category === category)
            .map((data, i) => <SliderCard key={data.i} data={data} index={i} />)
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
  );
};

export const FilterCard = ({ data, index, category, setCategory }) => {
  return (
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
  );
};

export default FilterSection;
