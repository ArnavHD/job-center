import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
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
//   console.log(companyId, jobId);
  const data = useLoaderData();
//   console.log("Data from detailedsinglepage", data);
  const company = data.find((singleComp) => singleComp.id == companyId);
//   console.log("Company form details", company);
  const job = company.jobs.find((singleJob) => singleJob.id == jobId);
//   console.log("Single Job form detailsingle page", job);
  return (
    <div className="bg-black/30 ">
      <Navbar></Navbar>
      <div className=" lg:p-10 lg:py-16 ">
        <div className="border-4 p-3 md:py-8  border-gray-700 rounded-none lg:rounded-xl bg-black">
          <div className="flex justify-start lg:flex-row  flex-col bg-white border-2 lg:mx-12 rounded-xl">
            <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center py-8 p-3  lg:gap-0 lg:p-4">
              <div>
                <img
                  src={job.bannerImage}
                  className="w-36 h-36 md:w-56 md:h-52 p-1 border-2 rounded-xl object-cover mx-auto"
                  alt=""
                />
              </div>
              <div>
                <div className="flex md:justify-between md:items-center md:flex-row flex-col">
                  <div className="ml-5 mt-5 md:ml-10 lg:ml-5 md:mt-4">
                    <h1 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                      {job.title}
                    </h1>
                  </div>
                  <div>
                    <button className="btn lg:block hidden ml-10 px-16 bg-black text-white whitespace-nowrap">
                      Apply Now!!
                    </button>
                  </div>
                </div>
                <div className="flex ml-5 gap-2 lg:ml-5 md:ml-10 md:gap-5 md:mt-2 md:flex-row flex-col lg:gap-8 lg:mt-4">
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
                <div className="grid p-3 md:p-10 lg:p-3 md:py-5 md:mt-0 xl:grid-cols-3 lg:grid-cols-2 gap-3 mt-4">
                  {job.requirements.map((requirement) => (
                    <div className="text-center ">
                      <div className="bg-blue-400/30 mx-auto lg:text-sm lg:font-bold text-xl md:w-2/3 lg:w-full text-center p-1 px-3 rounded-xl">
                        {requirement}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" block lg:hidden  mx-auto mt-3">
                <button className="btn bg-black text-white ">
                  Apply Now!!
                </button>
              </div>
              {/* <div>
            <button className="btn ml-10 px-16">Apply Now!!</button>
        </div> */}
            </div>
          </div>
          <div className="md:p-10  md:grid-cols-2 lg:p-10 grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 lg:gap-16 bg-white lg:mx-12 p-3 py-10  gap-4  border-2 rounded-xl mt-5">
            <div className="flex-col bg-gray-400/20 pl-8 lg:pl-5 lg:flex lg:justify-center items-center lg:p-5 p-4 border-2 rounded-xl gap-3">
              <div className="flex gap-2 items-center">
                <FaCalendarAlt size={25} />
                <h2 className="text-xl font-bold">Date Posted</h2>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl ml-8">Feb 3, 2026</h2>
              </div>
            </div>
            <div className="flex-col pl-8 bg-gray-400/20 lg:pl-5 lg:flex lg:justify-center items-center p-4 border-2 rounded-xl gap-3">
              <div className="flex gap-2 items-center">
                <IoLocation size={30} />
                <h2 className="text-xl font-bold">Location</h2>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl ml-8 ">{job.location}</h2>
              </div>
            </div>
            <div className="flex-col bg-gray-400/20 pl-8  lg:flex lg:justify-center p-4 border-2 rounded-xl md gap-3">
              <div className="flex gap-2 items-center">
                <BsCashCoin size={25} />
                <h2 className="text-xl font-bold">Offered Salary</h2>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl -ml-1 w-full ">{job.salary}</h2>
              </div>
            </div>
            <div className="flex-col bg-gray-400/20 pl-8 lg:p-4 lg:flex lg:justify-center lg:items-center p-4 border-2 rounded-xl gap-3">
              <div className="flex gap-2 items-center">
                <FaCalendarAlt size={25} />
                <h2 className="text-xl font-bold">Expiration Date</h2>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl ml-8">Jun 6, 2026</h2>
              </div>
            </div>
            <div className="flex-col bg-gray-400/20 pl-8 lg:flex lg:justify-center lg:items-center p-4 border-2 rounded-xl gap-3">
              <div className="flex gap-2 items-center">
                <MdManageAccounts size={30} />
                <h2 className="text-xl font-bold">Experience</h2>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl ml-8">2 Years</h2>
              </div>
            </div>
            <div className="flex-col bg-gray-400/20 pl-8 lg:p-5 lg:flex lg:justify-center lg:items-center p-4 border-2 rounded-xl gap-3">
              <div className="flex gap-2 items-center">
                <PiGenderMaleBold size={25} />
                <h2 className="text-xl font-bold">Gender</h2>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl ml-8">Male</h2>
              </div>
            </div>
            <div className="flex-col bg-gray-400/20 pl-8 lg:p-0 lg:flex lg:justify-center lg:items-center border-2 rounded-xl gap-3">
              <div className="flex gap-2 items-center">
                <FaGears size={30} />
                <h2 className="text-xl font-bold">Qualifications</h2>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl ml-8">Certificate</h2>
              </div>
            </div>
            <div className="flex-col bg-gray-400/20 pl-8 p-4 border-2 rounded-xl gap-3">
              <div className="flex gap-2 items-center">
                <FaFileInvoiceDollar size={25} />
                <h2 className="text-xl font-bold whitespace-nowrap">
                  Career Level
                </h2>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-xl ml-8">Student</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-5 md:mb-2">
            <Link to={`/categories/${company.id}`} className="btn">
              Back to {company.name} jobs
            </Link>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DetailedSinglePage;
