import styles from "./primaryButton.module.css";

type Props = {
  buttonText: string;
};

export default function PrimaryButton({ buttonText }: Props) {
  return <button className={styles.button}>{buttonText}</button>;
}
