import ArrowIcon from "../atoms/ArrowIcon";
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.container}>
      <div className={styles.arrowContainer}>
        <ArrowIcon />
      </div>
      <div className={styles.contentContainer}>
        <p>
          Hey there, I am Ashneil. But you can call me Ash if you like.
          <br />
          <br />I am from a tiny Caribbean island called St.Maarten but
          currently based in Portugal. Most of my adult life I have been an
          airline pilot. I seized an opportunity during the coronavirus pandemic
          to dive into a long-time passion of web development. Now I can proudly
          say that I have a second career as a full stack web developer. My
          language of choice is TypeScript and I find myself comfortable using
          NodeJS, Express, and React. Although, I am always keen to learn new
          technologies.
          <br />
          <br />
          Apart from sitting in front of Visual Studio Code, you can also often
          find me sitting in front of Ben and Jerry&apos;s ice cream, the ocean,
          mountains, Tarantino movies, live music concerts, and more ice cream.
          Thanks for visiting my portfolio! I am quite the extrovert so please
          don&apos;t hesitate to reach out if you would like to know more!
        </p>
      </div>
    </section>
  );
}
