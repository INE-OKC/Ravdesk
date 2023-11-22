import React from "react";

const Nav = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center items-center">
      <div className="h-[56px] w-[56px] bg-[#246CFA] rounded-full"></div>
      <div className="text-white flex justify-center gap-10">
        <li className="list-none">Home</li>
        <li className="list-none">Project</li>
        <li className="list-none">About</li>
      </div>
      <div className="w-[216px] h-[59px] bg-[#5B0D9E] rounded-t-3xl rounded-b-3xl"></div>
    </div>
  );
};

export default Nav;
