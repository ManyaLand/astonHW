import type { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};
