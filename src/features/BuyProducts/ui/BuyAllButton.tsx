import { useDispatch } from 'react-redux';
import { useBuyProducts } from '../model/useBuyProducts';
import { useCallback } from 'react';
import { setOpenedState } from '@entities/CartItem/model/Cart.slice';

export const BuyAllButton = () => {
  const dispatch = useDispatch();
  const buyAll = useBuyProducts();

  const handleBuyAll = useCallback(() => {
    buyAll();
    dispatch(setOpenedState(false));
  }, [buyAll, dispatch]);

  return (
    <button
      className='bg-green-500 my-2 border border-green-400 text-white w-32 rounded'
      onClick={handleBuyAll}
    >
      Buy All
    </button>
  );
};
