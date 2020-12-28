import "./App.css";
import React, { useState } from "react";
import GroceryCart from "./components/GroceryCart";
import GroceryItems from "./components/GroceryItems";
import { GROCERY_ITEMS } from "./constants";
import { calcBreadDiscount, calcAppleDiscount, reducer } from "./utils";

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)

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
    const soups = cart.filter(byItemName("Soup"));
    const breads = cart.filter(byItemName("Bread"));
    const apples = cart.filter(byItemName("Apples"));
    const milk = cart.filter(byItemName("Milk"));

    const breadTotal = calcBreadDiscount(soups, breads);
    const applesTotal = calcAppleDiscount(apples, 10);
    const milkTotal = calcGenericSubotal(milk);
    const soupsTotal = calcGenericSubotal(soups);

    const allTotals = [
      breadTotal.discountPrice,
      breadTotal.fullPrice,
      applesTotal,
      milkTotal,
      soupsTotal,
    ];
    
    const finalTotal = allTotals.reduce(reducer)
    return setCartTotal(finalTotal)
  }

  return (
    <div className="App">
      <GroceryItems items={GROCERY_ITEMS} addToCart={addToCart} />
      <GroceryCart
        cartItems={cart}
        cartTotal={cartTotal}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}

export default App;
