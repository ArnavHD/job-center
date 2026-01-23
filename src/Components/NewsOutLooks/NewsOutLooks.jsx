import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router";

const NewsOutLooks = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShow = () => {
    setShowAll(!showAll);
    console.log(showAll);
  };

  const data = useLoaderData();
  console.log(data);

  const visibleItems = showAll ? data : data.slice(0,6);

  return (
    <div className=" mt-15">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center">Popular Companies</h2>
      <p className=" text-center text-xm sm:text-xl mt-3">
        Total Company Count: {data.length}{" "}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 text-center lg:mx-5 xl:mx-28 gap-5 mt-10">
        {visibleItems.map((company) => (
          <div
            key={company.id}
            className={
              "p-5 text-black border-2 bg-white border-white rounded-xl flex flex-col gap-10"
            }
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-7">
              <img
                className="w-20 h-20 border-2 border-gray-400 rounded-xl p-1 object-cover"
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
      <div className="flex justify-center mt-10">
        <button onClick={handleShow} className="btn ">
          {showAll ? (
            <div className="flex items-center justify-center gap-2">
              <span>Show less</span> <FaChevronUp />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span>Show more</span> <FaChevronDown />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default NewsOutLooks;
