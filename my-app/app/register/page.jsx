import React from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
const page = () => {
  return (
    <div className="h-screen w-[100%] bg-[#0C0414] flex justify-center items-start flex-col">
      <Image src={logo} sizes={10} className="w-[30%]" />
      <div>
        <h1 className="text-white text-center text-l md:text-2xl mt-10">
          REGISTER YOURSELF BEFORE JOINING US <br className="lg:none" /> IN THIS
          JOURNEY
        </h1>

        <form action="" className="p-2 grid grid-cols-1 gap-5 mt-10">
          <div className="formgroup grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 md:p-3 rounded bg-[#7A7A7A]"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              className="p-2  md:p-3 rounded bg-[#7A7A7A]"
            />
          </div>
          <div className="formgroup grid grid-cols-3 gap-2">
            <input
              type="text"
              placeholder="+1"
              className="p-2 md:p-3 rounded bg-[#7A7A7A]"
            />
            <input
              type=""
              name=""
              value=""
              placeholder="Phone Number"
              className="p-2 md:p-3 rounded bg-[#7A7A7A]"
            />
            <input
              type="text"
              placeholder="Gender"
              className="p-2 md:p-3 rounded bg-[#7A7A7A]"
            />
          </div>
          <div className="formgroup grid grid-cols-1">
            <input
              type="text"
              placeholder="Address"
              className="bg-[#7A7A7A] p-2 md:p-3 rounded"
            />
          </div>
          <div className="formgroup grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Country"
              className="bg-[#7A7A7A] p-2 md:p-3 rounded"
            />
            <input
              type="text"
              name=""
              id=" "
              placeholder="Zip Code"
              className="bg-[#7A7A7A] p-2 md:p-3 rounded"
            />
          </div>
          <div className="formgroup grid grid-cols-1 gap-5">
            <input
              type="text"
              placeholder="Email"
              className="bg-[#7A7A7A] p-2  md:p-3rounded"
            />
            <input
              type="text"
              placeholder="Password"
              className="bg-[#7A7A7A] p-2 md:p-3 rounded"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="bg-[#7A7A7A] p-2 md:p-3 rounded"
            />
          </div>
          <div className="formgroup text-[#888888] flex justify-center items-center gap-5 md:text-xl ">
            <input type="checkbox" className="border-2 border-bg-[#9F52A9]" />
            <label htmlFor="select">
              I agree to all the terms & conditions
            </label>
          </div>
          <div className="formgroup flex justify-center items-center">
            <button className="bg-gradient-to-r from-[#C358D1] to-[#ED6D88] text-white px-10 py-3 font-bold rounded-lg md:text-xl">
              Create My Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
