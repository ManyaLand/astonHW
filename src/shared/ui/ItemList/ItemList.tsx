import React from 'react';
import { PropsWithChildren  } from "react";
import styles from "./ItemsList.module.css";
export type ItemRenderer<T> = (item: T) => React.ReactNode;

export interface ItemListProps<T> {
  items: T[];
  renderItem: ItemRenderer<T>;
  getKey: (item: T, index: number) => React.Key;
  className?: string;
}

export function ItemList<T>({ items, renderItem, getKey, className }: PropsWithChildren<ItemListProps<T>>) {
  return (
    <div className={className && styles[className]}>
      {items.map((item, i) => (
          <React.Fragment key={getKey(item, i)}>
            {renderItem(item)}
          </React.Fragment>
      ))}
    </div>
  );
}