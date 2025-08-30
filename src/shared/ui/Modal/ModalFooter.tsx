import type { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

export const Footer = ({ children }: PropsWithChildren) => 
  <div className={styles.footer}>{children}</div>;