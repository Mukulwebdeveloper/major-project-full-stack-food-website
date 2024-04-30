import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";
import { alertNull, alertSuccess } from "../context/actions/alertActions";
import { setAllProducts } from "../context/actions/productAction";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  HiCurrencyRupee,
  EditIcon,
  DeleteIcon,
  MdSearch,
  BsToggles2,
} from "../assets/icons";
import { deleteAProduct, getAllProducts } from "../api";
import { Paper } from "@mui/material";

const DBItems = () => {
  const defaultTheme = createTheme();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log("Products from Redux:", products);

  //Delete User
  const deleteProduct = (item) => {
    if (window.confirm("Are you sure, you want to perform this action")) {
      deleteAProduct(item.productId).then((res) => {
        dispatch(alertSuccess("Product Deleted"));
        setInterval(() => {
          dispatch(alertNull());
        }, 3000);
        getAllProducts().then((data) => {
          dispatch(setAllProducts(data));
        });
      });
    }
  };
  const editProduct = (productId) => {
    alert("You want to edit");
  };

  return (
    <div className="flex items-center justify-self-center gap-4 pt-10 w-full">
      <ThemeProvider theme={defaultTheme}>
        <Paper className="w-full h-400 overflow-hidden overflow-y-scroll">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className="text-3xl p-5">List of Item</h2>
            <div className="flex items-end justify-end gap-4">
              <div className="flex items-center justify-end gap-3 px-4 py-2 mb-4 bg-lightOverlay backdrop-blur-md rounded-md shadow-md">
                <MdSearch className="text-2xl text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Here.."
                  className="border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor"
                />
                <BsToggles2 className="text-2xl text-gray-400" />
              </div>
            </div>
          </div>
          <table className=" w-full">
            <thead>
              <tr className="text-base text-textColor">
                <th>Action</th>
                <th>Images</th>
                <th> Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody className="w-full ">
              {products.map((item) => (
                <tr key={item.productId}>
                  <td className="text-center">
                    <button
                      onClick={deleteProduct}
                      className="w-10 border p-2 rounded-full me-1 bg-red-500 text-primary"
                    >
                      Del
                    </button>
                    |
                    <button
                      onClick={editProduct}
                      className="w-10 border p-2 rounded-full ms-1 bg-green-500 text-primary"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="flex align-center justify-center my-2 ">
                    {<img src={item.imageURL} width="70" />}
                  </td>
                  <td className="text-center">{item.product_name}</td>
                  <td className=" text-center">{item.product_category}</td>
                  <td className=" text-center">
                    {parseFloat(item.product_price).toFixed(2)}
                    <HiCurrencyRupee className="text-red-400 ms-[90px] -mt-5" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default DBItems;
