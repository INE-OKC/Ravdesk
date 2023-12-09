import React from "react";
import Image from "next/image";
import play from "../public/play.png";
const Main = () => {
  return (
    <div className="p-5 ">
      <div className="firstsection w-[100%] grid grid-cols-1 justify-items-center place-items-center gap-3 mb-5 md:grid-cols-2">
        <div className="bg-[#D7D2DB] w-[100%] flex justify-center items-center p-16">
          <Image src={play} alt="" width={80} height={80} />
        </div>
        <div className="text-white w-full flex flex-col justify-start items-start gap-5">
          <h1 className="text-2xl">Video of the Project</h1>
          <p className="text-xl">description</p>
          <span className="text-l">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            impedit!
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center bg-[#246CFA] w-[80%] mr-auto p-5 rounded-full">
        <p className="text-white">Live Link of the Project</p>
      </div>
      <div className="text-white flex justify-start items-center gap-5 mt-10 md:gap-20">
        <div className="flex justify-center items-center gap-3 bg-[#D4FC79] text-black px-10 py-4 font-bold text-l rounded-full">
          <p>100$</p>
          <p>|</p>
          <p>50%</p>
        </div>
        <div>-</div>
        <div className="text-xl">June, 2023</div>
      </div>
      <p className="text-white p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad nisi
        minus omnis debitis vero, porro suscipit iste fugit error?
      </p>
      <div>
        <p className="bg-[#246CFA] p-5 text-white w-[40%] mr-auto flex justify-center rounded-full items-center lg:w-[15%]">
          FAQS
        </p>

        <div className="text-white grid grid-cols-1 justify-items-center gap-4 mt-5 md:grid-cols-2">
          <div className="bg-[#A2CBF0] rounded p-5 py-8">
            <h1 className="text-[#000C7B]">What is Duis aute irure ?</h1>
            <span className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              quae.
            </span>
            <p className="flex justify-end items-end pt-3 text-[#000C7B]">
              Read more
            </p>
          </div>
          <div className="bg-[#A2CBF0] rounded p-5 py-8">
            <h1 className="text-[#000C7B]">What is Duis aute irure ?</h1>
            <span className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              quae.
            </span>
            <p className="flex justify-end items-end pt-3 text-[#000C7B]">
              Read more
            </p>
          </div>
          <div className="bg-[#A2CBF0] rounded p-5 py-8">
            <h1 className="text-[#000C7B]">What is Duis aute irure ?</h1>
            <span className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              quae.
            </span>
            <p className="flex justify-end items-end pt-3 text-[#000C7B]">
              Read more
            </p>
          </div>
          <div className="bg-[#A2CBF0] rounded p-5 py-8">
            <h1 className="text-[#000C7B]">What is Duis aute irure ?</h1>
            <span className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              quae.
            </span>
            <p className="flex justify-end items-end pt-3 text-[#000C7B]">
              Read more
            </p>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col justify-center items-center gap-4 mt-5 lg:flex-row lg:gap-5 lg:mt-5">
        <p>Are you excited on the project ?</p>
        <button
          type="button"
          className="bg-gradient-to-r  from-[#4158D0] to-[#C850C0] px-7 py-4 rounded-full"
        >
          Fund the project
        </button>
      </div>
    </div>
  );
};

export default Main;
