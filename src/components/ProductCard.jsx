import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow md:my-0 my-3">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image || "/placeholder.png"}
          alt={product.title}
          className="h-80 w-full object-cover rounded"
        />
        <h3 className="mt-2 font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-600">₹ {product.price}</p>
        {/* <div className="mt-2 font-bold">${product.price.toFixed(2)}</div> */}
      </Link>
    </div>
  );
}
