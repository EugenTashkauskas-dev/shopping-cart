import React from 'react';

export type CarouselProps<T> = {
  items: T[];
  getItemKey: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
};

export type NavButtonProps = {
  disabled: boolean;
  onClick: () => void;
  position?: 'left' | 'right';
};
