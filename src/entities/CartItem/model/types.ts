export type CartItemsState = {
  items: CartItem[];
  opened: boolean;
};

export type CartItem = {
  productId: number;
  quantity: number;
};
