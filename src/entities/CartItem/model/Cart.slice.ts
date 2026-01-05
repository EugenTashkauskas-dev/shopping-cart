import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartItemsState } from "./types";

const initialState: CartItemsState = {
  items: [] as CartItem[],
  opened: false,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addNewItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId,
      );
      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push(action.payload);
    },
    setItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId,
      );
      if (!existingItem) {
        return;
      }
      existingItem.quantity = action.payload.quantity;
    },
    removeOneItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload,
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        return;
      }
      state.items = state.items.filter(
        (item) => item.productId !== action.payload,
      );
    },
    removeAllItems: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload,
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
    setOpenedState: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    },
  },
});

export const selectors = {
  selectCartItems: (state: { shoppingCart: typeof initialState }) =>
    state.shoppingCart.items,
};

export const {
  addNewItem,
  setItemQuantity,
  removeOneItem,
  removeAllItems,
  clearCart,
  setOpenedState,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
