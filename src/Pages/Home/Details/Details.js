import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import "./Details.css";
import Header from "../../../Shared/Navigation/Header";
import { useHistory } from "react-router-dom";

const Details = () => {
  const { register, handleSubmit, reset } = useForm();
  const [details, setDetails] = useState({});

  const { user } = useAuth();
  const history = useHistory();

  const onSubmit = (data) => {
    //console.log(data);
    const a = {
      serviceNAme: details.name,
      price: details.price,
      city: data.city,
      email: user.email,
      name: user.displayName,
      number: data.number,
    };
    //console.log(a);
    //console.log(data.city);
    //console.log(data);
    axios
      .post("https://car-server-ssgi.onrender.com/details", a)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Successfully added your information.Thank you");
          reset();
          history.replace("/dashboard");
        }
      });
  };
  const { id } = useParams();
  // console.log(id);
  // console.log("hiii");
  useEffect(() => {
    fetch(`https://car-server-ssgi.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
    // console.log(data)
  }, []);
  return (
    <>
      <Header />
      <div
        sx={{ display: "flex", justifyContent: "center" }}
        className="details"
      >
        <div>
          <img src={details.img} style={{ width: "300px" }} alt="" />
          <h2>{details?.name}</h2>
        </div>
        {/* <h2>{product.name}</h2> */}
        <div className="add-service">
          <h2>Provide Your Information</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("serviceNAme", { maxLength: 20 })}
              disabled
              defaultValue={details.name}
            />{" "}
            <br />
            <input
              {...register("email", { maxLength: 20 })}
              defaultValue={user.email}
            />{" "}
            <br />
            <input
              {...register("name", { maxLength: 20 })}
              defaultValue={user.displayName}
            />{" "}
            <br />
            <input
              {...register("city")}
              name="city"
              required
              placeholder="write your city name"
            />{" "}
            <br />
            <input
              type="number"
              {...register("price")}
              placeholder="price"
              disabled
              defaultValue={details.price}
            />{" "}
            <br />
            <input
              {...register("number", { minLength: 11 })}
              type="number"
              required
              placeholder="phone number"
            />{" "}
            <br /> <br />
            <input className="button-regular" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Details;
