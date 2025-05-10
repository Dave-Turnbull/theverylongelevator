"use client";

import { useCallback, useEffect, useState } from "react";
import Person from "./person";

export default function Movement() {
  const [moveAlongX, setMoveAlongX] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleKeyPress = useCallback(
    (event: { key: string }) => {
      if (isMoving) return;

      console.log("This key was pressed: ", event.key);
      const newX =
        moveAlongX +
        (event.key === "ArrowLeft" ? -5 : event.key === "ArrowRight" ? 5 : 0);
      setIsMoving(true);
      setMoveAlongX(newX);
    },
    [moveAlongX, isMoving]
  );

  useEffect(() => {
    setIsMoving(false);
  }, [moveAlongX]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return <Person x={moveAlongX} />;
}
