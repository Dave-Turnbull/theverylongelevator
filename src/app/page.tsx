"use client";

import { useEffect, useState } from "react";
import { Movement } from "./components/movement";
import { motion } from "motion/react";

export default function Home() {
  const [height, setHeight] = useState(0);
  const [score, setScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(0);

  useEffect(() => {
    const iterator = setInterval(() => {
      setHeight((prev) => ++prev);
      setScore((prev) => ++prev);
    });
    return () => {
      clearInterval(iterator);
    };
  }, []);

  useEffect(() => {
    const savedScore = localStorage.getItem("highscore");
    if (savedScore) {
      setPreviousScore(JSON.parse(savedScore));
    }

    const saveScoreboard = () => {
      if (score > JSON.parse(localStorage.getItem("highscore") || "0")) {
        localStorage.setItem("highscore", JSON.stringify(score));
      }
    };

    window.addEventListener("beforeunload", saveScoreboard);

    return () => {
      window.removeEventListener("beforeunload", saveScoreboard);
      saveScoreboard();
    };
  }, [score]);

  return (
    <div className="flex flex-col min-w-dvw min-h-dvh justify-end items-center bg-blue-200 overflow-scroll">
      <div className="absolute top-4 right-4 p-4 bg-white rounded-lg shadow-lg opacity-90">
        <p className="font-bold text-lg">{score}</p>
      </div>
      <div className="absolute top-4 left-4 p-4 bg-white rounded-lg shadow-lg opacity-90">
        <p className="font-bold text-lg">{previousScore}</p>
      </div>
      <div className="flex flex-col  w-3/4 grow justify-end items-center bg-zinc-500 gap-0.5">
        <div style={{ height: height }}></div>
        <h1 className="font-extrabold text-2xl p-4 text-zinc-800">
          The Very Long Elevator.
        </h1>

        <div className="h-2 w-10 bg-zinc-800 border-2"></div>
        <div className="flex gap-[1px] border-4 border-b-0 border-zinc-800 p-0.5 pb-0">
          <Movement />
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            className="w-10 h-32 bg-zinc-800"
          ></motion.div>
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            className="w-10 h-32 bg-zinc-800"
          ></motion.div>
        </div>
      </div>
      <div className="w-full min-h-[30dvh] bg-zinc-800"></div>
    </div>
  );
}
