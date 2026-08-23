import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition duration-200 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav className="w-full h-16 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl h-full mx-auto px-6 flex  items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          MyStore
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/products" className={navStyle}>
            Products
          </NavLink>

          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;