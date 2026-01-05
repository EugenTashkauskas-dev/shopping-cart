import { removeAllItems } from "@entities/CartItem/model/Cart.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useRemoveSameProductItemsFromCart = () => {
  const dispatch = useDispatch();
  const handleRemoveSameProductItemsFromCart = useCallback(
    (productId: number) => {
      dispatch(removeAllItems(productId));
    },
    [dispatch],
  );

  return handleRemoveSameProductItemsFromCart;
};
