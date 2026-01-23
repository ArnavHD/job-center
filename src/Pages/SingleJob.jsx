import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router";

const SingleJob = ({ singleJob, companyId, jobId }) => {
  console.log("This is single job", singleJob);
  console.log("This is jobId", jobId);
  console.log("This is company id:", companyId);
  return (
    <div className=" border flex flex-col justify-center items-center mx-8 md:flex-row md:items-start md:justify-start gap-3 md:gap-7 lg:mx-12 rounded-xl bg-white p-5 lg:p-10">
      <div>
        <img
          className=" lg:w-40 lg:h-40 w-30 h-30 border p-1 rounded-xl object-cover"
          src={singleJob.bannerImage}
          alt="banner img"
        />
      </div>
      <div className="lg:space-y-3">
        <h2 className="text-xl lg:text-2xl font-bold">{singleJob.title}</h2>
        <div className="flex flex-col justify-start items-start lg:flex lg:items-start lg:gap-3 gap-2">
          <p className="flex items-center gap-1">
            <MdLocationOn size={20} />
            {singleJob.location}
          </p>
          <p className="flex items-center gap-2">
            <BsCashCoin size={20} />
            {singleJob.salary}
          </p>
          <p className="rounded-sm bg-black/30 w-24 text-center">
            {singleJob.jobType}
          </p>
        </div>
        <div className="mt-8 sm:mt-3 text-center sm:text-start">
          <NavLink to={`/categories/${companyId}/job/${jobId}`} className="btn bg-black text-white lg:mt-5">
            View Job Details 
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
