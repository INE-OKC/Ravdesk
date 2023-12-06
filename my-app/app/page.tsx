import Image from "next/image";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
export default function Home() {
  return (
    <div className="h-auto w-[100%] bg-black">
      {/* these is the nav bar */}
      <div className="xl:w-[70%] m-auto">
        <Nav />
        <div className="pt-5">
          <h1 className="text-white text-2xl text-center">
            Name of the Project
          </h1>
        </div>
        {/* these is the main content of the page */}
        <Main />
      </div>
    </div>
  );
}
