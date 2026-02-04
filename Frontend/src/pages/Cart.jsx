import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <header className="home-header">
        <div className="home-title" onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>ShopEase</div>
        <div className="home-actions">
          <button className="btn-header" onClick={() => navigate("/home")}>
            🏠 Home
          </button>
        </div>
      </header>

      <div style={{ padding: "80px 20px 20px" }}>
        <h2>🛒 Your Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <div style={{ textAlign: "left", marginTop: "50px" }}>
            <h3>Your cart is empty!</h3>
            <button
              className="btn-cart"
              onClick={() => navigate("/home")}
              style={{ marginTop: "20px", width: "auto", padding: "8px 20px", fontSize: "0.9rem" }}
            >
              Shop Now
            </button>
          </div>
        ) : (
          <>
            <div className="home-grid">
              {cart.map((product, index) => (
                <div className="home-card" key={index}>
                  <h4>{product.name}</h4>
                  <p>₹{product.price.toLocaleString()}</p>

                  <button
                    className="btn-cart"
                    style={{ backgroundColor: "#ff4d4d" }}
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "40px", borderTop: "1px solid #ccc", paddingTop: "20px", textAlign: "left" }}>
              <h3>Total: ₹{total.toLocaleString()}</h3>
              <button
                className="btn-cart"
                style={{ width: "auto", padding: "10px 25px", fontSize: "1rem" }}
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
