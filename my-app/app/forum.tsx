import Image from "next/image";
import Nav from "@/components/Nav";
import Forum from "@/components/Forum";

import React from "react";

const forum = () => {
  return (
    <div className="h-100 w-full bg-black p-10">
      {/* these is the nav bar */}
      <Nav />
      <div className="pt-20">
        <h1 className="text-white text-3xl text-center">Congratulations!!</h1>
      </div>

      {/* this is the main content of the page */}
      <Forum />
    </div>
  );
};

export default forum;
