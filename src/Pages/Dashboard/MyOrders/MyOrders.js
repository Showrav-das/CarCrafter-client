import React,{useEffect,useState} from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Table,Button} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const { user } = useAuth();
  
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const url=`http://localhost:5000/details?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
  const deleteProduct = (id) => {
    console.log(id);
    const proceed = window.confirm('Are you want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/details/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.acknowledged) {
            alert("Deleted sucessfully")
            const findItem = products.filter(product => product._id != id);
            setProducts(findItem);
          }
        })
    }
  }
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
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.displayName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.serviceNAme}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.city}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={`/dashboard/payment/${row._id}`}>
                  <button className='button-regular' >PAY</button>
                </Link>
                  <Button onClick={()=>deleteProduct(row._id)} variant="outlined" color="error" sx={{m:'10px'}}>Cancel</Button>
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