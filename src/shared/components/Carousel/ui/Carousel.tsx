import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

  const [itemWidth, setItemWidth] = useState(0);
  const originalStartIndex = useMemo(
    () => Math.ceil(items.length / 2),
    [items],
  );

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [{ pageSize, pagesCount }, setPageParams] = useState({
    pageSize: 0,
    pagesCount: 0,
  });
  const [animate, setAnimate] = useState(false);

  const scrollItems = useMemo(() => {
    const emulatedEndPart = items.slice(originalStartIndex);
    const emulatedStartPart = items.slice(0, originalStartIndex);
    return [...emulatedEndPart, ...items, ...emulatedStartPart];
  }, [items, originalStartIndex]);

  const move = useCallback((pageStep: number) => {
    setAnimate(true);
    setCurrentPage((prevPage) => prevPage + pageStep);
  }, []);

  const calculatePageStateParams = useCallback(() => {
    const containerWidth = carousel.current?.offsetWidth ?? 0;
    const newItemWidth = carousel.current?.firstElementChild?.clientWidth ?? 1;
    setItemWidth(newItemWidth);

    // recalculate page size
    const newPageSize = Math.floor(containerWidth / newItemWidth);
    if (pageSize === newPageSize && pageSize > 0) {
      return;
    }

    const oldPageSize = pageSize;
    const oldCurrentPage = currentPage;
    const firstItemOnPageIndex =
      oldPageSize * oldCurrentPage || originalStartIndex;
    const newCurrentPage = Math.floor(firstItemOnPageIndex / newPageSize);
    setCurrentPage(newCurrentPage);

    setPageParams({
      pageSize: newPageSize,
      pagesCount: Math.ceil(scrollItems.length / newPageSize),
    });
  }, [currentPage, originalStartIndex, pageSize, scrollItems]);

  useLayoutEffect(() => {
    // react-hooks/set-state-in-effect
    calculatePageStateParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calculatePageStateParams);

    return () => {
      window.removeEventListener("resize", calculatePageStateParams);
    };
  }, [calculatePageStateParams]);

  const handleTransitionEnd = useCallback(() => {
    setAnimate(false);
    if (currentPage <= 1) {
      setCurrentPage(currentPage + Math.floor(items.length / pageSize));
    }
    if (currentPage >= pagesCount - 1) {
      setCurrentPage(currentPage - Math.floor(items.length / pageSize));
    }
  }, [currentPage, items.length, pageSize, pagesCount]);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <NavButton
          position="left"
          onClick={() => move(-1)}
          disabled={animate}
        />
        <NavButton
          position="right"
          onClick={() => move(1)}
          disabled={animate}
        />
        <div className="overflow-hidden mx-10">
          <div
            ref={carousel}
            className={classnames(
              "carousel-container",
              "relative",
              "flex",
              "z-0",
              {
                "transition-transform duration-200 ease-out": animate,
              },
            )}
            style={{
              transform: `translateX(-${currentPage * pageSize * itemWidth}px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {scrollItems.map((item, index) => (
              <CarouselItem
                key={getItemKey(item, index)}
                index={index}
                item={item}
                renderItem={renderItem}
                className={`item_${getItemKey(item, index)}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
