import classnames from 'classnames';
import type { AddToCartButtonProps } from '../model/types';
import { useAddToCart } from '../model/useAddToCart';

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const handleAddToCart = useAddToCart();

  return (
    <button
      className={classnames(
        'w-full',
        'text-lg',
        'text-white',
        'bg-green-500',
        'hover:bg-green-400',
        'mt-2',
        'transition',
        'transition-colors',
        'ease-in-out',
        'cursor-pointer',
      )}
      onClick={() => handleAddToCart(productId)}
    >
      Add to cart
    </button>
  );
};
