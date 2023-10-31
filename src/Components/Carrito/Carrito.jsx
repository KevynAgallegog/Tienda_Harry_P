import React, { useState } from 'react';
import './Carrito.css';

function Cart({ cartItems, removeFromCart, addToCart }) {
  const [isPurchaseComplete, setPurchaseComplete] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      if (cartItems.length > 8) {
        window.alert('¡Compra no válida! No puedes comprar más de 8 libros a la vez.');
        return;
      }

      setPurchaseComplete(true);
      window.alert('¡Compra exitosa! Gracias por comprar.');
    } else {
      window.alert('¡Compra no válida! El carrito está vacío.');
    }
  };

  const handleRemove = (item) => {
  
    removeFromCart(item);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length > 8 ? (
        <p>Lo sentimos, no puedes comprar más de 8 libros a la vez.</p>
      ) : cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-item book-card"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="item-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="item-details">
              <p>{item.title} - ${item.price}</p>
            </div>
            <div className="item-quantity">
              <button className="increment" onClick={() => addToCart(item)}>
                +
              </button>
              <span>{item.quantity}</span>
              <button className="decrement" onClick={() => removeFromCart(item)}>
                -
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Su carrito está vacío.</p>
      )}
      <div className="total">
        <p>Total: ${calculateTotal()}</p>
      </div>
      <button className="buy-button" onClick={handlePurchase}>
        Comprar
      </button>
      {isPurchaseComplete && (
        <p className="purchase-confirmation">Su compra ha sido confirmada. ¡Gracias por comprar!</p>
      )}
    </div>
  );
}

export default Cart;



