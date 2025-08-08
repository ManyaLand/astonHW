import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={styles.wrapper}>
			<span>{theme === "light" ? "Светлая" : "Тёмная"} тема</span>
			<label className={styles.switch}>
				<input
					type="checkbox"
					onChange={toggleTheme}
					checked={theme === "dark"}
				/>
				<span className={styles.slider} />
			</label>
		</div>
	);
};
