import classnames from "classnames";
import Arrow from "@assets/arrow.svg?react";

import type { NavButtonProps } from "../model/Carousel.types";

export const NavButton = ({ onClick, position, disabled }: NavButtonProps) => (
  <button
    onClick={onClick}
    className={classnames(
      "hover:bg-green-200/75",
      "text-black",
      "disabled:text-gray-500",
      "text-center",
      "absolute",
      "w-10",
      "h-full",
      "top-0",
      "z-10",
      "p-0",
      "m-0",
      "transition-all",
      "ease-in-out",
      "duration-300",
      "cursor-pointer",
      {
        disabled,
        "left-0": position === "left",
        "right-0": position === "right",
      },
    )}
  >
    <Arrow
      className={classnames("h-12 w-10", {
        "rotate-180": position === "right",
      })}
    />
  </button>
);
