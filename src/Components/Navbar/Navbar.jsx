import React, { use } from "react";
import { Link, NavLink, useNavigate,  } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  

  const handleLogOut = () => {
    console.log("User trying to logout");
    logOut()
      .then(() => {
        navigate("/");
        console.log("Logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-black border-none flex justify-between">
      {/* <div className="text-white">{user && user.email}</div> */}
      
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
              <NavLink to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <a>All Jobs</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            {user ? (
              <div className="flex justify-between items-center mt-4">
                <Link to={"/profile"}>
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={user.photoURL}
                    alt=""
                  />
                </Link>
                <div>
                  <button onClick={handleLogOut} className="btn">
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className=" flex gap-5">
                <div className="">
                  <NavLink to={"/auth/login"} className="btn">
                    Login
                  </NavLink>
                </div>
                <div className="">
                  <NavLink to={"/auth/register"} className="btn">
                    Register
                  </NavLink>
                </div>
              </div>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-2xl font-bold border-dashed border-2 border-white text-white ">
          Next_Step
        </a>
      </div>
      {/* middle */}
      <div className=" flex justify-center items-center gap-6">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={"text-white text-xl"} to={"/"}>
                Home
              </NavLink>
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
          {user ? (
            <div className="flex justify-center items-center gap-3">
              <div>
                {user ? (
                  <Link to={"/profile"}>
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={user.photoURL}
                      alt=""
                    />
                  </Link>
                ) : (
                  <FaRegUserCircle size={35} color="white" />
                )}
              </div>
              <div>
                <button onClick={handleLogOut} className="btn">
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className=" flex gap-5">
              <div className="">
                <NavLink to={"/auth/login"} className="btn">
                  Login
                </NavLink>
              </div>
              <div className="">
                <NavLink to={"/auth/register"} className="btn">
                  Register
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
