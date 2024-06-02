import Link from "next/link";
import ArrowIcon from "../atoms/ArrowIcon";
import PrimaryButton from "../atoms/PrimaryButton";
import styles from "./idea.module.css";

type Props = {
  idea: string[];
  projectLink: string | null;
  githubLink: string | null;
};

export default function Idea({ idea, projectLink, githubLink }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.ideaText}>idea</h2>
      <div className={styles.contentContainer}>
        <div className={styles.arrowContainer}>
          <ArrowIcon right />
        </div>
        <div>
          {idea.map((p) => {
            return (
              <p key={p} className={styles.text}>
                {p}
              </p>
            );
          })}
          <div className={styles.buttonContainer}>
            {projectLink && (
              <Link href={projectLink}>
                <PrimaryButton buttonText="Visit project" />
              </Link>
            )}
            {githubLink && (
              <Link href={githubLink}>
                <PrimaryButton buttonText="Visit Github" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
