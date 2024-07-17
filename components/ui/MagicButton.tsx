import React from "react";

export default function MagicButton({
  title,
  handleClick,
  otherClasses,
}: {
  title: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return (
    // Button code
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16C5E1_0%,#043144_50%,#020819_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full from-blue-300 to-blue-100 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {title}
      </span>
    </button>
  );
}
