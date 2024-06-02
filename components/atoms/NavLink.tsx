"use client";

import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
};

export default function NavLink({ href, text }: Props) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${styles.link} ${pathName === href ? styles.active : ""}`}
    >
      {text}
    </Link>
  );
}
