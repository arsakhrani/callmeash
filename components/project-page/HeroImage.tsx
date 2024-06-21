"use client";

import Image from "next/image";
import styles from "./heroImage.module.css";
import { motion } from "framer-motion";
import { Stack } from "@/data";

type Props = {
  heroImage: string;
  title: string;
  tags: Stack[];
};

export default function HeroImage({ heroImage, title, tags }: Props) {
  return (
    <section className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        className={styles.imageContainer}
      >
        <Image
          style={{ objectFit: "cover" }}
          fill
          sizes="(min-width: 200px) 100vw 100vh"
          src={heroImage}
          alt="Hero Image for project"
        />
        <div className={styles.gradientBlack} />
      </motion.div>
      <h1 className={styles.header}>{title}</h1>
      <div className={styles.tagStrip}>
        {tags.map((tag) => {
          return <p key={tag.tech}>{tag.tech}</p>;
        })}
      </div>
    </section>
  );
}
