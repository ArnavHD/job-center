import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = use(AuthContext);

    const handleRegister = (e)=>{
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(name, email, password, url);
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            // console.log(user);
            setUser(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage, errorCode);
          });
    }
    return (
      <div className="flex justify-center items-center absolute inset-0">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-2xl text-center font-bold  mb-6">
              Please, Register to Continue
            </h1>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input name='name' type="text" className="input" placeholder="Name" required/>
              <label className="label">Your Photo URL</label>
              <input name='url' type="text" className="input" placeholder="Photo URL" required/>
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" required/>
              <label className="label">Password</label>
              <input name='password' type="password" className="input" placeholder="Password" required/>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type='submit' className="btn btn-neutral mt-4">Register</button>
              <p className="mt-3 text-center">
                Already have an Account?{" "}
                <Link
                  to={"/auth/login"}
                  className="text-red-500 hover:underline"
                >
                  Log In
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Register;