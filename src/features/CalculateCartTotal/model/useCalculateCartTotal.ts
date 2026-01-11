import { selectCartItems } from "@entities/CartItem/model/selectors";
import { products } from "@entities/product/model/products.mock";
import { getCartItemPrice } from "@shared/utils/getCartItemPrice";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { TotalPrice } from "./TotalPrice.types";

export const useCalculateCartTotal = () => {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = useMemo(() => {
    const price = cartItems.reduce((total, item) => {
      const product = products.find((product) => product.id === item.productId);
      if (!product) {
        return total;
      }
      const itemPrice = getCartItemPrice(item, product);
      return total + (itemPrice.discountPrice ?? itemPrice.originalPrice);
    }, 0);

    const priceInfo: TotalPrice = {
      discountApplied: price > 500000,
      summary: price,
      discountSummary: price * 0.85,
    };
    return priceInfo;
  }, [cartItems]);

  return totalPrice;
};
