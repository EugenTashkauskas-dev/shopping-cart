import { clearCart } from '@entities/CartItem/model/Cart.slice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useEmptyCart = () => {
  const dispatch = useDispatch();

  const handleUseEmptyCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return handleUseEmptyCart;
};
