import { useCallback } from 'react';
import { useEmptyCart } from '../model/useEmptyCart';
import { useDispatch } from 'react-redux';
import { setOpenedState } from '@entities/CartItem/model/Cart.slice';

export const EmptyCartButton = () => {
  const dispatch = useDispatch();
  const emptyCart = useEmptyCart();

  const handleEmptyCart = useCallback(() => {
    emptyCart();
    dispatch(setOpenedState(false));
  }, [emptyCart, dispatch]);
  
  return (
    <button
      className='bg-red-500 my-2 border border-red-400 text-white w-32 rounded'
      onClick={handleEmptyCart}
    >
      Empty cart
    </button>
  );
};
