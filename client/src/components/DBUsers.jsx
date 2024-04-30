import React, { useEffect, useState } from "react";
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

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  console.log(allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, []);

  const defaultMaterialTheme = createTheme();

  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
      <ThemeProvider theme={defaultMaterialTheme}>
        <Paper className="w-full h-400 overflow-hidden overflow-y-scroll">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className="text-3xl p-5">List of Users</h2>
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
          <table className="w-full">
            <thead>
              <tr className="text-base text-textColor">
                <th>Images</th>
                {/* <th>Name</th> */}
                <th>Email</th>
                <th>Verify</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((item) => (
                <tr key={item?.uid}>
                  <td className="flex align-center justify-center my-2 ">
                    <img
                      width="50"
                      src={item?.photoURL ? item?.photoURL : Avatar}
                      className="rounded-full"
                    />
                  </td>
                  {/* <td className="text-center">{item?.displayName}</td> */}
                  <td className="text-center">{item?.email}</td>
                  <td className="flex  justify-center my-1">
                    <p
                      className={`px-2 py-1 w-32 text-center text-primary rounded-md ${
                        item?.emailVerified
                          ? "bg-emerald-500 mb-4"
                          : "bg-red-500 mb-4"
                      }`}
                    >
                      {item?.emailVerified ? "Verified" : "Not Verified"}
                    </p>
                  </td>
                  <td className="text-center">
                    <button
                      className="w-16 border py-1 rounded-full me-1 bg-red-500 text-primary"
                      // onClick={deleteUser}
                    >
                      Del
                    </button>
                    |{" "}
                    <button className="w-16 border py-1 rounded-full ms-0 bg-green-500 text-primary">
                      Edit
                    </button>
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

export default DBUsers;
