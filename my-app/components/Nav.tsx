import React from "react";
import Logo from "../public/second.png";
import Image from "next/image";
const Nav = () => {
  return (
    <div className="flex justify-between items-center gap-8 p-3">
      <div className="">
        <Image src={Logo} alt="" width={100} height={100} />
      </div>
      <div className="text-white flex justify-center items-center gap-5">
        <li className="list-none">Home</li>
        <li className="list-none">Project</li>
        <li className="list-none">About</li>
        <div className=" px-20 py-6 bg-[#5B0D9E] rounded-t-3xl rounded-b-3xl"></div>
      </div>
    </div>
  );
};

export default Nav;
