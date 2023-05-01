import {useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [dat, setDat] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setData(data));
    },[])
    const onSubmit = (all) => {
        //const f =[all.target.name];
      console.log(all);
        setDat(all)
        let b = data.details;
        let c = { };
       
        //console.log(d);
        if (all.name.length == 0) {
            c={name:data.name,...all}
            console.log(c);
        }
        if (all.details.length == 0) {
            c={name:all.name,details:data.details}
            console.log(c);
        }
        if (all.price.length == 0) {
            c={name:all.name,details:all.details,price:data.price}
            console.log(c);
        }
    }
    //console.log(dat.name);

    return (
        <div className='add-service'>
            <h2>Edit</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={data.name} {...register("name", {maxLength: 20 })} placeholder="Service Name" />
            <textarea defaultValue={data.details} {...register("details")} placeholder="Details" />
            <input type="number" defaultValue={data.number} {...register("price")} placeholder="price" />
            <input {...register("img")} defaultValue={data.img} placeholder="image url" />
            <input className="button-regular" type="submit" />
        </form>
        </div>
    );
};

export default EditProduct;