import { useState, type ChangeEvent } from "react";
import styles from "./PostLengthFilter.module.css";

type Props = { onFilterChange: (minLength: number) => void };

export const PostLengthFilter = ({ onFilterChange }: Props) => {
  const [length, setLength] = useState<number>(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setLength(val);
    onFilterChange(val);
  };

  return (
    <label className={styles.label}>
      Минимальная длина заголовка:
      <input type="number" value={length} className={styles.input} onChange={onChange} />
    </label>
  );
};