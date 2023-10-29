// import React from 'react';
// import Footer from "../components/footer/Footer";
// import TestNav from "../components/NavBar/TestNav";
import { Fragment } from "react";
// import BG from "../assets/img/fish.webp";

const HomePage = () => {
    return (
        <Fragment>
            {/* <TestNav /> */}
            {/* {!props.isLoading && <Dishes />}
            {props.isLoading && <LoadingSpinner />} */}
            <div style={{ backgroundImage: "url('src/assets/img/fishWall.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className="w-full h-[800px] text-center text-white font-bold">
                <h1 className='pt-10 text-[60px]'>ANGLER VIETNAM</h1>
                <p>YOUR FAVOURITE BRANDS IN ONE STORE</p>
            </div>
            <div className="pt-10 w-full h-[800px] text-center text-black">
                <h1 className='text-[30px] font-bold'>WHAT S NEW???</h1>
                <hr className="w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr >
                <p>List of most recent products created.
                </p>
            </div>
            <div style={{ backgroundImage: "url('src/assets/img/fishWall1.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className=" w-full h-[800px] text-center text-white font-bold">
                <div className='h-[25px] pt-25'></div>
                <h1 className='text-[60px]'>SHOP OUR REEL COLLECTION</h1>
            </div>
            <div className="pt-10 w-full h-[800px] text-center text-black">
                <h1 className='text-[30px] font-bold'>TOP BRAND</h1>
                <hr className="w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr >
            </div>
            <div style={{ backgroundImage: "url('src/assets/img/fishWall3.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className="w-full h-[800px] text-center text-white font-bold">
                <h1 className='pt-10 text-[60px]'>ANGLER VIETNAM</h1>
                <p>YOUR FAVOURITE BRANDS IN ONE STORE</p>
            </div>
            {/* <Footer /> */}
        </Fragment >
    );
};



export default HomePage;
