import type { PropsWithChildren, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonProps = PropsWithChildren<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}>;

export const Button = ({ onClick, children, type = "button" }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};