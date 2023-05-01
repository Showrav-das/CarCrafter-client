import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import{Stack,Rating,Button,Typography} from '@mui/material';


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [ rating, setRating ] = useState(1);
  const { user } = useAuth();

  //const handleChange = (e) => {
  //  console.log(e.target.value);
  //  setRating(e.target.value);
  //}
  const onSubmit = async data => {
    //data.rating = rating;
    //console.log(data);
        //console.log(data.rating);
    const updateData = { ...data };
      updateData.rating = rating;
      console.log(updateData);
        axios.post('http://localhost:5000/reviews',await updateData)
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
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <input readOnly {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} /> <br />
          <input {...register("review")} placeholder="Say something" />
          <Typography >Rating</Typography>
                <Stack spacing={1}>
                <Rating
                  name="rating"
                  value={rating}
                    precision={.5}
                    {...register("rating")}
                  onChange={(_,value) => {
                    setRating(value);
                  }}    
                />
                </Stack>
                <br />
                {/*<Button
            type="submit"
            variant="contained"
            color="primary"
           
          >
            Submit
          </Button>*/}
                <input className="button-regular" type="submit" />
            </form>
        </div>
    );
};

export default Review;