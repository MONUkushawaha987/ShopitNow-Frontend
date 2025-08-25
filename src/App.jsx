import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductSearch from "./pages/ProductSearch";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { setAuthToken } from "./api";


function App() {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (token) setAuthToken(token);
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (user?.token) setAuthToken(user.token);
  }, [user]);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="container m-0 p-0 w-screen">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage user={user} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/admin" element={<Admin user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact user={user} />} />
         <Route path="/search" element={<ProductSearch />} />
        </Routes>
        {user && <Footer user={user} />}
      </div>
    </>
  );
}

export default App;
