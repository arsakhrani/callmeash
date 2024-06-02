"use client";

import { useRef } from "react";
import {
  headerAnimationFromLeft,
  headerAnimationFromRight,
} from "./animations";
import styles from "./introText.module.css";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Data } from "@/data";

type Props = {
  projectSelected: Data | null;
};

export default function IntroText({ projectSelected }: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const translateXLeft = useTransform(scrollYProgress, [0, 1], [0, 1300]);
  const translateXRight = useTransform(scrollYProgress, [0, 1], [0, -1300]);
  const rotateZLeft = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotateZRight = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div>
      <AnimatePresence>
        {!projectSelected && (
          <motion.h1
            key={0}
            style={{
              translateX: translateXLeft,
              opacity,
              rotateZ: rotateZRight,
            }}
            initial={headerAnimationFromLeft.initial}
            animate={headerAnimationFromLeft.animate}
            exit={headerAnimationFromLeft.exit}
            className={styles.header}
          >
            a full stack
          </motion.h1>
        )}
        {!projectSelected && (
          <motion.h1
            key={1}
            style={{
              translateX: translateXRight,
              opacity,
              rotateZ: rotateZLeft,
            }}
            initial={headerAnimationFromRight.initial}
            animate={headerAnimationFromRight.animate}
            exit={headerAnimationFromRight.exit}
            className={styles.header}
          >
            developer with a
          </motion.h1>
        )}
        {!projectSelected && (
          <motion.h1
            key={2}
            style={{
              translateX: translateXLeft,
              opacity,
              rotateZ: rotateZRight,
            }}
            initial={headerAnimationFromLeft.initial}
            animate={headerAnimationFromLeft.animate}
            exit={headerAnimationFromLeft.exit}
            className={styles.header}
          >
            plane to catch
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}
