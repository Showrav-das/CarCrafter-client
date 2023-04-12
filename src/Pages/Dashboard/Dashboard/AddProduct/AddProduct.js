import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://car-rental-server-site-production-a096.up.railway.app/products', data)
          .then(res => {
            console.log(res);
            if (res.data.insertedId) {
              alert("Product added successfully.Thank you");
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
        <h2 className="text-success">Add A Food</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" />
            <textarea {...register("details")} placeholder="Details" />
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("img")} placeholder="image url" />
            <input className="button-regular" type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;