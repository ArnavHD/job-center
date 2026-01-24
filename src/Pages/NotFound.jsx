import React from 'react';
import notFound from "../assets/error.avif";
import Navbar from '../Components/Navbar/Navbar';

const NotFound = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className=" flex justify-center items-center h-screen">
          <img className="w-2/3 h-2/3" src={notFound} alt="" />
        </div>
      </div>
    );
};

export default NotFound;