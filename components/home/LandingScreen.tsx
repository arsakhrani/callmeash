"use client";

import Image from "next/image";
import styles from "./landingScreen.module.css";
import TypeAnimationComponent from "./TypeAnimationComponent";
import { motion, useScroll, useTransform } from "framer-motion";
import { imageAnimation } from "./animations";
import { useEffect, useMemo, useRef, useState } from "react";

export default function LandingScreen() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imageSources: string[] = useMemo(
    () => [
      "https://res.cloudinary.com/di85rflof/image/upload/v1709474989/_Images%20of%20Ashneil%20for%20Front%20Page/IMG_2382_nldceu.jpg",
      "https://res.cloudinary.com/di85rflof/image/upload/v1709474989/_Images%20of%20Ashneil%20for%20Front%20Page/IMG_5032_bi3j60.jpg",
      "https://res.cloudinary.com/di85rflof/image/upload/v1709474987/_Images%20of%20Ashneil%20for%20Front%20Page/IMG_8746_tpexsx.jpg",
      "https://res.cloudinary.com/di85rflof/image/upload/v1709474986/_Images%20of%20Ashneil%20for%20Front%20Page/IMG_8988_pylmes.jpg",
      "https://res.cloudinary.com/di85rflof/image/upload/v1709474985/_Images%20of%20Ashneil%20for%20Front%20Page/IMG_1175_rql0nz.jpg",
      "https://res.cloudinary.com/di85rflof/image/upload/v1709474983/_Images%20of%20Ashneil%20for%20Front%20Page/IMG_1188_vrz4s9.jpg",
      "https://res.cloudinary.com/di85rflof/image/upload/v1709474976/_Images%20of%20Ashneil%20for%20Front%20Page/d8457946-8154-4efe-afd4-4c90e6203e97_nwmcid.jpg",
    ],
    []
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex: number) => (prevIndex + 1) % imageSources.length
      );
    }, 2500);

    return () => clearInterval(intervalId);
  }, [imageSources]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity }}
      className={styles.container}
    >
      <div />
      <TypeAnimationComponent />
      <motion.div
        key={0}
        initial={imageAnimation.initial}
        animate={imageAnimation.animate}
        exit={imageAnimation.exit}
        className={styles.imageContainer}
      >
        <Image
          src={imageSources[currentIndex]}
          fill
          objectFit="cover"
          alt="A picture of me in a wetsuit on the beach."
        />
      </motion.div>
    </motion.section>
  );
}
