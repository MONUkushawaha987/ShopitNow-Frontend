import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FcShop } from "react-icons/fc";
import { TfiSearch } from "react-icons/tfi";
export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  return (
    <nav className="bg-white shadow md:relative fixed md:block z-50 top-0 left-0 right-0">
      <div className="container mx-auto p-1.5 md:p-4 flex justify-between items-center ">
        <div className="flex items-center ">
          <Link to="/" className="font-bold text-xl mr-8  hidden md:inline-block ">
            <FcShop size={32} className="inline-block mr-2 ml-3" />
            ShopitNow
          </Link>
          <Link to="/" className="text-gray-600 hover:text-blue-500 md:mr-6 mr-3">
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-600 hover:text-blue-500 md:mr-6 mr-1"
          >
            Products
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500 mr-6  hidden md:inline-block">
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-500 mr-6  hidden md:inline-block"
          >
            Contact
          </Link>
          <Link to="/search" className="text-gray-600 hover:text-blue-500 mr-6">
            <TfiSearch className="inline-block ml-4 md:size-6 size-4 " />
            {/* <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded px-2 py-1"
            /> */}
          </Link>       
          
        </div>
        <div className="flex items-center space-x-4">
          {/* <h1>{cartItems.length}</h1> */}
          <Link to="/cart ">
            <GiShoppingCart className="inline-block text-blue-600 md:size-8 size-5" />
          </Link>
          {user ? (
            <>
              {user.isAdmin && <Link to="/admin" className="hidden md:inline">Admin</Link>}
              <span
                style={{
                  fontWeight: "bold",
                  border: "0px solid blue",
                  padding: "5px 10px",
                  borderRadius: "50%",
                  background: "lightgray",
                }}
              >
                {user.name[0]}
              </span>
              <button
                onClick={logout}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link
                to="/register"
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
