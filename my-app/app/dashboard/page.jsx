"use client";
import React from "react";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import user from "../../public/user.png";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";
function page() {
  return (
    <div className="h-auto w-[100%] bg-[rgb(12,4,20)] p-3">
      <div className="w-full flex justify-between flex-row items-center text-white mb-7">
        <h1 className="text-3xl">PROJECTS</h1>
        <div>
          <div className="flex justify-center items-center gap-3">
            <div className="flex border-2 border-white p-2 rounded-full">
              <input
                type="text"
                placeholder="Search"
                className="border-none bg-transparent outline-none placeholder:italic placeholder:text-slate-400"
              />
              <CiSearch size={24} />
            </div>
            <div className="flex justify-center items-center">
              <IoNotificationsCircleOutline size={34} />
              <sup className="text-red-600 text-xl">0</sup>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={user} size={20} />
              {/* <p>User</p> */}
            </div>
          </div>
        </div>
      </div>
      {/* second layer */}
      <div className="text-black grid grid-cols-2 gap-5">
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#5698FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#A881FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#A881FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#A881FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#A881FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#A881FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#A881FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#5698FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#5698FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
        <div className="bg-[#CBE2FF] rounded-lg">
          <div className="p-3">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam vel quam aliquid? Officiis incidunt minima pariatur, a
              voluptates et ex?
            </p>
          </div>
          <div className="bg-[#5698FC] flex justify-between items-center p-3">
            <FaUsers size={30} />
            <p className="font-bold">Invest</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
