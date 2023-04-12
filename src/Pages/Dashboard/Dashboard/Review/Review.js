import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        axios.post('https://car-rental-server-site-production-a096.up.railway.app/reviews', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Successfully added your review.Thank you");
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2>Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} /> <br />
                <input {...register("review")} placeholder="Say something" />  <br />
                <br /> 
                <input className="button-regular" type="submit" />
            </form>
        </div>
    );
};

export default Review;