import { Stack } from "@/data";
import styles from "./stack.module.css";
import Link from "next/link";
import ArrowIcon from "../atoms/ArrowIcon";

type Props = {
  tags: Stack[];
};

export default function StackListItem({ tags }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.stackText}>stack</h2>
      {tags.map((tag) => {
        return (
          <h1 key={tag.tech} className={styles.text}>
            <Link aria-label={tag.tech} target="_blank" href={tag.url}>
              <ArrowIcon right />{" "}
              <span data-replace={tag.tech} className={styles.hoverEffect}>
                {tag.tech}
              </span>
            </Link>
          </h1>
        );
      })}
    </div>
  );
}
