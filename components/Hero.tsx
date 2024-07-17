"use client";
import React from "react";
import { LampContainer, LampDemo } from "./ui/Lamp";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypewriterEffect } from "./ui/TypeWriterEffect";
import ShimmerButton from "./ui/MagicButton";
import MagicButton from "./ui/MagicButton";

export default function Hero() {
  //   const words = [
  //     { text: "Hi", className: "text-blue-500" },
  //     { text: "I", className: "text-red-500" },
  //     { text: "am", className: "text-green-500" },
  //     { text: "David,", className: "text-yellow-500" },
  //     { text: "A", className: "text-purple-500" },
  //     { text: "Software", className: "text-purple-500" },
  //     { text: "Developer", className: "text-purple-500" },
  //   ];

  return (
    <div className="">
      <div>
        <LampContainer className="">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8  bg-clip-text text-center font-medium tracking-tight text-transparent"
          >
            <div className="">
              <TextGenerateEffect
                className="text-center w-[75%] mx-auto flex justify-center"
                words="Building tomorrow's Experiences Today"
              />
            </div>
            <p className="text-white text-center my-5">
              Hi, I am David, A software developer
            </p>
            {/* <TypewriterEffect
              className=""
              words={words}
              cursorClassName="red"
            /> */}
            <a href="#about">
              <MagicButton title="Show My Work" />
            </a>
          </motion.h1>
        </LampContainer>
      </div>
    </div>
  );
}
