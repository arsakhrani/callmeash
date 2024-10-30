import AnimationWrapper from "@/components/containers/AnimationWrapper";
import styles from "./page.module.css";

export default function page() {
  return (
    <AnimationWrapper>
      <main className={styles.container}>
        <p className={styles.text}>Phone: +351 914 703 008</p>
        <p className={styles.text}>Email: arsakhrani@gmail.com</p>
        <p className={styles.text}>
          LinkedIn:{" "}
          <a
            aria-label="LinkedIn Profile"
            className={styles.link}
            href="https://www.linkedin.com/in/ashneil-sakhrani-10645b1b/"
            target="_blank"
          >
            click here!
          </a>
        </p>
      </main>
    </AnimationWrapper>
  );
}
