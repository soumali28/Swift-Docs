import React from "react";
import logo from "../assets/logo.png";

const JpgToPdf = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="text-center text-red-800 text-4xl italic font-semibold my-4">
          Jpg To Pdf
        </div>
        <div className="text-center font-medium font-serif text-lg my-4 pb-10">
          Manage your JPG Images Files better and convert to Pdf
        </div>

        <form class="space-x-6">
          {/* <div class="shrink-0">
            <img
              class="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
          </div> */}
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input
              type="file"
              class="block w-full text-lg text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-lg file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
            />
          </label>
        </form>
        <p className="text-center mt-8">Drop jpg images here</p>
      </div>
    </div>
  );
};

export default JpgToPdf;
