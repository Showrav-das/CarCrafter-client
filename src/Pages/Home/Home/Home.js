import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Navigation/Header';
import Banner from '../Banner/Banner';
import Explores from '../Explores/Explores';
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Explores />
            <Reviews />
            <Footer/>
        </div>
    );
};

export default Home;