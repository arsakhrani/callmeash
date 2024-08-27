import Link from "next/link";
import styles from "./MobileSideMenu.module.css";

type Props = {
  visible: boolean;
  closeSideMenu: () => void;
};

export default function MobileSideMenu({ visible, closeSideMenu }: Props) {
  return (
    <div
      style={{
        transform: visible
          ? "translate3d(0vw, 0, 0)"
          : "translate3d(100vw, 0, 0)",
      }}
      className={styles.container}
    >
      <nav className={styles.navContainer}>
        <ul className={styles.linkContainer}>
          <li onClick={() => closeSideMenu()} className={styles.link}>
            <Link aria-label="Home" href={"/"}>
              home
            </Link>
          </li>
          <li onClick={() => closeSideMenu()} className={styles.link}>
            <Link aria-label="Work" href={"/work"}>
              work
            </Link>
          </li>
          <li onClick={() => closeSideMenu()} className={styles.link}>
            <Link aria-label="Contact" href={"/contact"}>
              contact
            </Link>
          </li>
          <li className={styles.link}>
            <a
              aria-label="CV Download"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/uc?export=download&id=1TL4mET6EobU4Wlo-Xs7th4_hcAjprPA2"
              download="Sakhrani_CV"
            >
              cv
            </a>
          </li>
        </ul>
      </nav>
      <div onClick={() => closeSideMenu()} className={styles.logoContainer}>
        <Link aria-label="Home" href={"/"}>
          call me ASH
        </Link>
      </div>
    </div>
  );
}
