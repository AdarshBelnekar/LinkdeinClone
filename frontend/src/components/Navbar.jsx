// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaEnvelope, FaCog } from "react-icons/fa";

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white relative">
      <Link to="/" className="text-xl font-bold text-blue-700">
        <h1>LinkdeinClone</h1>
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          <FaHome size={20} />
        </Link>

        <Link to="/messages" className="text-gray-700 hover:text-blue-600">
          <FaEnvelope size={20} />
        </Link>

        {isLoggedIn && (
          <Link to="/profile" className="text-gray-700 hover:text-blue-600">
            <FaUser size={20} />
          </Link>
        )}

        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <FaCog size={20} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/register"
            className="px-4 py-1 text-sm bg-blue-600 text-white rounded"
          >
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
