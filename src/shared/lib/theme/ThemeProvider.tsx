import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		document.body.dataset.theme = theme;
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prev => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};