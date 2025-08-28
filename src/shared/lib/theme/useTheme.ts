import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "./ThemeContext";

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("Ошибка контекста");
	}
	return context;
};