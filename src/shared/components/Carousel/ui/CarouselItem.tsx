import classnames from "classnames";

import type { CarouselItemProps } from "../model/CarouselItem.types";

export const CarouselItem = <T,>({
  item,
  renderItem,
  className,
}: CarouselItemProps<T>) => {
  return (
    <div
      className={classnames(
        className,
        "carousel-item",
        "text-center",
        "relative",
        "min-w-full",
        "xl:min-w-1/5",
        "md:min-w-1/2",
        "snap-start",
        "transition",
        "transition-all",
        "ease-in-out",
      )}
      onTransitionEnd={(e) => e.stopPropagation()}
    >
      <div className="border border-gray-300 hover:bg-gray-100 h-full p-2">
        {renderItem(item)}
      </div>
    </div>
  );
};
