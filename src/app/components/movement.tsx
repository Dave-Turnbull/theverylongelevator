"use client";

import { useCallback, useEffect, useState } from "react";
import Person from "./person";

export default function Movement() {
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

  return <Person x={moveAlongX} />;
}
