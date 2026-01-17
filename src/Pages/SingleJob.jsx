import React from "react";

const SingleJob = ({ singleJob }) => {
  console.log(singleJob);
  return (
    <div className=" border flex items-center justify-start gap-10 lg:mx-12 rounded-xl bg-white p-10">
      <div>
        <img className=" w-30 h-30 border p-1 rounded-xl" src={singleJob.bannerImage} alt="banner img" />
      </div>
      <div>
        <h2 className="text-3xl">{singleJob.title}</h2>

      </div>
    </div>
  );
};

export default SingleJob;
