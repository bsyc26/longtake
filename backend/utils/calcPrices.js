function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export function calcPrices(orderItems) {
  // calc the items price avoiding issues with floating point  
  const itemsPrice = addDecimals(
    orderItems.reduce((acc, item) => acc + (item.price * 100 * item.qty) / 100, 0)
  );

  // calc the shipping price
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 10);

  // calc the tax price
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));

  // calc the total price
  const totalPrice = (
    Number(itemsPrice)
    + Number(shippingPrice)
    + Number(taxPrice)
  ).toFixed(2);

  // return prices as strings fixed to 2 decimal places
  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
}
