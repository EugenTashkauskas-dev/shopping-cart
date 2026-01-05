import type { CartItem } from "@entities/CartItem/model/types";
import { products } from "@entities/product/model/products.mock";
import { getCartItemPrice } from "@shared/utils/getCartItemPrice";
import { useMemo } from "react";

export const useCalculateCartItemTotal = (item: CartItem) => {
  const itemCost = useMemo(() => {
    const product = products.find((product) => product.id === item.productId);
    if (!product) {
      return { originalPrice: 0 };
    }

    return getCartItemPrice(item, product);
  }, [item]);

  return itemCost;
};
