import { selectCartItems } from "@entities/CartItem/model/selectors";
import { useSelector } from "react-redux";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { EmptyCartButton } from "@features/EmptyCart/ui/EmptyCartButton";
import { BuyAllButton } from "@features/BuyProducts/ui/BuyAllButton";
import { CartTotalPrice } from "@features/CalculateCartTotal/ui/CartTotalPrice";
// import { ShoppingCartItemCount } from "./ShoppingCartItemCount";

export const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);

  if (!cartItems?.length) {
    return null;
  }

  return (
    <div className="max-h-full">
      <div className="overflow-y-scroll max-h-(--shopping-cart-height)">
        {cartItems.map((item) => (
          <ShoppingCartItem key={item.productId} item={item} />
        ))}
      </div>
      <div className="text-md text-right">
        <CartTotalPrice />
      </div>
      <div className="flex flex-row justify-between items-center mx-2">
        <EmptyCartButton />
        <BuyAllButton />
      </div>
    </div>
  );
};
