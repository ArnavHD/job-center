import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState("")
    const {signIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            // alert(errorCode, errorMessage);
            setError(errorMessage);
          });
    }

    return (
      <div className="flex justify-center items-center absolute inset-0">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold mb-6">
              Please, Login to Continue
            </h1>
            <form onSubmit={handleLogin} className="fieldset">
                {/* Email */}
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" required />
              {/* Password */}
              <label className="label">Password</label>
              <input name='password' type="password" className="input" placeholder="Password" required/>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className='text-red-500 text-xs'>{error}</p>}
              <div className="flex w-full flex-col">
                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                <div className="divider">OR</div>
                <button className="btn bg-white mb-2 text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
                  <svg
                    aria-label="LinkedIn logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="white"
                      d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  Login with LinkedIn
                </button>
              </div>

              <p className="mt-3 text-center">
                Don't have an Account?{" "}
                <Link
                  to={"/auth/register"}
                  className="text-red-500 hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;