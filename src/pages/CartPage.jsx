import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  // Totals
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center mt-20">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-6">Your cart is currently empty.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-10">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {/* Cart Items */}
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-6"
            >
              {/* Product details */}
              <div className="flex items-center w-full sm:w-2/3">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded border bg-gray-100"
                />
                <div className="ml-4 flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="mt-1 text-orange-500 font-bold">
                    Ksh. {item.price}
                  </p>
                </div>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center mt-4 sm:mt-0 space-x-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  –
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Subtotal & Remove */}
              <div className="flex flex-col items-end mt-4 sm:mt-0">
                <span className="font-bold text-gray-800">
                  Ksh. {item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center sm:items-end">
          <div className="text-gray-700 mb-4 sm:mb-0">
            <p>
              Total Items: <span className="font-bold">{totalItems}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">
              Total: <span className="text-orange-500">Ksh. {totalPrice}</span>
            </p>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
