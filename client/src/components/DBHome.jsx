import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productAction";
import {
  AccountBalanceWalletOutlinedIcon,
  KeyboardArrowUpIcon,
  MonetizationOnOutlinedIcon,
  PersonOutlinedIcon,
  ShoppingCartOutlinedIcon,
} from "../assets/icons";
import { CChart } from "@coreui/react-chartjs";

const DBHome = ({ type }) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const drinks = products?.filter((item) => item.product_category === "drinks");
  const deserts = products?.filter(
    (item) => item.product_category === "deserts"
  );
  const fruits = products?.filter((item) => item.product_category === "fruits");
  const rice = products?.filter((item) => item.product_category === "rice");
  const curry = products?.filter((item) => item.product_category === "curry");
  const chinese = products?.filter(
    (item) => item.product_category === "chinese"
  );
  const bread = products?.filter((item) => item.product_category === "bread");

  // ...........
  // const orders = orders?.filter((item) => item.status === "status");

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        // console.log(data);
        dispatch(setAllProducts(data));
      });
    }
  }, []);
  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* 1 */}
        <div className="flex items-center justify-center">
          <div className="w-340 md:w-508">
            <CChart
              type="bar"
              data={{
                labels: [
                  "Drinks",
                  "Deserts",
                  "Fruits",
                  "Rice",
                  "Curry",
                  "chinese",
                  "Bread",
                ],
                datasets: [
                  {
                    label: "Category wise Count",
                    backgroundColor: "#f87979",
                    data: [
                      drinks?.length,
                      deserts?.length,
                      fruits?.length,
                      rice?.length,
                      curry?.length,
                      chinese?.length,
                      bread?.length,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-275 md:w-460">
            <CChart
              type="doughnut"
              data={{
                labels: [
                  "Orders",
                  "Delivered",
                  "Cancelled",
                  "Paid",
                  "Not Paid",
                ],
                datasets: [
                  {
                    backgroundColor: [
                      "#00B6FF",
                      "#51FF00",
                      "#f87979",
                      "#FFD100",
                      "#FF00FB",
                    ],
                    // data: [orders, delivered, cancelled, paid, noPaid],
                    data: [10, 20, 30, 40, 10],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
