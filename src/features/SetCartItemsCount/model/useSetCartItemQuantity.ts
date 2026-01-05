import { setItemQuantity } from "@entities/CartItem/model/Cart.slice";
import type { CartItem } from "@entities/CartItem/model/types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useSetCartItemQuantity = () => {
  const dispatch = useDispatch();
  const setQuantity = useCallback(
    ({ productId, quantity }: CartItem) => {
      dispatch(
        setItemQuantity({
          productId,
          quantity,
        }),
      );
    },
    [dispatch],
  );

  return setQuantity;
};
