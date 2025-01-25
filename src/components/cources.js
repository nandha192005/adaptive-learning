import React, { useState } from 'react';

const ADDCources = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding courses to the cart
  const addToCart = (course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  return (
    <div>
      <h2>Courses in Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Start adding some courses!</p>
      ) : (
        <div>
          <ul>
            {cart.map((course, index) => (
              <li key={index}>
                <img src={course.imgSrc} alt={course.title} width="50" />
                <p>{course.title}</p>
                <p>Price: {course.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ADDCources;
