import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import useAuth from '../../../../Hooks/useAuth';

const Payment = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`https://car-server-ssgi.onrender.com/details/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2>Payment system is coming soon....{id} {products.price} </h2>
        </div>
    );
};

export default Payment;