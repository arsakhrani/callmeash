import Link from "next/link";
import ArrowIcon from "../atoms/ArrowIcon";
import styles from "./features.module.css";
import Image from "next/image";

type Props = {
  featureStatement: string;
  secondaryImage: string;
};

export default function Features({ featureStatement, secondaryImage }: Props) {
  return (
    <div className={styles.container}>
      <Link aria-label="Work" href={"/work"}>
        <h2 className={styles.backButton}>
          <span className={styles.arrowContainer}>
            <ArrowIcon left />
          </span>
          back
        </h2>
      </Link>
      <h1 className={styles.statement}>{featureStatement}</h1>
      <Image
        width={575}
        height={375}
        src={secondaryImage}
        alt={featureStatement}
        className={styles.image}
      />
    </div>
  );
}
