import { useDispatch, useSelector } from "react-redux";
import type { RemoveSameProductItemsFromCartButtonProps } from "../model/types";
import { useRemoveSameProductItemsFromCart } from "../model/useRemoveSameProductItemsFromCart";
import TrashIcon from "@assets/trash.svg?react";
import { useCallback } from "react";
import { selectCartItems } from "@entities/CartItem/model/selectors";
import { setOpenedState } from "@entities/CartItem/model/Cart.slice";

export const RemoveSameProductItemsFromCartButton = ({
  productId,
}: RemoveSameProductItemsFromCartButtonProps) => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const handleRemoveSameProductItemsFromCart =
    useRemoveSameProductItemsFromCart();

  const handleRemoveProduct = useCallback(() => {
    handleRemoveSameProductItemsFromCart(productId);
    if (items.length === 1) {
      // if the last product was removed from cart, close popup
      dispatch(setOpenedState(false));
    }
  }, [dispatch, handleRemoveSameProductItemsFromCart, items.length, productId]);

  return (
    <button
      onClick={handleRemoveProduct}
      className="w-10 h-10 cursor-pointer text-green-500"
    >
      <TrashIcon className="w-10 h-10" />
    </button>
  );
};
