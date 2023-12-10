import React from "react";
import Image from "next/image";
import data from "../../public/user.png";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import img from "../../public/imgpics.png";
const page = () => {
  return (
    <div className="h-screen w-[100%] bg-[#0C0414] p-2">
      <div>
        <h1 className="text-white text-3xl text-center py-4">
          Congratulations!!
        </h1>
        <div className="text-white flex justify-center items-center gap-3 mb-5">
          <p>Lorem ipsum dolor sit amet.</p>
          <button
            type="button"
            className="bg-gradient-to-r from-[#F68084] to-[#BF68AA] text-white p-2 rounded-lg"
          >
            connect your wallet
          </button>
        </div>

        <div>
          <button
            type="button"
            className="bg-gradient-to-r from-[#F68084] to-[#BF68AA] text-white p-2 rounded-lg mb-5"
          >
            Fund Function
          </button>
          <h1 className="text-white text-3xl text-start py-4">
            Project Details
          </h1>

          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            repellat aliquid optio! Delectus exercitationem maiores ratione,
            accusantium quas molestias porro ea in obcaecati aliquam illo
            perferendis doloribus placeat inventore sit!
          </p>
          <ul className="list-disc text-white p-8">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>

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
