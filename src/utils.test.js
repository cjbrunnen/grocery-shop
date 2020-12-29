import { calcAppleDiscount, calcBreadDiscount } from "./utils";

// SHOPPING LISTS
const applesCart = [
  { name: "Apples", price: 1 },
  { name: "Apples", price: 1 },
];
// RETURN 1.8

const soupsOne = [
  { name: "Soup", price: 0.65 },
  { name: "Soup", price: 0.65 },
];
const breadsOne = [{ name: "Bread", price: 0.8 }];
// RETURN DISCOUNT PRICE 0.4

const soupsTwo = [
  { name: "Soup", price: 0.65 },
  { name: "Soup", price: 0.65 },
  { name: "Soup", price: 0.65 },
  { name: "Soup", price: 0.65 }
];
const breadsTwo = [
  { name: "Bread", price: 0.8 },
  { name: "Bread", price: 0.8 }
];
// RETURN DISCOUNT PRICE 0.8

const milkCart = [
  { name: "Milk", price: 1.3 },
  { name: "Milk", price: 1.3 },
];
// RETURN 2.6


test("apply apple discount", () => {
  const startState = applesCart;
  const finState = calcAppleDiscount(startState, 10);
  const finStateStr = finState.toString();

  expect(finStateStr).toBe("1.8");
});

test("if user buys 2x soup and 1x bread, bread is half price", () => {
  const finState = calcBreadDiscount(soupsOne, breadsOne);
  const discountedBread = finState.discountPrice;
  const finStateStr = discountedBread.toString();
  expect(finStateStr).toBe("0.4");
});

test("if user buys 4x soup and 2x bread, bread is half price", () => {
  const finState = calcBreadDiscount(soupsTwo, breadsTwo);
  const discountedBread = finState.discountPrice;
  const finStateStr = discountedBread.toString();
  expect(finStateStr).toBe("0.8");
});
