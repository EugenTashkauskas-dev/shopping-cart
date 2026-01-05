import classnames from "classnames";
import { setOpenedState } from "@entities/CartItem/model/Cart.slice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketIcon from "@assets/basket.svg?react";
import { selectCartItems } from "@entities/CartItem/model/selectors";

export const ShowShoppingCartModalButton = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const handleOpenShoppingCart = useCallback(() => {
    dispatch(setOpenedState(true));
  }, [dispatch]);

  return (
    <div className="w-10 h-10 fixed right-2 bottom-2 xl:top-2 z-100">
      <div className="relative">
        <button
          className={classnames("w-10 h-10 border-0 outline-0 cursor-pointer", {
            "text-green-500": !!items.length,
            "text-gray-500": !items.length,
          })}
          disabled={!items.length}
          onClick={handleOpenShoppingCart}
        >
          <BasketIcon className="w-10 h-10" />
          {items.length > 0 && (
            <div className="absolute w-6 h-6 right-0 bottom-0 bg-red-500 rounded-full text-center">
              <span className="text-sm/6 text-white">{items.length}</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
