import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLoaderData, useParams } from 'react-router';
import Footer from '../Footer/Footer';
import SingleJob from '../../Pages/SingleJob';

const SpecificCompany = () => {
    const data = useLoaderData();
    // console.log(data);
    const {id} = useParams();
    // console.log(id);

    const filteredJob = data.filter(job=> job.id == id);
    console.log(filteredJob);
    // (filteredJob.jobs.map(singlejob=> {console.log(singlejob)}));
    return (
        <div className='bg-black/80'>
            <h1 className='text-4xl text-center text-white'>{filteredJob.name}</h1>
            <Navbar></Navbar>
            <div className='flex flex-col gap-10 mb-12 mt-12'>
                {
                    filteredJob[0].jobs.map(singleJob=> <SingleJob singleJob = {singleJob}></SingleJob>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SpecificCompany;