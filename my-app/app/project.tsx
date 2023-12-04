import Image from "next/image";
import Nav from "@/components/Nav";
import Main from "@/components/Project";
export default function Project() {
  return (
    <div className="h-100 w-full bg-black p-10">
      {/* these is the nav bar */}
      <Nav />
      <div className="pt-20">
        <h1 className="text-white text-3xl text-center">Congratulations!!</h1>
      </div>

      {/* this is the main content of the page */}
      <Project />
    </div>
  );
}
