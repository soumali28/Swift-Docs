import React from "react";

import { tools } from "../toolsData";
const Home = (props) => {
  console.log(props);
  return (
    <div className="p-12 flex items-center">
      {/* map the containers */}
      {tools.map((item) => (
        <div className="p-3 m-4 inline-block shadow-xl rounded-xl w-56 h-56">
          <a href={item.link}>
            {item.icon &&
              React.cloneElement(item.icon, {
                fill: item.fill,
                className: "w-16 h-16 mb-3 mt-4",
              })}
            <h3 className="text-xl font-semibold my-2">{item.titile}</h3>
            <span
              className={`${
                props.theme === "retro" ? "text-gray-600" : "text-slate-400"
              } text-sm`}
            >
              {item.desp}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
