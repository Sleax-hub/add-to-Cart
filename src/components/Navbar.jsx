import React, { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="w-full bg-stone-300 shadow-md h-16 fixed top-0 z-50">
      <nav className="max-w-7xl px-6 mx-auto flex h-full items-center justify-between">
        <Link to="/" className="font-extrabold tracking-wide text-2xl">
          CART
        </Link>

        <ul className="flex gap-4 items-center">
          <li><Link to="/" className="font-semibold text-lg hover:border-b-2 border-b-orange-400">Home</Link></li>
          <li className="font-semibold text-lg hover:border-b-2 border-b-orange-400">Categories</li>
          <li className="font-semibold text-lg hover:border-b-2 border-b-orange-400">Overseas</li>
          <li className="font-semibold text-lg hover:border-b-2 border-b-orange-400">About</li>
        </ul>

        <div className="flex items-center space-x-4">
          <BiSearchAlt className="text-3xl hover:text-orange-500 cursor-pointer" />
          <Link to="/cart" className="relative">
            <FaShoppingBag className="text-2xl" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1.5">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
