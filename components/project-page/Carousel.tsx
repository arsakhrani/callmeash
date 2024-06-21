import Image from "next/image";
import styles from "./carousel.module.css";
import ArrowIcon from "../atoms/ArrowIcon";
import { useState } from "react";

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  const handleRightClick = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleLeftClick = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  return (
    <section className={styles.container}>
      <div
        style={{ transform: `translate(-${index * 100}vw, 0px)` }}
        className={styles.carouselContainer}
      >
        {images.map((image) => {
          return (
            <div className={styles.pictureContainer} key={image}>
              <Image
                fill
                sizes="(max-width: 720px) 100vw 30vh (min-width: 721px) 100vw 90vh"
                src={image}
                alt="test"
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.arrowContainer}>
        <ArrowIcon left onClick={handleLeftClick} />
        <ArrowIcon right onClick={handleRightClick} />
      </div>
    </section>
  );
}
