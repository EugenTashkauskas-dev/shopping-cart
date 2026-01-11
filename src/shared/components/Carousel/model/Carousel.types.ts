import React from "react";

export type CarouselProps<T> = {
  items: T[];
  getItemKey: (item: T, index: number) => string;
  renderItem: (item: T, index?: number) => React.ReactNode;
};

export type NavButtonProps = {
  onClick: () => void;
  position?: "left" | "right";
  disabled: boolean;
};
