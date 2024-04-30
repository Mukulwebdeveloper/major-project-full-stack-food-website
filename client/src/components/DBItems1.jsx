import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import {
  HiCurrencyRupee,
  EditIcon,
  DeleteIcon,
  MdSearch,
  BsToggles2,
} from "../assets/icons";
import { Paper } from "@mui/material";
import { deleteAProduct, getAllProducts } from "../api";
import { alertNull, alertSuccess } from "../context/actions/alertActions";
import { setAllProducts } from "../context/actions/productAction";
// import { Axios } from "axios";
import axios from "axios";
import { CSVLink } from "react-csv";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";

const DBItems1 = () => {
  const defaultTheme = createTheme();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log("Products from Redux:", products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  //datatable
  const column = [
    {
      name: "S.No.",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="text-center">
          <button
            // onClick={deleteProduct}
            className="w-10 border p-2 rounded-full me-1 bg-red-500 text-primary"
          >
            <DeleteIcon
              onClick={() => {
                deleteProduct(row.productId);
              }}
            />
          </button>
          |
          <button
            // onClick={editProduct}
            className="w-10 border p-2 rounded-full ms-1 bg-green-500 text-primary"
          >
            <EditIcon
              onClick={() => {
                editProduct(row.productId);
              }}
            />
          </button>
        </div>
      ),
    },
    {
      name: "Images",
      selector: (row) => (
        <div className="flex align-center justify-center my-2">
          {<img src={row.imageURL} width="70" />}
        </div>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.product_category,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => (
        <div>
          {parseFloat(row.product_price).toFixed(2)}
          <HiCurrencyRupee className="text-red-400 ms-[40px] -mt-4" />
        </div>
      ),
      // sortable: true,
    },
  ];
  const customstyle = {
    headRow: {
      style: {
        backgroundColor: "white",
        color: "#515151",
      },
    },
    headCells: {
      style: {
        fontSize: "1rem",
        fontWeight: "500",
        // textTransform: "uppercase",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
      },
    },
  };

  // delete function
  const deleteProduct = async (productId) => {
    if (window.confirm("Are you sure, you want to perform this action")) {
      //     deleteAProduct(row.productId).then((res) => {
      //       dispatch(alertSuccess("Product Deleted"));
      //       setInterval(() => {
      //         dispatch(alertNull());
      //       }, 3000);
      //       getAllProducts().then((data) => {
      //         dispatch(setAllProducts(data));
      //       });
      //     });
      // try {
      //   await axios.delete(
      //     `http://localhost:5001/major-project-feb-28/us-central1/app/api/products/delete/${productId}`
      //   );
      //   console.log("jaya");
      // } catch (err) {
      //   console.log(err);
      // }
    }
  };

  // edit function
  const editProduct = async (productId) => {
    if (window.confirm("Are you sure, you want to perform this action")) {
    }
  };

  // const handleSort = async (column, sortDirection) =>
  //   console.log(column.selector, sortDirection);

  //search filter function
  const handleSearchFilter = (e) => {
    const newUserData = e.target.value.toLowerCase();
    const filterData = products.filter((row) => {
      return row.product_name.toLowerCase().includes(newUserData);
    });
    console.log(filterData);
    setFilteredProducts(filterData);
  };

  return (
    <div className="flex items-center justify-self-center gap-4 pt-10 w-full">
      <div className="w-full">
        <ThemeProvider theme={defaultTheme}>
          <Paper className=" ">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2 className="text-3xl p-5">List of Item</h2>
              <motion.button
                {...buttonClick}
                className="bg-gradient-to-bl from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 px-4 my-4 py-0 rounded-xl text-black text-base font-semibold"
              >
                <CSVLink data={products}>Export to CSV File</CSVLink>
              </motion.button>
              {/* <div className="mt-6">
                <CSVLink data={products} className="btn">
                  Download me
                </CSVLink>
              </div> */}
              <div className="flex items-end justify-end gap-4">
                <div className="flex items-center justify-end gap-3 px-4 py-2 mb-4 bg-lightOverlay backdrop-blur-md rounded-md shadow-md">
                  <MdSearch className="text-2xl text-gray-400" />
                  <input
                    type="text"
                    onChange={handleSearchFilter}
                    placeholder="Search Here.."
                    className="border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor"
                  />
                  <BsToggles2 className="text-2xl text-gray-400" />
                </div>
              </div>
            </div>
            <DataTable
              columns={column}
              data={filteredProducts}
              customStyles={customstyle}
              // onSort={handleSort}
              // sortServer
              // title="List Of Users"
              fixedHeader
              pagination
              fixedHeaderScrollHeight="450px"
              selectableRows
              selectableRowsHighlight
              highlightOnHover
              // subHeader
              // subHeaderComponent={
              //   <input
              //     type="text"
              //     placeholder="Search Here.."
              //     className="border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor"
              //   />
              // }
            ></DataTable>
          </Paper>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default DBItems1;
