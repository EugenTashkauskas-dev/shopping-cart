import type { CartItem } from "@entities/CartItem/model/types";
import type { Product } from "@entities/product/model/types";
import type { ItemPrice } from "@shared/types/app.types";

export const getCartItemPrice = (
  item: CartItem,
  product: Product,
): ItemPrice => {
  const itemPrice: ItemPrice = {
    originalPrice: product.price * item.quantity,
  };

  if (item.quantity > 5) {
    itemPrice.discountPrice = Math.round(itemPrice.originalPrice * 0.9); // Apply 10% discount
  }

  return itemPrice;
};
