"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Google from "../../public/google.png";
import lock from "../../public/add.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const page = () => {
  // use session hook
  const router = useRouter();
  type Session = {
    // Define the structure of your session object here
    email?: string;
    image?: string;
    name?: string;
  };
  const [sessions, setSessions] = useState<Session | null>(null);
  const { data: session } = useSession();

  const handleSession = async () => {
    await signIn();
    if (session) {
      router.push("/dashboard");
    }
  };
  return (
    <div className="w-full h-screen bg-[#0C0414] flex justify-center flex-col items-center ">
      <div className="login p-5 from-[#4158D0] to-[#C850C0] rounded">
        <div>
          <Image src={Logo} alt="" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-white">JOIN YOUR HANDS WITH</p>
          <span className="text-[#E25B5B] text-3xl">RAVDESK</span>
        </div>
        <h1 className="text-white mt-6 mb-6">Login To Your Account</h1>
        <div className="flex justify-center items-center gap-7">
          <div className="group1 flex flex-col justify-center items-center gap-5">
            <div>
              <input
                type="text"
                className="px-7 py-3 bg-[#7A7A7A] rounded-full outline-0 ring-0 text-black placeholder:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="px-7 py-3 bg-[#7A7A7A] rounded-full outline-0 ring-0 text-black placeholder:text-sm placeholder:text-white"
                placeholder="Password"
              />
            </div>
            <div>
              <button className="flex justify-center items-center text-white gap-4 bg-gradient-to-r  from-[#4158D0] to-[#C850C0] px-7 py-4 rounded-full">
                Login To Your Account
              </button>
            </div>
            <div>
              <button className="flex justify-center items-center font-bold text-sm text-red-600 gap-4">
                Forgot password ?
              </button>
            </div>
          </div>
          <div className="group2 flex flex-col justify-center items-center gap-10">
            <div>
              <button
                type="button"
                className="flex justify-center cursor-pointer items-center text-white gap-2 gogleLogs text-sm p-2 rounded"
                onClick={handleSession}
              >
                <Image src={Google} alt="" width={30} />
                Sign in with Google
              </button>
            </div>
            <div>
              <button
                type="button"
                className="flex justify-center items-center text-white gap-2 gogleLogs text-sm p-2 rounded"
                onClick={() => {
                  console.log("Sign in with Google");
                }}
              >
                <Image src={lock} alt="" width={30} />
                Create a new Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
