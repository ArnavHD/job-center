import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { NavLink, useParams } from "react-router";

const SingleJob = ({ singleJob }) => {
  console.log(singleJob);
  const {id} = useParams();
  console.log(id);
  return (
    <div className=" border flex items-start justify-start gap-3 md:gap-10 lg:mx-12 rounded-xl bg-white p-5 lg:p-10">
      <div>
        <img
          className=" lg:w-40 lg:h-40 w-25 h-25 border p-1 rounded-xl "
          src={singleJob.bannerImage}
          alt="banner img"
        />
      </div>
      <div className="lg:space-y-3">
        <h2 className="text-xl lg:text-2xl font-bold">{singleJob.title}</h2>
        <div className="lg:flex items-center gap-3">
          <p className="flex items-center gap-1">
            <MdLocationOn size={20} />
            {singleJob.location}
          </p>
          <p className="flex items-center gap-2">
            <BsCashCoin size={20} />
            {singleJob.salary}
          </p>
          <p className="rounded-sm bg-black/30 w-24 text-center">{singleJob.jobType}</p>
        </div>
        <div>
            <NavLink to={`/categories/${id}/${id}`} className="btn">View More</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
