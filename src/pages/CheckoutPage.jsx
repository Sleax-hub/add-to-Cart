import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext); // ✅ useContext instead of useCart
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Calculate total price from cart
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thanks ${form.name}! Your order has been placed.`,{
        theme: "colored",
        autoClose:500,
    });
    clearCart();
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Shipping form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white shadow p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border rounded p-2"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border rounded p-2"
          />
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            required
            rows={3}
            className="w-full border rounded p-2"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Place Order
          </button>
        </form>

        {/* Order summary */}
        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>Ksh. {item.price * item.quantity}</span>
                </li>
              ))}
              <li className="flex justify-between font-bold border-t pt-2 mt-2">
                <span>Total:</span>
                <span>Ksh. {total}</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
