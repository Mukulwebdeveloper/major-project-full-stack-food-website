import React from "react";
import {
  DBHeader,
  DBHome,
  DBItems,
  DBItems1,
  DBNewItem,
  DBOrders,
  DBUsers,
  DBUsers1,
} from "../components";
import { Route, Routes } from "react-router-dom";

const DBRightSection = () => {
  return (
    <div className="flex flex-col py-12 px-12 flex-1 h-full">
      <DBHeader />
      <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none">
        <Routes>
          <Route path="/home" element={<DBHome />} />
          <Route path="/orders" element={<DBOrders />} />
          {/* <Route path="/items" element={<DBItems />} /> */}
          <Route path="/items1" element={<DBItems1 />} />
          <Route path="/newItem" element={<DBNewItem />} />
          {/* <Route path="/users" element={<DBUsers />} /> */}
          <Route path="/users" element={<DBUsers1 />} />
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
