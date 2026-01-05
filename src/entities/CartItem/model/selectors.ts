import type { AppState } from "@shared/types/app.types";
import { shoppingCartSlice } from "./Cart.slice";

export const selectCartItems = (state: AppState) =>
  state[shoppingCartSlice.name].items;

export const selectOpenState = (state: AppState) =>
  state[shoppingCartSlice.name].opened;
