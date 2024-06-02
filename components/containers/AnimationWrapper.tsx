"use client";

import { motion } from "framer-motion";
import styles from "./animationWrapper.module.css";

type Props = {
  children: React.ReactNode;
};

export default function AnimationWrapper({ children }: Props) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.div>
  );
}
