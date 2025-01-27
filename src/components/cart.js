// src/components/cart.js
import React from 'react';

const Cart = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  style={{ width: '50px', marginRight: '10px' }}
                />
                {item.title}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onRemoveItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;