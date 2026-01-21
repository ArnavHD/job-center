import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
      <div className="flex justify-center items-center absolute inset-0">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold mt-4 mb-8">
              Please, Login to Continue
            </h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="mt-3 text-center">
                Don't have an Account?{" "}
                <Link to={"/auth/register"} className="text-red-500 hover:underline">Register</Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    );
};

export default Login;