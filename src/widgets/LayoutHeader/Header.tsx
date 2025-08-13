import { useState } from "react";
import { Modal } from "../../shared/ui/Modal/Modal";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ThemeSwitcher";
import { Button } from "../../shared/ui/Button/Button";
import styles from "./Header.module.css";

export const Header = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<header className={styles.wrapper}>
			<span className={styles.logo}>POSTS</span>
			<div className={styles.buttonsWrapper}>
				<ThemeSwitcher />
				<Button onClick={() => setModalOpen(true)}>О проекте</Button>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
				<h2 className={styles.title}>О проекте</h2>
				<p className={styles.text}>
					Это учебный React-проект для компании Aston с темами и
					модальным окном.
				</p>
			</Modal>
		</header>
	);
};
