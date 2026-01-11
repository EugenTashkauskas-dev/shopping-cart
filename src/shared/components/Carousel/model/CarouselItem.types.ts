import type { ReactNode } from "react";

export type CarouselItemProps<T> = {
  item: T;
  index: number;
  renderItem: (item: T) => ReactNode;
  className?: string;
};
