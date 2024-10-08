"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { motion } from "framer-motion";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  image,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  image?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("atumadavid35@gmail.com");

    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
    >
      {/* images */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* main image */}
        <div className="w-full h-full absolute">
          {image && (
            <img
              src={image}
              alt={image}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        {/* secondary image */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              // width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}
        {/* ...*/}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {/* ... */}
          {id === 2 && <GlobeDemo />}
          {/* ... */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "Typescript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-[#C1C2D3]"
                  >
                    {item}
                  </span>
                ))}

                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Express", "Solidity", "AWS"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-[#C1C2D3]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ... */}
          {id === 6 && (
            <div className="mt-10 relative flex justify-center">
              <motion.div
                className="absolute -bottom-5 flex justify-center w-full"
                animate={{ scale: copied ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <MagicButton
                  title={copied ? "Email copied" : "copy my Email"}
                  icon={<IoCopyOutline />}
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                  position={""}
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
