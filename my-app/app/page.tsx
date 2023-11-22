import Image from "next/image";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
export default function Home() {
  return (
    <div className="h-screen w-full bg-black p-10">
      {/* these is the nav bar */}
      <Nav />
      <div className="pt-20">
        <h1 className="text-white text-3xl text-center">Name of the Project</h1>
      </div>

      {/* these is the main content of the page */}
      <Main />
    </div>
  );
}
