import { useState, useEffect, type PropsWithChildren } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";



export const ThemeProvider = ({ children }: PropsWithChildren) => {
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