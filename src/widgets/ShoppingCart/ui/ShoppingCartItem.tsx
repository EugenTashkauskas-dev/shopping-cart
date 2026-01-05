import classnames from 'classnames';
import { ProductView } from '@entities/product/ui/Product';
import type { ShoppingCartItemProps } from '../model/ShoppingCartItem.types';
import { useMemo } from 'react';
import { products } from '@entities/product/model/products.mock';
import { ShoppingCartItemCount } from './ShoppingCartItemCount';
import { RemoveSameProductItemsFromCartButton } from '@features/RemoveSameProductItemsFromCart/ui/RemoveSameProductItesmsFromCartButton';
import { CartItemPrice } from '@features/CalculateCartItemTotal/ui/CartItemPrice';

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
  const product = useMemo(() => {
    return products.find((prod) => prod.id === item.productId);
  }, [item]);

  if (!product) {
    return null;
  }
  return (
    <div
      className={classnames(
        'flex',
        'flex-row',
        'xl:flex-row',
        'justify-between',
        'items-center',
        'xl:mx-10',
        'mb-4',
        'pb-4',
        'border-b',
        'border-b-gray-500',
      )}
    >
      <div className="flex flex-col xl:flex-row justify-around items-stretch w-full">
        <div className='flex flex-row justify-between items-stretch flex-2/3'>
          <ProductView product={product} hidePrice modalView />
        </div>
        <div className='flex flex-row w-full mt-4 xl:mt-0 justify-between xl:justify-around items-center xl:flex-1/3'>
          <ShoppingCartItemCount item={item} />
          <CartItemPrice item={item} />
        </div>
      </div>
      <div className="flex w-10 justify-center align-middle">
        <RemoveSameProductItemsFromCartButton productId={item.productId} />
      </div>
    </div>
  );
};
