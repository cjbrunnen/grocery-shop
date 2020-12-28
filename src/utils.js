import { GROCERY_ITEMS } from "./constants";

export function calcBreadDiscount(soups, breads) {
  let numberOfBreads = breads.length;
  let soupDuos = Math.floor(soups.length / 2);
  const breadPrice = GROCERY_ITEMS.filter((item) => item.name === "Bread")[0]
    .price;
  let discountedBread = 0;
  const diff = numberOfBreads - soupDuos;
  const fullPrice = diff > 0 ? breadPrice * diff : 0;
  while (soupDuos > 0 && numberOfBreads > 0) {
    discountedBread += breadPrice / 2;
    numberOfBreads = numberOfBreads - 1;
    soupDuos = soupDuos - 1;
  }
  return {
    discountPrice: discountedBread,
    fullPrice,
  };
}

export function calcAppleDiscount(apples, discount) {
  if (apples && !apples.length) {
    return 0;
  } else {
    const noOfBags = apples.length;
    const price = apples[0].price;
    const calcDiscount = (discount / 100) * price;
    return noOfBags * price - noOfBags * calcDiscount;
  }
}

export const reducer = (accumulator, currentValue) => accumulator + currentValue;