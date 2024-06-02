import { Data } from "@/data";
import styles from "./windowDisplay.module.css";
import Image from "next/image";

type Props = {
  data: Data;
};

export default function WindowDisplay({ data }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image objectFit="cover" src={data.heroImage} alt="Hero Image" fill />
      </div>
      <p className={styles.title}>{data.name}</p>
      <p className={styles.subtitle}>{data.subtitle}</p>
    </div>
  );
}
