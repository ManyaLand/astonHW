import type { ReactNode } from "react";
import styles from "./Modal.module.css";

export const Footer = ({ children }: { children: ReactNode }) => (
  <div className={styles.footer}>{children}</div>
);