import type { ReactNode } from "react";
import styles from "./Modal.module.css";

export const Header = ({ children }: { children: ReactNode }) => (
  <h2 className={styles.title}>{children}</h2>
);