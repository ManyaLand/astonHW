import { PropsWithChildren } from "react";

export type ItemRenderer<T> = (item: T) => React.ReactNode;

export interface ItemListProps<T> {
  items: T[];
  renderItem: ItemRenderer<T>;
  getKey: (item: T, index: number) => React.Key;
  className?: string;
}

export function ItemList<T>({ items, renderItem, getKey, className }: PropsWithChildren<ItemListProps<T>>) {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <div key={getKey(item, i)}>{renderItem(item)}</div>
      ))}
    </div>
  );
}