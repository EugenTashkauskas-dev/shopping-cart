import { formatPriceValue } from "@shared/utils/formatPriceValue";
import { useCalculateCartTotal } from "../model/useCalculateCartTotal";

export const CartTotalPrice = () => {
  const { discountApplied, summary, discountSummary } = useCalculateCartTotal();

  return (
    <div className="flex flex-col">
      {discountApplied && (
        <span className="text-md text-green-800 text-right">
          Discount applied: -${(summary - discountSummary).toFixed(2)}
        </span>
      )}
      <span className="text-md text-green-500 text-right">
        Total: ${formatPriceValue(summary)}
      </span>
    </div>
  );
};
