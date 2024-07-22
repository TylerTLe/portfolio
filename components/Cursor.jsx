"use client";

import { useEffect } from "react";

const CursorLight = () => {
  useEffect(() => {
    const moveLight = (e) => {
      const light = document.getElementById("cursor-light");
      light.style.left = `${e.clientX}px`;
      light.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveLight);

    return () => {
      window.removeEventListener("mousemove", moveLight);
    };
  }, []);

  return (
    <div
      id="cursor-light"
      className="fixed blur-3xl pointer-events-none z-50 w-[1000px] h-[1000px] rounded-full bg-[#0a0829] dark:bg-[#7c91d6] transform -translate-x-1/2 -translate-y-1/2 bg-opacity-10 dark:bg-opacity-10"
    ></div>
  );
};

export default CursorLight;
