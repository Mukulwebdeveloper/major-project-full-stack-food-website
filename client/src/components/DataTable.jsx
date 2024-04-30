import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, ThemeProvider, createTheme } from '@mui/material';
import { HiCurrencyRupee, MdSearch, BsToggles2, EditIcon, DeleteIcon } from '../assets/icons';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const DataTable = () => {

    const defaultMaterialTheme = createTheme();
    //  const products = useSelector((state)=>state.products);
    //  console.log(products);
    // inbild start
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
       // inbild end

       const db = getFirestore();
     const colRef = collection(db, "products");
       useEffect(() => {
        getUsers();
      }, []);
    
      const getUsers = async () => {
        const data = await getDocs(colRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), productId: doc.productId })));
      };

  return (
    <div className='flex items-center justify-self-center gap-4 pt-6 w-full'>
      <ThemeProvider theme={defaultMaterialTheme}>
        <Paper className='w-full overflow-hidden'>
            {/* Search */}
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <h2 className='text-3xl p-5'>List of Item</h2>
        <div className='flex items-end justify-end gap-4'>
        <div className='flex items-center justify-end gap-3 px-4 py-2 mb-4 bg-lightOverlay backdrop-blur-md rounded-md shadow-md'>
            <MdSearch className='text-2xl text-gray-400'/>
            <input type='text' placeholder='Search Here..' className='border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor'/>
            <BsToggles2 className='text-2xl text-gray-400'/>
        </div>
        </div>
       </div>
        {/* Search End */}

        <TableContainer className='md:max-h-[420px] max-h-full'>
        <Table>
            {/* Heading Start */}
        <TableHead>
        <TableRow>
            <TableCell
              align="left"
              style={{ minWidth: "100px" }}>
              Action
            </TableCell>
            <TableCell
              align="left"
              style={{ minWidth: "100px" }}>
              Images
            </TableCell>
            <TableCell
              align="left"
              style={{ minWidth: "100px" }}>
              Name
            </TableCell>
            <TableCell
              align="left"
              style={{ minWidth: "100px" }}>
              Category
            </TableCell>
            <TableCell
              align="left"
              style={{ minWidth: "100px" }}>
              Price
            </TableCell>
        </TableRow>
      </TableHead>
      {/* Heading Close */}

    {/* Body Start */}
    <TableBody >
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((rowData) => {
            return (
            <TableRow  hover role="checkbox" tabIndex={-1}>
                {/* 1 Action Cell */}
                 <TableCell
               key={rowData.productId} align="left">
                <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                            //   onChange={() => {
                            //     editUser(row.productId)
                            //   }}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                            //   onClick={() => 
                            //     deleteUser(row.productId)
                            //   }
                            />
                          </Stack>
                    </TableCell>
                    {/* 2 Images Cell */}
                    <TableCell 
                    key={rowData.productId} align="left">
                    {/* {rowData.imageURL} */}
                    <img
                      src={rowData.imageURL}
                      className='w-32 h-16 object-contain rounded-md'/>
                    </TableCell>
                    {/* 3 Name Cell */}
                    <TableCell 
                    key={rowData.productId} align="left">
                    {rowData.product_name}
                    </TableCell>
                    {/* 4 Category Cell */}
                    <TableCell 
                    key={rowData.productId} align="left">
                    {rowData.product_category}
                    </TableCell>
                    {/* 5 Price Cell */}
                    <TableCell
                    key={rowData.productId} align="left" >
                    <p className='text-md font-semibold text-textColor flex items-center justify-start'>
                    <HiCurrencyRupee className='text-red-400'/>
                    {parseFloat(rowData.product_price).toFixed(2)} 
                    {/* {rowData.product_price ? parseFloat(rowData.product_price).toFixed(2) : null} */}
                    </p>
                    
                    </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    {/* Body End */}

        </Table>
        </TableContainer>
        <TablePagination
    rowsPerPageOptions={[5,10]}
    component="div"
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
        </Paper>
      </ThemeProvider>
    </div>
  )
}

export default DataTable
