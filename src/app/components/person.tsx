"use client";

import { motion } from "motion/react";

export default function Person({ x }: { x: number }) {
  return <motion.img src="/walk.png" animate={{ x }} width="40" height="40" />;
}
