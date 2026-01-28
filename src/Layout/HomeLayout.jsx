import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import video from "/images/286689_small.mp4";
import Footer from "../Components/Footer/Footer";
import Top_hirers from "../Components/Top_hirers/Top_hirers";
import { Outlet } from "react-router";
import NewsOutLooks from "../Components/NewsOutLooks/NewsOutLooks";
import HowItWorks from "../Pages/HowItWorks";
import { TypeAnimation } from "react-type-animation";
import Review from "../Pages/Review";
import PremiumFeatures from "../Pages/PremiumFeatures";


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
        <div className="sm:top-15  absolute top-55 lg:top-50 left-0 z-20">
          <div className="bg-black/50 p-2 lg:p-4 rounded-xl">
            <h1 className="flex flex-col lg:ml-6 text-white">
              <span className="text-xl font-semibold lg:text-5xl sm:text-4xl">
                The Ultimate Place
              </span>
              <br />{" "}
              {/* <span className="text-xm lg:text-3xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Search Your Future
              </span> */}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "To Search Your Future",
                  1000,
                  "To Search Your Dream",
                  1000,
                  "To Search Your Destination",
                  1000,
                  "To Search Your Community",
                  1000,
                ]}
                speed={50}
                className="ml-10 text-xm lg:text-3xl"
                repeat={Infinity}
              />
            </h1>
          </div>
        </div>
      </header>

      <main className=" text-white p-8">
        <Top_hirers></Top_hirers>
        <HowItWorks></HowItWorks>
        <NewsOutLooks></NewsOutLooks>
        <Review></Review>
        <PremiumFeatures></PremiumFeatures>
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
