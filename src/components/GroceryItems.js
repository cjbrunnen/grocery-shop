import "../App.css";
import PropTypes from "prop-types";

const GroceryItems = ({ items, addToCart }) => {
  return (
    <table border="3" id="grocery-items">
      <tbody>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
        </tr>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <button onClick={() => addToCart(item)}>Add</button>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

GroceryItems.propTypes = {
  items: PropTypes.array,
  addToCart: PropTypes.func
};

export default GroceryItems;
