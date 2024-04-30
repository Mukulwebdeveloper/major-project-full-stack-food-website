import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { deleteAProduct, getAllUsers } from "../api";
import { Avatar } from "../assets";
import { setAllUserDetails } from "../context/actions/allUserAction";
import {
  HiCurrencyRupee,
  BsToggles2,
  MdSearch,
  EditIcon,
  DeleteIcon,
} from "../assets/icons";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { CSVLink } from "react-csv";
import { buttonClick } from "../animations";
import { motion } from "framer-motion";

const DBUsers1 = () => {
  const allUsers = useSelector((state) => state.allUsers);
  console.log(allUsers);
  const dispatch = useDispatch();
  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  const [deleteUsers, setDeleteUsers] = useState(allUsers);

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, []);
  const defaultMaterialTheme = createTheme();

  const column = [
    {
      name: "S.No.",
      selector: (row, index) => index + 1,
      sortable: true,
    },

    {
      name: "Images",
      selector: (row) => (
        <div className="flex align-center justify-center my-2">
          {
            <img
              src={row.photoURL ? row.photoURL : Avatar}
              width="50"
              className="rounded-full"
            />
          }
        </div>
      ),
    },
    {
      name: "Email ID",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Verify",
      selector: (row) => (
        <div flex justify-center my-1>
          <p
            className={`px-2 py-1 w-32 text-center text-primary rounded-md ${
              row.emailVerified ? "bg-emerald-500 mb-4" : "bg-red-500 mb-4"
            }`}
          >
            {row.emailVerified ? "Verified" : "Not Verified"}
          </p>
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="text-center">
          <button
            // onClick={deleteProduct}
            // className="w-10 border p-2 rounded-full me-1 bg-red-500 text-primary"
            className="w-16 border py-1 rounded-full me-1 bg-red-500 text-primary"
          >
            <DeleteIcon
              onClick={() => {
                deleteUser(row.uid);
              }}
            />
          </button>
          |
          <button
            // onClick={editProduct}
            // className="w-10 border p-2 rounded-full ms-1 bg-green-500 text-primary"
            className="w-16 border py-1 rounded-full ms-1 bg-green-500 text-primary"
          >
            <EditIcon
              onClick={() => {
                editUser(row.uid);
              }}
            />
          </button>
        </div>
      ),
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

  const deleteUser = (uid) => {
    if (window.confirm("Are you sure, you want to perform this action")) {
      //   let newdata = allUsers.filter((item) => item.uid == uid);
      //   console.log(setDeleteUsers(newdata));
      //   setDeleteUsers(newdata);
    }
  };
  const editUser = async (uid) => {
    if (window.confirm("Are you sure, you want to perform this action")) {
    }
  };

  //search filter function
  const handleUserSearch = (e) => {
    const newUserData = e.target.value.toLowerCase();
    const filterData = allUsers.filter((row) => {
      return row.email.toLowerCase().includes(newUserData);
    });
    console.log(filterData);
    setFilteredUsers(filterData);
  };

  //   const handleSort = async (column, sortDirection) =>
  //     console.log(column.selector, sortDirection);
  return (
    <div className="flex items-center justify-self-center gap-4 pt-10 w-full md:w-[100%]">
      <ThemeProvider theme={defaultMaterialTheme}>
        <Paper className="w-full ">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className="text-3xl p-5">List of Item</h2>
            <motion.button
              {...buttonClick}
              className="bg-gradient-to-bl from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 px-4 my-4 py-0 rounded-xl text-black text-base font-semibold"
            >
              <CSVLink data={allUsers}>Export to CSV File</CSVLink>
              {/* {allUsers && <CSVLink {...allUsers}>Export</CSVLink>} */}
            </motion.button>

            <div className="flex items-end justify-end gap-4">
              <div className="flex items-center justify-end gap-3 px-4 py-2 mb-4 bg-lightOverlay backdrop-blur-md rounded-md shadow-md">
                <MdSearch className="text-2xl text-gray-400" />
                <input
                  type="text"
                  onChange={handleUserSearch}
                  placeholder="Search Here.."
                  className="border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor"
                />
                <BsToggles2 className="text-2xl text-gray-400" />
              </div>
            </div>
          </div>
          <DataTable
            // onSort={handleSort}
            // sortServer
            columns={column}
            data={filteredUsers}
            customStyles={customstyle}
            fixedHeader
            pagination
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
          ></DataTable>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default DBUsers1;
