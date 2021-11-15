import React,{useEffect,useState} from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const url=`https://dry-waters-58580.herokuapp.com/details?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div>
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{background:"#E3D9D4"}}>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Band Name</TableCell>
            <TableCell>Cell Number</TableCell>
            <TableCell>City Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.displayName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.serviceNAme}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.city}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;