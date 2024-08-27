import Link from "next/link";
import PrimaryButton from "../atoms/PrimaryButton";
import styles from "./statement.module.css";

export default function Statement() {
  return (
    <section className={styles.container}>
      <h2>Pilot by day, developer by night.</h2>
      <div className={styles.buttonContainer}>
        <Link aria-label="Work" href={"/work"}>
          <PrimaryButton buttonText="see my work" />
        </Link>
      </div>
    </section>
  );
}
