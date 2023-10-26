// import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from "../components/footer/Footer";
import { Fragment } from "react";
// import BG from "../assets/img/fish.webp";

const HomePage = () => {
    return (
        <Fragment>
            <NavBar />
            {/* {!props.isLoading && <Dishes />}
            {props.isLoading && <LoadingSpinner />} */}
            <div style={{ backgroundImage: "url('src/assets/img/fishWall.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className="w-full h-[800px] text-center text-white font-bold">
                <h1 className='text-[40px]'>ANGLER VIETNAM</h1>
                <p>YOUR FAVOURITE BRANDS IN ONE STORE</p>
            </div>
            {/* <img src={BG} alt="app store" className="w-full" /> */}

            <Footer />
        </Fragment >
    );
};



export default HomePage;
