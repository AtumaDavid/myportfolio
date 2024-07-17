import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-blue-300 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10  border border-red-600">
      <div className="max-w-7xl w-full border-red-600 border">
        <Hero />
      </div>
    </main>
  );
}
