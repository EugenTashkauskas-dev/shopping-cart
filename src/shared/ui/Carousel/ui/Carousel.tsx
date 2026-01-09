import { useCallback, useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { CarouselItem } from "./CarouselItem";
import { NavButton } from "./NavButton";
import type { CarouselProps } from "../model/Carousel.types";

export const Carousel = <T,>({
  items,
  getItemKey,
  renderItem,
}: CarouselProps<T>) => {
  const carousel = useRef<HTMLDivElement>(null);
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const movePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }, [currentIndex]);

  const moveNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }, [currentIndex, items.length]);

  const isDisabled = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") {
        return currentIndex <= 0;
      }

      if (direction === "next" && carousel.current !== null) {
        return (
          carousel.current?.offsetWidth * currentIndex >= maxScrollWidth.current
        );
      }

      return false;
    },
    [currentIndex],
  );

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <NavButton
          position="left"
          onClick={movePrev}
          // eslint-disable-next-line react-hooks/refs
          disabled={isDisabled("prev")}
        />
        <NavButton
          position="right"
          onClick={moveNext}
          // eslint-disable-next-line react-hooks/refs
          disabled={isDisabled("next")}
        />
        <div
          ref={carousel}
          className={classnames(
            "carousel-container",
            "relative",
            "flex",
            "mx-10",
            "overflow-hidden",
            "scroll-smooth",
            "snap-x",
            "snap-mandatory",
            "touch-pan-x",
            "z-0",
          )}
        >
          {items.map((item) => (
            <CarouselItem
              key={getItemKey(item)}
              item={item}
              renderItem={renderItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
