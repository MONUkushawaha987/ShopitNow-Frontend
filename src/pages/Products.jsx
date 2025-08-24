// import React, { useEffect, useState } from "react";
// import API from "../api";
// import ProductCard from "../components/ProductCard";
// import About from "./About";
// import Contact from "./Contact";

// function Products() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     API.get("/products")
//       .then((res) => setProducts(res.data))
//       .catch(console.error);
//   }, []);
//   return (
//     <>
//       {(!products.length) ? (
//         <h1 className="text-center text-7xl h-screen mt-[200px] ">Loading...</h1>
//       ) : (
//         <div className="flex flex-col items-center justify-center ">
//           <h1 className="text-2xl font-bold mt-4 mb-4">Latest Products</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
//             {products.map((p) => (
//               <ProductCard key={p._id} product={p} />
//             ))}
//           </div>
//           <div className="text-black  h-[120vh] w-screen bg-red-200">
//             <About />
//           </div>
//           <div className="text-black  h-[130vh] w-screen bg-purple-400">
//             <Contact />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// export default Products;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import ProductCard from "../components/ProductCard";
import About from "./About";
import Contact from "./Contact";

const Products = () => {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [color, setColor] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch(console.error);
  }, []);

  const filteredProducts = products
    .filter((p) => (category ? p.category === category : true))
    .filter((p) => (color ? p.color === color : true))
    .filter((p) => (priceRange ? p.price <= priceRange : true))
    .filter((p) => (size ? p.size === size : true))
    .sort((a, b) =>
      sort === "lowToHigh"
        ? a.price - b.price
        : sort === "highToLow"
        ? b.price - a.price
        : 0
    );

 
  return (
    <>
      <div className="flex p-6">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>

          {/* Category Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Category</h3>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="">All</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* Size Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Size</h3>
            <select
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="">All</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>
          {/* Color Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Color</h3>
            <select
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="">All</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
            </select>
          </div>

          {/* Sort By Price */}
          <div>
            <h3 className="font-medium">Sort by Price</h3>
            <select
              onChange={(e) => setSort(e.target.value)}
              className="w-full p-2 mt-1 border rounded"
            >
              <option value="">Default</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </div>

        {/* Products */}
        {/* <h1 className="text-3xl font-bold mb-6">Products</h1> */}
        <div className="w-full grid grid-cols-3 gap-6 px-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={() => {}}
            />
          ))}
        </div>
      </div>
      <hr className="my-8 border-t border-gray-500 " />
      <About />
      <hr className="my-8 border-t border-gray-500 " />
      <Contact />
    </>
  );
};

export default Products;

//             <div
//               key={product.id}
//               className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-cover rounded-md mb-3"
//               />
//               <h3 className="font-semibold text-lg">{product.name}</h3>
//               <p className="text-gray-600">
//                 {product.category} - {product.size}
//               </p>
//               <p className="font-bold mt-2">₹{product.price}</p>

//               <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded //??  hover:bg-blue-600 transition" onClick={addToCart}>
//                 Add to Cart
//               </button>
