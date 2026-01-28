import { useGSAP } from '@gsap/react';
import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from 'react-icons/tb';
import gsap from "gsap";

const HowItWorks = () => {

    useGSAP(()=>{
        gsap.to('#white1', {
            x: 800,
            repeat: -1,
            yoyo: true,
            duration: 2
        })
    },[])
    useGSAP(()=>{
        gsap.from('#white2', {
            x: 800,
            repeat: -1,
            yoyo: true,
            duration: 2
        })
    },[])


    


    return (
      <div className="md:p-10 md:mt-6">
        <div>
          <div
            id="white1"
            className="w-20 h-2 hidden lg:block bg-white"
          ></div>
        </div>
        
        {/* <h1 className="text-6xl text-white p-4 mb-10 text-center font-bold">
          How It Works
        </h1> */}
        <div className="mt-10 mb-10 text-center">
          <span className="text-rotate text-4xl md:text-5xl">
            <span className="justify-items-center">
              <span>How It Works</span>
              <span>Our Secrets</span>
              <span>How It's Done</span>
              <span>Our Way of Work</span>
            </span>
          </span>
        </div>
        <div className="flex  flex-col lg:flex-row justify-center items-center mb-10">
          <div className="lg:w-1/2">
            <img
              src={"/images/corporate.jpg"}
              className="w-11/12 rounded-xl"
              alt=""
            />
          </div>
          <div className="mt-5 md:mt-7 lg:mt-0 lg:w-1/2 flex flex-col space-y-8">
            <div className="flex gap-2 items-start">
                <div>

              <TbCircleNumber1 size={30} />
                </div>
              <h3 className="text-white text-2xl">
                Create your profile and tell us about your skills, experience,
                and career goals.
              </h3>
            </div>
            <div className="flex gap-2 items-start">
                <div>
              <TbCircleNumber2 size={30} />

                </div>
              <h3 className="text-white text-xl">
                Explore verified job opportunities that match your preferences
                and expertise.
              </h3>
            </div>
            <div className="flex gap-2  items-start">
                <div>
              <TbCircleNumber3 size={30} />

                </div>
              <h3 className="text-white text-xl">
                Apply in just a few clicks with a smooth and secure application
                process.
              </h3>
            </div>
            <div className="flex gap-2  items-start">
                <div>
              <TbCircleNumber4 size={30} />

                </div>
              <h3 className="text-white text-xl">
                Get noticed by top employers looking for talent like you.
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div
            id="white2"
            className="w-20 h-2 hidden lg:block bg-white"
          ></div>
        </div>
      </div>
    );
};

export default HowItWorks;