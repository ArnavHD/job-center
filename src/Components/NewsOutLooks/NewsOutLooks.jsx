import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const NewsOutLooks = () => {

    const data = useLoaderData();
    console.log(data);
    

    return (
      <div className=" mt-15">
        <h2 className=" text-5xl font-bold text-center">Popular Companies</h2>
        <p className=" text-center text-xl mt-3">
          Total Company Count: {data.length}{" "}
        </p>

        <div className="grid lg:grid-cols-3 text-center lg:mx-32 gap-5 mt-10">
          {data.map((company) => (
            <div
              key={company.id}
              className={
                "p-5 text-black border-2 bg-white border-white rounded-xl flex flex-col gap-10"
              }
            >
              <div className="flex justify-center items-center gap-7">
                <img
                  className="w-20 h-20 border-2 border-gray-400 rounded-xl p-1"
                  src={company.logo}
                  alt="this is img"
                />
                <div>
                  <h2 className="text-2xl font-bold">{company.name}</h2>
                  <h4>Job available: {company.jobs.length}</h4>
                </div>
              </div>
              <NavLink
                to={`categories/${company.id}`}
                className="btn bg-black text-white"
              >
                View Details
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
};

export default NewsOutLooks;