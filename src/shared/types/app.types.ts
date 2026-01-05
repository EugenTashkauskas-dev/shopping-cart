import type { CartItemsState } from "@entities/CartItem/model/types";

export type AppState = {
  shoppingCart: CartItemsState;
};

export type ItemPrice = {
  originalPrice: number;
  discountPrice?: number;
};
