import React from "react";
import logo from "../assets/logo.png";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = (props) => {
  return (
    <div
      className={"flex justify-between items-center py-3 px-12 shadow-md"}
    >
      <div className="w-20, h-14">
        <img src={logo} alt="logo" className="w-full h-full rounded-full" />
      </div>
      <div>
        <ul className="flex justify-between font-bold">
          <li className="mx-3">
            <a href="/">Home </a>
          </li>
          <li className="mx-3">
            <a href="/">Merge PDF </a>
          </li>
          <li className="mx-3 dropdown">
            <a href="#" className="">
              {" "}
              Compress
            </a>
            <ul
              className={`p-2 shadow menu dropdown-content z-[1] rounded-box w-28`}
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </li>
          <li className="mx-3">
            <a href="/"> Convert</a>
          </li>
          {/* <details className="dropdown mb-32">
            <summary className="m-1 btn">Compress</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
          <details className="dropdown mb-32">
            <summary className="m-1 btn">Convert</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details> */}
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <label className="swap swap-rotate mx-4">
          <input onClick={props.toggleTheme} type="checkbox" />
          {/* sun icon */}
          <FiSun className="swap-on swap-rotate w-10 h-10 text-amber-600" />

          {/* moon icon */}
          <FiMoon className="swap-off swap-rotate w-10 h-10 text-slate-600" />
        </label>
        <button className="btn btn-outline btn-accent mx-3">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
