import React, { useState } from "react";
import { HiCurrencyRupee, IoBasket } from "../assets/icons";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick } from "../animations";
import { addNewItemToCart, getAllCartItems } from "../api";
import { alertNull, alertSuccess } from "../context/actions/alertActions";
import { setCartItems } from "../context/actions/cartAction";

const SliderCard = ({ data, index }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const sendToCard = () => {
    dispatch(alertSuccess("Added to the cart"));
    addNewItemToCart(user?.user_id, data).then((res) => {
      getAllCartItems(user?.user_id).then((items) => {
        // console.log(items);
        dispatch(setCartItems(items));
      });

      setInterval(() => {
        dispatch(alertNull());
      }, 3000);
    });
  };

  return (
    <div className="bg-lightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between relative px-4 py-0 w-full h-[225px]  min-w-[275px]  md:w-340 md:min-w-350 gap-2">
      <motion.img
        whileHover={{ scale: 1.2 }}
        src={data.imageURL}
        className="w-40 h-40 object-contain -mt-8 drop-shadow-2x"
        alt=""
      />
      <div className="relative pt-12">
        <p className="text-xl text-headingColor font-semibold">
          {data.product_name}
        </p>

        <p className="text-lg font-semibold text-cartNumBg flex items-center justify-center gap-1">
          <HiCurrencyRupee className="text-cartNumBg" />{" "}
          {parseFloat(data.product_price).toFixed(2)}
        </p>

        <motion.div
          {...buttonClick}
          onClick={sendToCard}
          className="w-8 h-8 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-4 right-2 cursor-pointer"
        >
          <IoBasket className="text-2xl text-primary" />
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCard;
