import React, { useState, useEffect } from "react";
import API from "../api";
export default function ProductSearch() {
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    // Add to cart logic
    console.log("Adding product to cart:", product);
    alert("Product added to cart");
  };

  const handleBuyNow = (productId) => {
    // Buy now logic
    console.log("Buying product:", productId);
    alert("Proceeding to checkout...");
  };

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch(console.error);
  }, []);

  // filter products by search text
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.color.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 mx-auto text-center">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for Men, Women, Kids clothes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/2  p-3 border rounded-xl shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-8 border rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out"
            >
              <h3 className="text-lg font-semibold ">{product.name}</h3>
              {/* <p className="text-gray-500">{product.category}</p> */}
              <p className="text-gray-500 py-1">{product.description}</p>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-md"
              />
              <p className="font-bold py-5">price : ₹{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Add to Cart
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 mx-2 rounded"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
