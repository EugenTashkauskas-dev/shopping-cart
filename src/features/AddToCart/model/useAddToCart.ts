import { addNewItem } from "@entities/CartItem/model/Cart.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useAddToCart = () => {
  const dispatch = useDispatch();

  const hanldeAddToCart = useCallback(
    (productId: number) => {
      dispatch(addNewItem({ productId, quantity: 1 }));
    },
    [dispatch],
  );

  return hanldeAddToCart;
};
