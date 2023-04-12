import { Button } from '@mui/material';
import React,{useState} from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        const value = e.target.value;
        // console.log(value);
        setEmail(value);
    }
    const handleAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => setEmail(data));
        alert("Successfully Added");
        e.preventDefault();
    }
    return (
        <div>
            <div>
            <h2>Admin Panel</h2>
            <form onSubmit={handleAdmin}>
                <input onBlur={handleOnBlur} type="email"/> <br />
                <button className="button-regular" type="submit">Make Admin</button>
        </form>
        </div>
        </div>
    );
};

export default MakeAdmin;