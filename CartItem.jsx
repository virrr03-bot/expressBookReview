
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h2>e-plantShopping</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ${item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item)}>
                      +
                    </button>
                  </div>

                  <p>
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button onClick={() => handleRemove(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h2>
                Total Amount: ${totalAmount.toFixed(2)}
              </h2>

              <button onClick={handleCheckout}>
                Checkout
              </button>

              <Link to="/plants">
                <button>Continue Shopping</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
