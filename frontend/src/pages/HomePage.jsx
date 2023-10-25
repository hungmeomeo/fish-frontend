import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
    <div>
        <Header/>
        <div>
            <h1>Welcome to HOME PAGE!</h1>
            <p>Thanks for visiting. Please take a look around.</p>
        </div>
        <Footer/>
    </div>
       
    );
};

export default HomePage;
