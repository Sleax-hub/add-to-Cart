import React from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";       // ✅ add this
import { categories, stock } from "../assets/products";

const HomePage = () => {
  return (
    <div className="w-full bg-stone-200">
      <div className="max-w-7xl mx-auto px-4 text-black w-full pt-2">
        {/* search bar */}
        <div className="w-[60%] h-10 mx-auto flex items-center rounded-2xl overflow-hidden border border-slate-500 px-2">
          <input
            type="text"
            className=" w-full h-full px-2 focus:outline-none"
            placeholder="Search products..."
          />
          <FaSearch className="cursor-pointer text-xl" />
        </div>

        {/* categories filter */}
        <div className="pt-10 space-y-4">
          <h1 className="font-bold text-xl">Products by categories:</h1>
          <ul className="flex space-x-4">
            {categories.map((cat) => (
              <li
                key={cat}
                className="bg-amber-600 p-2 rounded-xl cursor-pointer hover:text-white font-semibold hover:scale-110 transform transition-transform duration-200"
              >
                {/* If you have category routes, wrap with Link */}
                {/* <Link to={`/category/${cat}`}>{cat}</Link> */}
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* products grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {stock.map((item) => (
              <Link        // ✅ wrap each card
                key={item.id}
                to={`/product/${item.id}`}   // route defined in App.jsx
                className="
                  flex flex-col
                  rounded-2xl overflow-hidden
                  bg-white shadow-md
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* Image */}
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="font-bold text-lg text-gray-900 truncate">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      In stock: {item.stock}
                    </span>
                    <span className="text-orange-500 font-semibold">
                      Ksh. {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
