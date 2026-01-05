import type { ReactNode } from 'react';

export type CarouselItemProps<T> = {
  item: T;
  renderItem: (item: T) => ReactNode;
};
