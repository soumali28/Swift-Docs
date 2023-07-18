import React from "react";
import logo from "../assets/logo.png";

const JpgToPdf = () => {
  return (
    <>
      <div>
        <div className="text-center text-red-800 text-4xl italic font-semibold my-4">
          Jpg To Pdf
        </div>
        <div className="text-center font-medium font-serif text-lg my-4 pb-10">
          Manage your Jpg images files better and convert to Pdf
        </div>
      </div>
      <form className="flex justify-center items-center space-x-6">
        {/*<div className="shrink-0 flex justify-center items-center "> */}
        {/* <img src={logo} alt="logo" className=" h-10 w-9 object-cover rounded-full my-8 "/> */}
        {/* </div> */}
        <label className="flex justify-center items-center">
          {/* <span className="sr-only text-5xl">Choose profile photo</span> */}
          <input
            type="file"
            className="block w-full text-2xl text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </label>
      </form>
      <p className="text-center mt-8">Drop jpg images here</p>
    </>
  );
};

export default JpgToPdf;
