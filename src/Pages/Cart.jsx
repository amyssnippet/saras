import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showQR, setShowQR] = useState(false);
  const [whatsAppMsg, setWhatsAppMsg] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    const message = cart
      .map(item =>
        `${item.name} x${item.qty} = $${(item.price * item.qty).toFixed(2)}\nImage: ${item.image}`
      )
      .join('\n\n') + `\n\nTotal: $${totalPrice}`;
    setWhatsAppMsg(message);
    setShowQR(true);
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    setShowQR(false);
    alert('Cart cleared after sending message!');
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="container py-5 text-white rounded">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive mb-4">
            <table className="table table-dark table-bordered align-middle text-white">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px' }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${(item.price * item.qty).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleRemove(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h4>Total:</h4>
            <h4>${totalPrice}</h4>
          </div>

          <button
            className="btn btn-success w-50 mx-auto d-block shake-btn"
            onClick={handleCheckout}
            data-bs-toggle="modal"
            data-bs-target="#qrModal"
          >
            Proceed to WhatsApp
          </button>


          {/* Bootstrap Modal */}
          <div
            className="modal fade"
            id="qrModal"
            tabIndex="-1"
            aria-labelledby="qrModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-secondary">
                  <h5 className="modal-title" id="qrModalLabel">Send Cart to WhatsApp</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  {showQR && (
                    <>
                      <QRCode
                        value={`https://wa.me/918879958523?text=${encodeURIComponent(whatsAppMsg)}`}
                        size={256}
                      />
                      <p className="mt-3">Scan this QR code or click the button below:</p>
                      <a
                        href={`https://wa.me/918879958523?text=${encodeURIComponent(whatsAppMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success mt-2"
                      >
                        Open in WhatsApp
                      </a>
                    </>
                  )}
                </div>
                <div className="modal-footer border-secondary">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    data-bs-dismiss="modal"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
