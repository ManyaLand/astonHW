import { useState } from "react";
import styles from "./PostLengthFilter.module.css";

type Props = { onFilterChange: (minLength: number) => void };

export const PostLengthFilter = ({ onFilterChange }: Props) => {
  const [length, setLength] = useState(0);

  return (
    <label className={styles.label}>
        Минимальная длина заголовка:
        <input
            type="number"
            value={length}
            className={styles.input}
            onChange={(e) => {
            const val = Number(e.target.value);
            setLength(val);
            onFilterChange(val);
          }}
        />
    </label>
  );
};