import "../App.css";
import PropTypes from "prop-types";

const GroceryCart = ({ cartItems, cartTotal, removeFromCart, calculateTotal }) => {

  function subTotal() {
    return cartItems.reduce((subTotal, cartItem) => {
      const subtotal = subTotal + cartItem.price;
      return subtotal;
    }, 0);
  }

  const finalTotal = parseFloat(cartTotal).toFixed(2);

  if (cartItems.length === 0) {
    return "Cart is empty";
  }
  return (
    <table border="3" id="grocery-list">
      <tbody>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
        </tr>
        {cartItems.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
        <tr>
          <td>subtotal:</td>
          <td colSpan="2">£ {subTotal()}</td>
        </tr>
        <tr></tr>
        <tr>
          <td colSpan="3">
            <button onClick={() => calculateTotal()}>Chekout</button>
          </td>
        </tr>
        <tr>
          <td>total:</td>
          <td colSpan="2">£ {finalTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};

GroceryCart.propTypes = {
  cartItems: PropTypes.array,
  cartTotal: PropTypes.number,
  removeFromCart: PropTypes.func, 
  calculateTotal: PropTypes.func
};

export default GroceryCart;
