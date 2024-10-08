import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3Dcontainer";
import Link from "next/link";

export default function RecentProjects() {
  return (
    <div className="text-white py-20" id="projects">
      <h1 className="font-bold text-5xl text-center">
        A small selection of {""}
        <span className="text-blue-200">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex justify-center sm:w-96 w-[80vw]"
          >
            {/* {title} */}
            {/* <PinContainer title={link} href={link}> */}
            <Link
              href={link}
              title={link}
              className="hover:bg-blue-200 rounded-lg p-3 border border-blue-100"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-blue-200">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-blue-300 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
            </Link>

            {/* </PinContainer> */}
          </div>
        ))}
      </div>
    </div>
  );
}
