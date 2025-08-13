import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.logo}>POSTS</div>
		</header>
	);
};