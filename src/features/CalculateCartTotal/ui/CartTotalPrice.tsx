import { formatPriceValue } from "@shared/utils/formatPriceValue";
import { useCalculateCartTotal } from "../model/useCalculateCartTotal";

export const CartTotalPrice = () => {
  const totalPrice = useCalculateCartTotal();

  return (
    <span className="text-md text-green-500 text-right">
      Total: ${formatPriceValue(totalPrice)}
    </span>
  );
};
