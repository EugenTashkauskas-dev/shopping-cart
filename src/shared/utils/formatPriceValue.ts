export const formatPriceValue = (price: number) =>
  `${price ? price.toFixed(2) : '0.00'}`;
