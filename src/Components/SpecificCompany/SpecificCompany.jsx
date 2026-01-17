import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLoaderData, useParams } from 'react-router';
import Footer from '../Footer/Footer';
import SingleJob from '../../Pages/SingleJob';

const SpecificCompany = () => {
    const data = useLoaderData();
    // console.log(data);
    const {id} = useParams();
    console.log("Params id: ",id);

    const filteredJob = data.filter(job=> job.id == id);
    console.log(filteredJob);
    // (filteredJob.jobs.map(singlejob=> {console.log(singlejob)}));
    const company = data.filter(company=> company.id == id);
    console.log("This is company: ",company);
    return (
        <div className='bg-black/80'>
            <Navbar></Navbar>
            <h1 className='text-4xl text-center text-white mt-4'>{company[0].name}</h1>
            <div className='flex flex-col gap-10 mb-12 mt-12 lg:border-4 lg:p-4 lg:py-10 lg:mx-4 lg:rounded-xl lg:bg-black'>
                {
                    filteredJob[0].jobs.map(singleJob=> <SingleJob singleJob = {singleJob}></SingleJob>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SpecificCompany;