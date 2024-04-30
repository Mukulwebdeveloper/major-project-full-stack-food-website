import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket, IoBasket, HiCurrencyRupee } from "../assets/icons";
import { NotFound } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { alertNull, alertSuccess } from "../context/actions/alertActions";
import { setCartItems } from "../context/actions/cartAction";
import { addNewItemToCart, getAllCartItems } from "../api";
// import { useStateValue } from "../context/StateProvider";

const RowContainer = ({ flag, data, scrollValue }) => {
  // console.log(data);

  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

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
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-6 scroll-smooth bg-rowBg ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length < 0 ? (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      ) : (
        data.map((item) => (
          <div
            key={item.productId}
            className="h-[225px] w-275 min-w-[275px] md:w-340 md:min-w-[340px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
              >
                <img
                  src={item?.imageURL}
                  alt=".."
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
              >
                <MdShoppingBasket
                  className=" text-white"
                  onClick={sendToCard}
                />
              </motion.div>
            </div>
            {/* end */}

            <div className="w-full flex flex-col items-end justify-end -mt-8">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.product_name}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.product_category}
              </p>
              <div className="flex items-center gap-8">
                <p className=" flex items-center text-lg text-headingColor font-semibold">
                  <HiCurrencyRupee className="text-sm text-red-500  " />
                  {/* <span className="text-sm text-red-500">$</span> */}
                  {item?.product_price}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RowContainer;
