import React,{useState,useEffect} from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { Button } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const ManageAllOrder = () => {
  const { user } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

  const deleteBtn = (id) => {
    //console.log(id);
    fetch(`http://localhost:5000/products/${id}`,
      {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data =>{
        //console.log(data)
        if (data.deletedCount > 0) {
          alert('Are you want to delete?');
          const restItem = products.filter(product => product._id != id);
          setProducts(restItem)
        }
    
      } 
    ) 
  }
  const editBtn = (id) => {
    console.log(id);
  }
    return (
        <div>
            <h2>Manage all products</h2>
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{background:"#E3D9D4"}}>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>User email</TableCell>
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
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.price}৳
              </TableCell>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell> 
              <TableCell component="th" scope="row">
                <Button onClick={() => deleteBtn(row._id)} variant="outlined" color="error">Delete</Button>
                <Link to={`/dashboard/edit/${row._id}`}>
                <Button variant="outlined">Edit</Button>
                </Link>
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