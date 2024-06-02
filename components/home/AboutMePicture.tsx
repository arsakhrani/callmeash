import Image from "next/image";
import ArrowIcon from "../atoms/ArrowIcon";
import styles from "./aboutMePicture.module.css";
import surfboard from "../../public/images/surfboard.jpeg";

export default function AboutMePicture() {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <ArrowIcon />
      </div>
      <Image
        src={surfboard}
        alt="Me and my surfboard"
        width={475}
        height={324}
      />
    </div>
  );
}
