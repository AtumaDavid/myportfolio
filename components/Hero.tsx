"use client";
import React, { useState, useEffect } from "react";
import { LampContainer } from "./ui/Lamp";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

export default function Hero() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Set a timeout to mark the animation as complete after a certain duration
    const animationDuration = 1300; // duration of all animations in ms (0.3 + 1)
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, animationDuration);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div>
        <LampContainer className="">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            className="mt-8 bg-clip-text text-center font-medium tracking-tight text-transparent"
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
            {isAnimationComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <a href="#about">
                  <MagicButton title="Show My Work" position={""} />
                </a>
              </motion.div>
            )}
          </motion.h1>
        </LampContainer>
      </div>
    </div>
  );
}
