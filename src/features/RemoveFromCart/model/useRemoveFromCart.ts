import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeOneItem } from '@entities/CartItem/model/Cart.slice';

export const useRemoveFromCart = () => {
  const dispatch = useDispatch();
  const removeFromCart = useCallback(
    (productId: number) => {
      dispatch(removeOneItem(productId));
    },
    [dispatch],
  );

  return removeFromCart;
};
