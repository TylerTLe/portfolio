"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 left-5 animate-bounce bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-black dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.25] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
