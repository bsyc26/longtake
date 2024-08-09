export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // calc item price
  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + (item.price * 1000 * item.qty) / 100,
    0,
  );
  state.itemsPrice = addDecimals(itemsPrice);

  // calc shipping price (if order is over $100 then free, else $10
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  state.shippingPrice = addDecimals(shippingPrice);

  // calc tax price (15%)
  const taxPrice = 0.15 * itemsPrice;
  state.taxPrice = addDecimals(taxPrice);

  // calc total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  state.totalPrice = addDecimals(totalPrice);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
