import { Modal } from "@shared/ui/Modal/ui/Modal";
import { ShoppingCart } from "./ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenState } from "@entities/CartItem/model/selectors";
import { useCallback } from "react";
import { setOpenedState } from "@entities/CartItem/model/Cart.slice";

export const ShoppingCartModal = () => {
  const dispatch = useDispatch();
  const modalOpened = useSelector(selectOpenState);

  const handleCloseModal = useCallback(() => {
    dispatch(setOpenedState(false));
  }, [dispatch]);

  return (
    <Modal show={modalOpened} title="Shopping Cart" onClose={handleCloseModal}>
      <ShoppingCart />
    </Modal>
  );
};
