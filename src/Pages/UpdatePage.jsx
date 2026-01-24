import React, { use } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const UpdatePage = () => {

    const { updateUserProfile  } = use(AuthContext);
    const navigate = useNavigate();

    

    const handleUpdate = (e)=>{
        e.preventDefault();
        const userName = e.target.name.value;
        const photo = e.target.photoURL.value;
        // console.log(userName, photo);

        

        updateUserProfile(userName, photo)
        .then(()=>{
            console.log("Successful");
            navigate("/profile");
        })
        .catch((error)=>{
            console.log(error.message);
        })

    }

    return (
      <div>
        <Navbar></Navbar>
        <div className="flex min-h-screen justify-center items-center">
          <div className="card   bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='text-3xl font-semibold text-center mb-5'>Update Your Profile</h2>
              <form onSubmit={handleUpdate} className="fieldset">
                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Your Name" />
                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  name='photoURL'
                  className="input"
                  placeholder="Your PhotoURL"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type='submit' className="btn btn-neutral mt-4">Save Updates</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdatePage;