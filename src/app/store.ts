import { shoppingCartSlice } from "@entities/CartItem/model/Cart.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [shoppingCartSlice.reducerPath]: shoppingCartSlice.reducer,
  },
});
