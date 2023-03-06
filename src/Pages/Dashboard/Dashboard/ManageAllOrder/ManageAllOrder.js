import React,{useState,useEffect} from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Button } from '@mui/material';

const ManageAllOrder = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://car-rental-server-site-production.up.railway.app/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <div>
            <h2>Manage aL</h2>
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{background:"#E3D9D4"}}>
          <TableRow>
            <TableCell>Product Id</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.price}
              </TableCell> 
              <TableCell component="th" scope="row">
               <Button variant="contained">Delete</Button>
              </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageAllOrder;