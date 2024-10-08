import React from "react";

export default function MagicButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  handleClick?: () => void;
  icon?: React.ReactNode;
  position: string;
  otherClasses?: string;
}) {
  return (
    // Button code
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none "
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16C5E1_0%,#043144_50%,#020819_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {title}
      </span>
    </button>
  );
}
