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
        <Image
          style={{ objectFit: "cover" }}
          src={data.heroImage}
          alt="Hero Image"
          fill
          priority
          sizes="(min-width: 200px) 350px 470px"
        />
      </div>
      <p className={styles.title}>{data.name}</p>
      <p className={styles.subtitle}>{data.subtitle}</p>
    </div>
  );
}
