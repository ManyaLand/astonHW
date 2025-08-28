import { memo } from "react";
import styles from "./PostLengthFilter.module.css";

type Props = { 
    onFilterChange: (minLength: number) => void;
    minLength: number;
};

export const PostLengthFilter = memo(({ onFilterChange, minLength }: Props) => {
    return (
        <label className={styles.label}>
            Минимальная длина заголовка:
            <input
                type="number"
                value={minLength}
                min={0}
                className={styles.input}
                onChange={(e) => {
                    const val = Math.max(0, Number(e.target.value));
                    onFilterChange(val);
                }}
            />
        </label>
    );
});