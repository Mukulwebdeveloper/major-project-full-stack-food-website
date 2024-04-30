import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoFastFood } from "react-icons/io5";
import { staggerFadeInOut } from "../animations";
import { categories } from "../utils/data";
import RowContainer from "./RowContainer";
import { useSelector } from "react-redux";
import { statuses } from "../utils/styles";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [category, setCategory] = useState("fruits");
  const [filter, setFilter] = useState("chicken");
  const products = useSelector((state) => state.products);

  console.log("ppp" + products);
  //   //   const [{ foodItem }, dispatch] = useStateValue();

  //   //   const [category, setCategory] = useState("fruits");
  //   const [foodItem, setFoodItem] = useState([]);
  //   useEffect(() => {
  //     setFoodItem(products.filter((data) => data.product_category === filter));
  //   }, [products]);
  return (
    <motion.div className=" w-full flex items-start justify-start flex-col">
      {/* title Start */}
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold">Our Hot Dishes</p>
          <div className="w-40 h-1 rounded-md bg-orange-500"></div>
        </div>
      </div>
      {/* title */}

      <div className="w-full overflow-x-scroll md:overflow-x-hidden pt-6 flex items-center justify-center gap-6 py-8">
        {categories &&
          categories.map((category) => (
            <motion.div
              key={category.id}
              whileTap={{ scale: 0.75 }}
              className={`group ${
                filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
              }
                          w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center
                      hover:bg-cartNumBg`}
              onClick={() => setFilter(category.urlParamName)}
            >
              <div
                className={`w-10 h-10 rounded-full shadow-lg ${
                  filter === category.urlParamName ? "bg-card" : "bg-cartNumBg"
                } group-hover:bg-white flex items-center justify-center`}
              >
                <IoFastFood
                  className={`${
                    filter === category.urlParamName
                      ? "text-textColor"
                      : "text-white"
                  } group-hover:text-textColor text-lg`}
                />
              </div>
              <p
                className={`text-sm ${
                  filter === category.urlParamName
                    ? "text-white"
                    : "text-textColor"
                } group-hover:text-white`}
              >
                {category.name}
              </p>
            </motion.div>
          ))}
      </div>

      {/* <div className="w-full">
        <RowContainer
          flag={false}
          data={products.filter((data) => data.product_category === filter)}
        />
      </div> */}
    </motion.div>
  );
};

export default MenuContainer;
