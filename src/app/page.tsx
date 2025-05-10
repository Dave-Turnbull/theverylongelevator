"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const iterator = setInterval(() => {
      setHeight((prev) => ++prev);
    });
    return () => {
      clearInterval(iterator);
    };
  }, []);

  return (
    <div className="flex flex-col min-w-dvw min-h-dvh justify-end items-center bg-blue-200 overflow-scroll">
      <div className="flex flex-col  w-3/4 grow justify-end items-center bg-zinc-500 gap-0.5">
        <div style={{ height: height }}></div>
        <h1 className="font-extrabold text-2xl p-4 text-zinc-800">
          The Very Long Elevator.
        </h1>
        <div className="h-2 w-10 bg-zinc-800 border-2"></div>
        <div className="flex gap-[1px] border-4 border-b-0 border-zinc-800 p-0.5 pb-0">
          <div className="w-10 h-32 bg-zinc-800"></div>
          <div className="w-10 h-32 bg-zinc-800"></div>
        </div>
      </div>
      <div className="w-full min-h-[30dvh] bg-zinc-800"></div>
    </div>
  );
}
