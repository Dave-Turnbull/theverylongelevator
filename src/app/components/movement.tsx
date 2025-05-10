"use client";

import { useCallback, useEffect, useState } from "react";
import Person from "./person";

export default function Movement() {
  const [moveAlongX, setMoveAlongX] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleKeyPress = useCallback(
    (event: { key: string }) => {
      if (isMoving) return;

      const newX = moveAlongX + (event.key === "ArrowLeft" ? -5 : 5);
      setIsMoving(true);
      setMoveAlongX(newX);
    },
    [moveAlongX, isMoving]
  );

  useEffect(() => {
    setIsMoving(false);
  }, [moveAlongX]);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return <Person x={moveAlongX} />;
}
