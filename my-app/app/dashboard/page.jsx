"use client";
import React from "react";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import user from "../../public/user.png";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import Google from "../../public/google.png";
function page() {
  const { data: session } = useSession();
  // enabling signIn with google
  const [providers, setProvider] = useState(null);
  useEffect(() => {
    // create a function to call the getProvider from next-auth
    const setProviders = async () => {
      const response = await getProviders();
      setProvider(response);
    };

    // call the setProviders
    setProviders();
  }, []);
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
            {session?.user ? (
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={session?.user.image}
                  height={70}
                  width={70}
                  className="rounded-full"
                />
                <p>{session?.user.email}</p>
              </div>
            ) : (
              // <div className="flex flex-col justify-center items-center">
              //   <Image src={user} size={20} />
              //   {/* <p>User</p> */}
              // </div>
              ""
            )}
            <div>
              {session?.user ? (
                <button
                  type="button"
                  className="border-2 border-red-500 py-1 px-10 rounded-full bg-red-500 text-white cursor-pointer"
                  onClick={signOut}
                >
                  Logout
                </button>
              ) : (
                providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="border-2 border-bg-black text-white rounded-full py-2 px-9 flex justify-center items-center gap-2"
                  >
                    <Image src={Google} alt="" width={20} />
                    Sign in
                  </button>
                ))
              )}
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
