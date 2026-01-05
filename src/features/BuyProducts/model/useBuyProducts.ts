import { clearCart } from "@entities/CartItem/model/Cart.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useBuyProducts = () => {
  const dispatch = useDispatch();

  const handleBuyProducts = useCallback(() => {
    alert("Purchase successful!");
    dispatch(clearCart());
  }, [dispatch]);

  return handleBuyProducts;
};
