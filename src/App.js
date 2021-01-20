import "./App.css";
import React, { useState, useEffect } from "react";
import GroceryCart from "./components/GroceryCart";
import GroceryItems from "./components/GroceryItems";
import { GROCERY_ITEMS, SOUP, BREAD, APPLES, MILK } from "./constants";
import { calcBreadDiscount, calcAppleDiscount, reducer } from "./utils";

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [breadDiscount, setBreadDiscount] = useState(null);
  const [applesDiscount, setApplesDiscount] = useState(null);

  useEffect(() => {
    if (cart.length === 0) setCartTotal(0);
  }, [cart]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    setCart([...cart]);
  }

  function calcGenericSubotal(item) {
    if (item && !item.length) {
      return 0;
    } else {
      const num = item.length;
      const price = item[0].price;
      return num * price;
    }
  }

  function calculateTotal() {
    const byItemName = (name) => (item) => item.name === name;
    const soups = cart.filter(byItemName(SOUP));
    const breads = cart.filter(byItemName(BREAD));
    const apples = cart.filter(byItemName(APPLES));
    const milk = cart.filter(byItemName(MILK));

    const breadTotal = calcBreadDiscount(soups, breads);
    const applesTotal = calcAppleDiscount(apples, 10);
    const milkTotal = calcGenericSubotal(milk);
    const soupsTotal = calcGenericSubotal(soups);

    setBreadDiscount(
      breadTotal.discountPrice > 0 ? breadTotal.discountPrice : null
    );
    setApplesDiscount(
      applesTotal > 0 ? applesTotal : null
    )

    const allTotals = [
      breadTotal.discountPrice,
      breadTotal.fullPrice,
      applesTotal,
      milkTotal,
      soupsTotal,
    ];

    const finalTotal = allTotals.reduce(reducer);
    return setCartTotal(finalTotal);
  }

  return (
    <div className="App">
      <GroceryItems items={GROCERY_ITEMS} addToCart={addToCart} />
      <GroceryCart
        cartItems={cart}
        cartTotal={cartTotal}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
        breadDiscount={breadDiscount}
        applesDiscount={applesDiscount}
      />
    </div>
  );
}

export default App;
