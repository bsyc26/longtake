const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // calc item price
  state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) =>
    acc + item.price * item.qty, 0
  ));

  // calc shipping price (if order is over $100 then free, else $10
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // calc tax price (15%)
  state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));

  // calc total price
  state.totalPrice = (
    Number(state.itemPrice)
    + Number(state.shippingPrice)
    + Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));
};
