import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

import About from "./About";
import Contact from "./Contact";

export default function ProductPage({ user }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  const addToCart = () => {
    if (!user) {
      alert("Please log in to add items to your cart.");
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((i) => i.id === product.id);
    if (existing) existing.qty++;
    else cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (!product) return <h1 className="text-center  text-7xl h-screen mt-[200px] ">Loading...</h1>;
  return (
    <div className="bg-white  rounded shadow md:flex  flex flex-col w-full ">
     <div className="flex flex-row md:flex-row gap-6">
       <img
        className="w-full h-[81vh] md:w-1/2 object-cover rounded"
        src={product.image || "/placeholder.png"}
      />
      <div>
        {/* <h1 className="text-5xl font-bold mb-6">{product.category}</h1> */}
        <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
        {/* <h2 className="text-xl mb-4">Brand Name : {product.brand}</h2> */}
        <p>Price : ₹ {product.price}</p>
        <p className="mt-2">{product.description}</p>
        <p className="mt-2">Rating : {product.rating} ⭐</p>
        
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
     </div>
      {/* <div className="text-black  h-[120vh] w-screen bg-red-200">
        <About />
      </div>
      <div className="text-black  h-[130vh] w-screen bg-purple-400">
        <Contact />
      </div> */}
    </div>
  );
}
