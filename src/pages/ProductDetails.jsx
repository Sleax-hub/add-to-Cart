import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { stock } from "../assets/products";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const productId = Number(id);
  const product = stock.find((item) => item.id === productId);

  const [mainImage, setMainImage] = useState(product?.images[0] || "");

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-red-600 font-semibold">Product not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-amber-50 min-h-screen">
      <div className="max-w-5xl mx-auto p-6 bg-white mt-20">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image gallery */}
          <div className="flex flex-col space-y-4">
            <img
              src={mainImage}
              alt={product.name}
              className="rounded-xl shadow-lg object-contain w-full h-80 bg-gray-100 transition-all duration-300"
            />
            <div className="flex space-x-3">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i}`}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 object-contain bg-gray-100 rounded-lg border cursor-pointer
                              transition-transform duration-200 hover:scale-105
                              ${mainImage === img ? "ring-2 ring-blue-500" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.name}
            </h1>
            <p className="mt-2 text-gray-700">{product.description}</p>

            <div className="mt-4">
              <span className="text-orange-500 text-2xl font-semibold">
                Ksh. {product.price}
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              In stock: {product.stock} items
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
