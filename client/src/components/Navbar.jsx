import React from "react";
import logo from "../assets/logo.png";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = (props) => {
  return (
    <div className={"flex justify-between items-center py-3 px-12 shadow-md"}>
      <div className="w-20, h-14">
        <img src={logo} alt="logo" className="w-full h-full rounded-full" />
      </div>
      <div>
        <ul className="flex justify-between font-bold">
          <li className="mx-3">
            <a href="/">Home </a>
          </li>
          <li className="mx-3">
            <a href="/pdf/merge">Merge PDF </a>
          </li>
          <li className="mx-3">
            <a href="/pdf/compress"> Compress PDF</a>
          </li>
          <li className="mx-3 dropdown">
            <a href="#" className="">
              {" "}
              Convert
            </a>
            <ul
              className={`p-2 shadow menu dropdown-content z-[1] rounded-box w-48`}
            >
              <li>
                <a href="/pdf_to_word">PDF to Word</a>
              </li>
              <li>
                <a href="/pdf_to_ppt">PDF to PPT</a>
              </li>
              <li>
                <a href="word_to_pdf">Word to PDF</a>
              </li>
              <li>
                <a href="ppt_to_pdf">PPT to PDF</a>
              </li>
            </ul>
          </li>
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
        <a href="/register">
          <button className="btn btn-outline btn-accent mx-3">Sign up</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
