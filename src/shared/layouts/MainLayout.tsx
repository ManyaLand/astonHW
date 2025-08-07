import type { ReactNode } from "react";
import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className={styles.mainWrapper}>
			<Header />
			<main className={styles.main}>
				{children}
			</main>
			<Footer />
		</div>
	);
};