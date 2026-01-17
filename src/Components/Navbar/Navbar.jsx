import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
      <div className="navbar bg-black border-none flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Register</a>
              </li>
              <li>
                <a>Log Out</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold border-dashed border-2 border-white text-white ">
            Next_Step
          </a>
        </div>
        {/* middle */}
        <div className=" flex justify-center items-center gap-6">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink className={"text-white text-xl"} to={"/"}>Home</NavLink>
              </li>
              <li>
                <a href="" className="text-white text-xl">
                  All Jobs
                </a>
              </li>
              <li>
                <a className="text-white text-xl">Blogs</a>
              </li>
            </ul>
            <div className=" flex gap-5">
              <div className="">
                <a className="btn">Login</a>
              </div>
              <div className="">
                <a className="btn">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;