import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import bgImg from "../../src/assets/blue-white.jpg";


const AuthLayout = () => {
  return (
    <div className="flex justify-center  lg:h-screen">
      <div className="w-1/2 hidden lg:block bg-[rgba(5,10,36,1)] "></div>
      <div className="w-1/2 hidden lg:block bg-white"></div>

      {/* bg-radial-[at_0%_100%] from-[rgb(14,27,86)] to-transparent to-40%  */}
      <main>
        {/* bg-radial-[at_0%_100%] from-[rgb(14,27,86)] to-transparent to-35% */}
        <div className=" bg-radial-[at_0%_100%] from-[rgb(14,27,86)] to-transparent to-35% lg:flex lg:justify-between lg:items-center lg:absolute lg:inset-0 lg:my-14 lg:mx-20 lg:shadow-[0_-10px_20px_rgba(128,128,128,0.3)] ">
          <div
            style={{backgroundImage: `url(${bgImg})`}}
            className="hidden lg:block bg-no-repeat bg-cover w-1/2 h-full"
          >
            <div className="hidden lg:flex lg:flex-col lg:ml-20 lg:gap-3 lg:mt-36">
              <h1 className="text-white text-6xl font-bold">The Page To</h1>
              <h3 className="text-white/75 text-3xl">
                Start your journey <br /> with us
              </h3>
            </div>
          </div>
          <div  className="hidden lg:w-1/2"></div>
          
          <div className="">
            <Outlet></Outlet>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
