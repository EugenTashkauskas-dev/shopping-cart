import { useAddToCart } from '@features/AddToCart/model/useAddToCart';
import type { ShoppingCartItemProps } from '../model/ShoppingCartItem.types';
import { useRemoveFromCart } from '@features/RemoveFromCart/model/useRemoveFromCart';
import { useSetCartItemQuantity } from '@features/SetCartItemsCount/model/useSetCartItemQuantity';
import { useCallback, type ChangeEvent } from 'react';

export const ShoppingCartItemCount = ({ item }: ShoppingCartItemProps) => {
  const addToCart = useAddToCart();
  const removeFromCart = useRemoveFromCart();
  const setItemQuantity = useSetCartItemQuantity();

  const handleCountChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const quantity = Number(e.target.value);
      if (quantity > 99 || quantity < 1) {
        return;
      }
      setItemQuantity({
        productId: item.productId,
        quantity,
      });
    },
    [setItemQuantity, item.productId],
  );

  const incrementQuantity = useCallback(() => {
    if (item.quantity >= 99) {
      return;
    }
    addToCart(item.productId);
  }, [addToCart, item.quantity, item.productId]);

  const decrementQuantity = useCallback(() => {
    if (item.quantity === 1) {
      return;
    }
    removeFromCart(item.productId);
  }, [removeFromCart, item.quantity, item.productId]);

  if (!item) {
    return null;
  }

  return (
    <div className='flex flex-row justify-center items-center gap-1 min-w-28'>
      <button
        className='w-8 h-8 border border-gray-300 rounded text-center'
        onClick={decrementQuantity}
        disabled={item.quantity <= 1}
      >
        -
      </button>
      <input
        type='number'
        className='w-8 h-8 p-1 rounded border border-gray-300 hover:border-gray-300 appearance-none'
        value={item.quantity}
        min={1}
        max={99}
        onChange={handleCountChange}
      />
      <button
        className='w-8 h-8 border border-gray-300 rounded text-center'
        onClick={incrementQuantity}
        disabled={item.quantity >= 99}
      >
        +
      </button>
    </div>
  );
};
