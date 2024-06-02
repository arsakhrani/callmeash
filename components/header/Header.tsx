"use client";

import styles from "./header.module.css";
import NavLink from "../atoms/NavLink";
import { motion } from "framer-motion";
import { animate, initial, transition } from "./animations";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const projectPage = pathName.includes("work/");

  return (
    <motion.header
      initial={initial}
      animate={animate}
      transition={transition}
      className={styles.header}
      style={{
        position: projectPage ? "absolute" : "static",
        zIndex: projectPage ? 2 : 1,
      }}
    >
      <div className={styles.linkContainer}>
        <NavLink href="/" text="Home" />
        <NavLink href="/work" text="Work" />
        <NavLink href="/contact" text="Contact" />
      </div>
      <div></div>
    </motion.header>
  );
}
