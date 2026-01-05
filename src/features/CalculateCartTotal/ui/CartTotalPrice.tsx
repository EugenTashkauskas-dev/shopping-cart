import { useCalculateCartTotal } from '../model/useCalculateCartTotal';

export const CartTotalPrice = () => {
  const totalPrice = useCalculateCartTotal();

  return (
    <span className='text-md text-green-500 text-right'>
      Total: ${totalPrice !== undefined ? totalPrice.toFixed(2) : '0.00'}
    </span>
  );
};
