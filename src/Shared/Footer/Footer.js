import React from 'react';

const Footer = () => {
    return (
        <div style={{background:"black",color:"white",position:"absolate",marginTop:"250px"}}>
        <div style={{display:"flex",justifyContent:"space-around",textAlign:"justify",padding:"30px"}}>
        <ul>
            <li>Latest Car Collection</li>
            <li>Conatct Us</li>
            <li>About Us</li>
            <li>Account</li>
        </ul>
        <ul>
            <li>blog</li>
            <li>Help and support</li>
        </ul>
        <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>FAQ</li>
            </ul>
            </div>
            <p>Copyrights &copy; 2021 Car Rental Limited</p>
            </div>
    );
};

export default Footer;