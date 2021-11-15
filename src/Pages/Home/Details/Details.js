import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './Details.css';
import Header from '../../../Shared/Navigation/Header';

const Details = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        axios.post('https://dry-waters-58580.herokuapp.com/details', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Successfully added your information.Thank you");
                     reset();
                }
            })
    }
    const { id } = useParams();
    // console.log(id);
    // console.log("hiii");
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`https://dry-waters-58580.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        // console.log(data)
    }, [])
    return (
        <>
        <Header/>
        <div sx={{display: 'flex',justifyContent: 'center' }} className="details">
            <div>
                <img src={details.img} style={{width:"300px"}} alt="" />
                <h2>{details?.name}</h2>
            </div>
            {/* <h2>{product.name}</h2> */}
            <div  className="add-service">
                <h2>Provide Your Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("serviceNAme", { required: true, maxLength: 20 })} defaultValue={details.name}  /> <br />
                    <input {...register("email", { required: true, maxLength: 20 })} defaultValue={user.email}  /> <br />
                    <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName}  /> <br />
                    <input {...register("city")} placeholder="write your city name" />  <br />
                    <input type="number" {...register("price")} placeholder="price" defaultValue={details.price}/>  <br />
                    <input {...register("number")} placeholder="phone number" />  <br /> <br />
                    <input className="button-regular" type="submit" />
                </form>
            </div>
            </div>
            </>
    );
};

export default Details;