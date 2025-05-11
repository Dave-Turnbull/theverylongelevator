"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Person from "./person";

export const Movement = () => {
  const [moveAlongX, setMoveAlongX] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleKeyPress = useCallback(
    (event: { key: string }) => {
      if (isMoving) return;

      let newX = moveAlongX;

      if (event.key === "ArrowLeft") {
        newX -= 5;
      } else if (event.key === "ArrowRight") {
        newX += 5;
      }

      setIsMoving(true);
      setMoveAlongX(newX);

      // This is needed to unmount the IsMoving so the user can press again, better way to do this??
      setTimeout(() => {
        setIsMoving(false);
      }, 1);
    },
    [isMoving, moveAlongX]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <motion.div
      className="z-10"
      style={{
        position: "fixed",
        zIndex: 1000,
        pointerEvents: "none",
        bottom: "30%",
        left: "49%",
        transform: "translateX(-50%) translateY(-50%)",
      }}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 12,
        mass: 1.2,
      }}
    >
      <Person x={moveAlongX} />
    </motion.div>
  );
};
