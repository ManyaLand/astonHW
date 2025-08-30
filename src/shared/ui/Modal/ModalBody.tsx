import type { PropsWithChildren  } from "react";
import styles from "./Modal.module.css";

export const Body   = ({ children }: PropsWithChildren) => 
  <div className={styles.body}>{children}</div>;