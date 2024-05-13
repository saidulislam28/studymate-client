import { Link, NavLink } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import "./cssFiles/navbar.css";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navLinks = (
    <>
      <li className="mr-2 font-bold">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? " #a881af" : "",
          })}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-2 font-bold">
        <NavLink
          to="/assignments"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "" : "",
          })}
        >
          Assignments
        </NavLink>
      </li>
      <li className="mr-2 font-bold">
        <NavLink
          to="/create"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "" : "",
          })}
        >
          Create Assignments
        </NavLink>
      </li>
      {
        user ? <li className="mr-2 font-bold">
        <NavLink
          to="/pending"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "" : "",
          })}
        >
          Pending Assignments
        </NavLink>
      </li> : ""
      }
     
    </>
  );
  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-base-100  container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="animate__animated  animate__headShake">
          <span className="text-lg md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-slate-700 via-blue-slate to-slate-200 text-transparent bg-clip-text animate-gradient bg-300%">
            StudyMate
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <details className="dropdown">
              <summary className=" btn btn-ghost   btn-circle rounded-full mt-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              
            >
              <div className="rounded-full">
                <img alt={user.displayName} src={user.photoURL} />
              </div>
            </div></summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
                <li className="font-semibold">
                  <Link to="attempted">
                  <p className="text-start">
                    My attempted
                  
                  </p>

                  </Link>
                </li>
                <div className="divider"></div>
                <li>
                 <button
                 onClick={handleLogOut} className="font-semibold">Log Out</button>
                </li>
              </ul>
            </details>


            {/* <div className="relative overflow-hidden  rounded-xl">
              <button
                onClick={handleLogOut}
                className="btn overflow-hidden relative  bg-[#98daf0] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#f3b200] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300"
              >
                <span className="relative">Log Out</span>
              </button>
            </div> */}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/register">
              <p className="btn bg-[#80669d] text-white">Register</p>
            </Link>

            <Link to="/login">
              <p className="btn text-white  bg-[#dd7973]">Login</p>
            </Link>
          </div>
        )}
        <label className="swap swap-rotate">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="theme-controller"
          />

          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
