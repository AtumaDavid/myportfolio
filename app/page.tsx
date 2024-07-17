import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-blue-300 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10  border border-red-600 ">
      <div className="max-w-7xl w-full border-red-600 border">
        <FloatingNav
          className=""
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
