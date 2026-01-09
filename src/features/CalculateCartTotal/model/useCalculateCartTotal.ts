import { selectCartItems } from "@entities/CartItem/model/selectors";
import { products } from "@entities/Product/model/products.mock";
import { getCartItemPrice } from "@shared/utils/getCartItemPrice";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useCalculateCartTotal = () => {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const product = products.find((product) => product.id === item.productId);
      if (!product) {
        return total;
      }
      const itemPrice = getCartItemPrice(item, product);
      return total + (itemPrice.discountPrice ?? itemPrice.originalPrice);
    }, 0);
  }, [cartItems]);

  return totalPrice;
};
