import classnames from 'classnames';
import { formatPriceValue } from '@shared/utils/formatPriceValue';
import type { CalculateCartItemTotalProps } from '../model/CalculateCartItemTotal.types';
import { useCalculateCartItemTotal } from '../model/useCalculateCartItemTotal';

export const CartItemPrice = ({ item }: CalculateCartItemTotalProps) => {
  const itemPrice = useCalculateCartItemTotal(item);
  return (
    <div className='w-25 flex flex-col justify-center items-center'>
      <span
        className={classnames('block text-md text-red-400', {
          'line-through': !!itemPrice.discountPrice,
        })}
      >
        ${formatPriceValue(itemPrice.originalPrice)}
      </span>
      {itemPrice.discountPrice && (
        <span className={'text-md block text-red-500'}>
          ${formatPriceValue(itemPrice.discountPrice)}
        </span>
      )}
    </div>
  );
};
