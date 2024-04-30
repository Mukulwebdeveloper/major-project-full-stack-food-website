import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="" style={{ width: "500px" }}>
          <button className="btn btn-sm btn-primary">
            <FaCheck />
          </button>
          &nbsp;
          <button className="btn btn-sm btn-danger">
            <MdDelete
              onClick={() => {
                deleteuser(row.id);
              }}
            />
          </button>
          &nbsp;
          <button className="btn btn-sm btn-success">
            <CiEdit />
          </button>
        </div>
      ),
    },
    {
      name: "First Name",
      selector: (row) => row.fName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.pwd,
      sortable: true,
    },
    {
      name: "Mobile No",
      selector: (row) => row.mno,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Hobbies",
      selector: (row) => row.hobbies,
      sortable: true,
    },
    {
      name: "Degree",
      selector: (row) => row.degree,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "States",
      selector: (row) => row.states,
      sortable: true,
    },
  ];
  const customstyle = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontWeght: "600",
        textTransform: "uppercase",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
      },
    },
  };

  useEffect(() => {
    fetch("http://localhost:5000/student")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }, []);

  //kkkapi
  //   const getStdData = async () => {
  //     try {
  //       let stdResult = await axios.get("http://localhost:5000/student");
  //       setUserData(stdResult.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  // delete user
  const deleteuser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/student/${id}`);
      //   toast.success("Deleted Successfully");
      toast.success("Deleted Successfully", {
        position: "top-center",
        autoClose: 500,
      });
      setUserData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section>
      <DataTable
        title="Students List"
        columns={column}
        data={userData}
        customStyles={customstyle}
        pagination
        subHeader
        subHeaderComponent={<input placeholder="Search here..." />}
        fixedHeaderScrollHeight="350px"
        fixedHeader
        selectableRows
      />
    </section>
  );
};

export default UserList;
