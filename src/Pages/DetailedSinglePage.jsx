import React from "react";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { MdLocationOn, MdManageAccounts } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { FaCalendarAlt, FaFileInvoiceDollar } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { PiGenderMaleBold } from "react-icons/pi";
import { FaGears } from "react-icons/fa6";

const DetailedSinglePage = () => {
  const { companyId, jobId } = useParams();
  console.log(companyId, jobId);
  const data = useLoaderData();
  console.log("Data from detailedsinglepage", data);
  const company = data.find((singleComp) => singleComp.id == companyId);
  console.log("Company form details", company);
  const job = company.jobs.find((singleJob) => singleJob.id == jobId);
  console.log("Single Job form detailsingle page", job);
  return (
    <div className="bg-black/30 ">
      <Navbar></Navbar>
      <div className="p-10 py-16 ">
        <div className="border-4 py-8  border-gray-700 rounded-xl bg-black">
          <div className="flex justify-start bg-white border-2 lg:mx-15 rounded-xl">
            <div className="flex  justify-start   lg:gap-3 lg:p-7">
              <div>
                <img
                  src={job.bannerImage}
                  className="lg:w-52 p-1 lg:h-52 border-2 rounded-xl"
                  alt=""
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{job.title}</h1>
                  </div>
                  <div>
                    <button className="btn ml-10 px-16 bg-black text-white">
                      Apply Now!!
                    </button>
                  </div>
                </div>
                <div className="flex lg:gap-8 lg:mt-4">
                  <p className="flex items-center text-xl gap-1">
                    <MdLocationOn size={20} />
                    {job.location}
                  </p>
                  <p className="flex items-center text-xl gap-2">
                    <BsCashCoin size={20} />
                    {job.salary}
                  </p>
                  <p className="rounded-sm bg-black/30 w-24 text-xl  text-center">
                    {job.jobType}
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-3 mt-4">
                  {job.requirements.map((requirement) => (
                    <div className="text-center">
                      <div className="bg-blue-400/30 text-xl p-1 px-3 rounded-xl">
                        {requirement}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div>
            <button className="btn ml-10 px-16">Apply Now!!</button>
        </div> */}
            </div>
          </div>
          <div className="lg:p-10 grid grid-cols-4 gap-16 bg-white mx-15 border-2 rounded-xl mt-5">
            <div className="flex  gap-2">
              <div>
                <FaCalendarAlt size={25} />
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl font-bold">Date Posted</h2>
                <h2 className="text-xl">Feb 3, 2026</h2>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <IoLocation size={30} />
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl font-bold">Location</h2>
                <h2 className="text-xl">{job.location}</h2>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <BsCashCoin size={25} />
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl font-bold">Offered Salary</h2>
                <h2 className="text-xl">{job.salary}</h2>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <FaCalendarAlt size={25} />
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl font-bold">Expiration Date</h2>
                <h2 className="text-xl">Jun 6, 2026</h2>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <MdManageAccounts size={30} />
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl font-bold">Experience</h2>
                <h2 className="text-xl">2 Years</h2>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <PiGenderMaleBold size={25} />
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl font-bold">Gender</h2>
                <h2 className="text-xl">Male</h2>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <FaGears size={30} />
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl font-bold">Qualifications</h2>
                <h2 className="text-xl">Certificate</h2>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <FaFileInvoiceDollar size={25} />
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl font-bold">Career Level</h2>
                <h2 className="text-xl">Student</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DetailedSinglePage;
