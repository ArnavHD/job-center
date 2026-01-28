import React from 'react';
import Marquee from 'react-fast-marquee';
import mit from "/images/mit.png";
import calgary from "/images/Calgary.png";
import nasa from "/images/nasa.png";
import ibm from "/images/ibm.svg";
import tesla from "/images/tesla.jpg";
import tornto from "/images/University-of-Toronto.png";

const Top_hirers = () => {
    return (
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-10 mt-3">Our Top Employers:</h2>
        <Marquee
          className="flex gap-10"
          // pauseOnHover={true}
          autoFill={true}
          speed={70}
        >
          <div className=" flex gap-10">
            <div className=" bg-white p-2 lg:p-5 rounded-xl">
              <img src={mit} className="w-40 h-24 lg:w-50 lg:h-30" alt="" />
            </div>
            <div className=" bg-white p-2 lg:p-5 rounded-xl">
              <img
                src={nasa}
                className="w-40 h-24 lg:w-50 lg:h-30 object-contain"
                alt=""
              />
            </div>
            <div className=" bg-white p-2 lg:p-5 rounded-xl">
              <img src={tesla} className="w-40 h-24 lg:w-50 lg:h-30" alt="" />
            </div>
            <div className=" bg-white p-2  lg:p-5 rounded-xl">
              <img src={calgary} className="w-40 h-24 lg:w-50 lg:h-30" alt="" />
            </div>
            <div className=" bg-white p-2 lg:p-5 rounded-xl">
              <img src={ibm} className="w-40 h-24 lg:w-50 lg:h-30" alt="" />
            </div>
            <div className=" bg-white p-2 lg:p-5 rounded-xl">
              <img
                src={tornto}
                className="w-40 h-24 lg:w-50 lg:h-30 object-contain"
                alt=""
              />
            </div>
          </div>
        </Marquee>
      </div>
    );
};

export default Top_hirers;