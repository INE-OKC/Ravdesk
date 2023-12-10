import React from "react";
import Image from "next/image";
import data from "../../public/user.png";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import img from "../../public/imgpics.png";
import arrow from "../../public/arrow.png";
import thanks from "../../public/thanks.png";
import rights from "../../public/rights.png";
const page = () => {
  return (
    <div className="h-screen w-[100%] bg-[#0C0414] p-2">
      <div>
        <h1 className="text-white text-3xl text-center py-4">
          Congratulations!!
        </h1>

        <div className="bg-[#553872] text-white h-[500px] p-5">
          <Image src={arrow} className="w-[10%] mb-10" />

          <h1 className="text-2xl">Fund Ether</h1>
          <div className="grid grid-cols-2 gap-2 mb-7">
            <input
              type="text"
              name=""
              id=" "
              placeholder="Enter the amount"
              className="bg-[#8CB8FB] p-2 rounded-full outline-none text-black"
            />
            <button
              type="button"
              className="bg-[#4ABC96] text-white rounded-lg"
            >
              Transfer
            </button>
          </div>
          <h1>Fund with Token</h1>
          <div className="grid grid-cols-3 gap-2">
            <select
              name=""
              id=""
              className="bg-[#8CB8FB] p-3 rounded outline-none text-black"
            >
              <option value="">select token</option>
            </select>
            <input
              type="text"
              className="bg-[#8CB8FB] p-2 rounded outline-none text-black"
            />
            <button
              type="button"
              className="bg-[#4ABC96] text-white rounded-lg"
            >
              Transfer
            </button>
          </div>

          <div className="flex justify-center items-end relative">
            <p className="text-2xl mt-10">Thank You!!</p>
            <Image
              src={thanks}
              className="w-[20%] absolute -bottom-20 left-40"
            />
            <Image
              src={rights}
              className="w-[15%] absolute -bottom-40 -right-2"
            />
          </div>
        </div>

        <div>
          <h1 className="text-white text-3xl">Project Founders</h1>
          <div className="grid grid-cols-3 justify-items-center place-items-center mt-5">
            <div className="flex flex-col justify-center items-center gap-5">
              <Image src={data} />
              <div className="flex justify-between items-center gap-5">
                <IoLogoLinkedin size={24} className="text-white" />
                <IoLogoTwitter size={24} className="text-white" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <Image src={data} />
              <div className="flex justify-between items-center gap-5">
                <IoLogoLinkedin size={24} className="text-white" />
                <IoLogoTwitter size={24} className="text-white" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <Image src={data} />
              <div className="flex justify-between items-center gap-5">
                <IoLogoLinkedin size={24} className="text-white" />
                <IoLogoTwitter size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-white text-3xl mt-10">About the team</h1>
          <div className="flex justify-center items-center gap-5">
            <Image src={img} className="w-[40%]" />
            <p className="text-l text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est
              dolor doloremque, aliquid odio deleniti.
            </p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-[#4158D0] to-[#FFCC70] p-3 rounded-full"
            >
              Join the Community Forum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
