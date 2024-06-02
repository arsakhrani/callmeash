"use client";

import styles from "./typeAnimation.module.css";
import { TypeAnimation } from "react-type-animation";
import ArrowIcon from "../atoms/ArrowIcon";
import { motion } from "framer-motion";
import { typeAnimation } from "./animations";

export default function TypeAnimationComponent() {
  return (
    <motion.div
      initial={typeAnimation.initial}
      animate={typeAnimation.animate}
      exit={typeAnimation.exit}
    >
      <TypeAnimation
        sequence={[
          1500,
          "Hello!",
          1000,
          "Olá!",
          1300,
          "Guten Tag!",
          2000,
          "Bon Jour!",
          1800,
          "Buna Ziua!",
          1000,
          "Hola!",
          1700,
          "Namaste!",
          1200,
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        speed={20}
        deletionSpeed={13}
      />
      <h1 className={styles.imAsh}>I&apos;m Ash</h1>
      <div className={styles.arrowContainer}>
        <ArrowIcon />
      </div>
    </motion.div>
  );
}
