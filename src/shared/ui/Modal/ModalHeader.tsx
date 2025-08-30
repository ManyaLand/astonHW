import type { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

export const Header = ({ children }: PropsWithChildren) => 
  <h2 className={styles.title}>{children}</h2>;