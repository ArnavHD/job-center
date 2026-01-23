import React, { use } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import backwall from "../assets/profile_wall.png"
import { AuthContext } from '../Provider/AuthProvider';
import Loading from './Loading';

const Profile = () => {
    const {user, loading} = use(AuthContext);


    if(loading){
        return <Loading></Loading>
    }
    return (
      <div className="h-screen overflow-hidden">
        <Navbar></Navbar>
        <div className="h-screen bg-black/30 ">
          <div className="h-full pt-12 mx-3  lg:pt-8 lg:mx-15 ">
            <div
              style={{ backgroundImage: `url(${backwall})` }}
              className="h-30 lg:h-56 relative rounded-t-xl bg-cover"
            ></div>
            <div className="bg-white/80 pt-8 px-12 pb-10 rounded-b-xl">
              <div className="bg-white absolute top-42 left-10 lg:top-52 lg:left-32 p-2 lg:p-5 rounded-full">
                <img
                  className="w-24 h-24 lg:w-56 lg:h-56 rounded-full  object-cover  "
                  src={user.photoURL}
                  alt="profile"
                />
              </div>
              <div className="mt-16 lg:mt-32 lg:ml-8">
                <h1 className="text-4xl font-bold">{user.displayName}</h1>
                <h2 className="text-xl">{user.email}</h2>
                <h3>
                  <span className="text-xl">Last active:</span>{" "}
                  {user.metadata.lastSignInTime}
                </h3>
                <h3 className="flex flex-col">
                  <span className="text-xs">Your account was created on:</span>
                  <span className='text-xs'>{user.metadata.creationTime}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;