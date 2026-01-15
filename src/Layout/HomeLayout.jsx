import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import video from "../assets/286689_small.mp4";

const HomeLayout = () => {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <header className="relative h-screen ">
        <video
          src={video}
          className="absolute object-cover h-screen w-full "
          autoPlay
          loop
          muted
        ></video>
        {/* <Navbar className="absolute top-0 left-0 z-30 w-full"></Navbar> */}
        {/* <div className="absolute top-16 bg-black/50 sm:h-45 lg:h-216 inset-0 z-10"></div> */}
        <div className="sm:top-15  absolute lg:top-50 left-0 z-20">
          <div className="bg-black/50 p-4 rounded-xl">
            <h1 className="flex flex-col ml-6 text-white">
              <span className="lg:text-7xl sm:text-4xl">
                The ultimate Place:
              </span>
              <br />{" "}
              <span className="lg:text-4xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to Search for Future
              </span>
            </h1>
          </div>
        </div>
      </header>

      <main className=" text-white p-8">
        <h2 className=" text-white">Hello this is main</h2>
        <h2 className="text-white">Hello this is main</h2>
        <h2 className="text-white">Hello this is main</h2>
        <h2 className="text-white">Hello this is main</h2>
        
      </main>
    </div>
  );
};

export default HomeLayout;
