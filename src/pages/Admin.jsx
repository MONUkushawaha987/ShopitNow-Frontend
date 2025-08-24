import React, { useEffect, useState } from "react";
import API from "../api";
import axios from "axios";

// export default function Admin({ user }) {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     if (!user?.isAdmin) return;
//     API.get("/products").then(res => setProducts(res.data));
//   }, [user]);

//   if (!user) return <div>Please login</div>;
//   if (!user.isAdmin) return <div>Admin access only</div>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Admin</h1>
//       <p className="mb-4">Create / edit / delete products via API</p>
//       <div className="grid md:grid-cols-2 gap-4">
//         {products.map(p => (
//           <div key={p._id} className="bg-white p-4 rounded shadow">
//             <div className="font-semibold">{p.name}</div>
//             <div className="text-sm text-gray-600">{p.description}</div>
//             <div className="mt-2 font-bold">₹ {p.price.toFixed(2)}</div>
//             <div className="flex space-x-2">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded">Edit</button>
//               <button className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";

export default function Admin({ user }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!user?.isAdmin) return;
    API.get("/products").then((res) => setProducts(res.data));
  }, [user]);

  if (!user)
    return (
      <h1 className="text-red-500 text-5xl text-center mt-[40vh]">
        Please login
      </h1>
    );
  if (!user.isAdmin)
    return (
      <h1 className="text-red-500 text-4xl text-center my-[30vh]">
        Admin access only
      </h1>
    );
  // const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
    rating: "",
    stock: "",
    brand: "",
    warranty: "",
    colors: "",
    sizes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // axios.post("http://localhost:5000/api/products", form, {
  //   headers: { "x-api-key": "your-secret-key" },
  // });
  // const handleAdd = async () => {
  //   const res = await axios.post("http://localhost:5000/api/products", {
  //     ...form,
  //     colors: form.colors.split(","),
  //     sizes: form.sizes.split(","),
  //   });
  //   setProducts([...products, res.data]);
  // };

  // const handleDelete = async (id) => {
  //   await axios.delete(`http://localhost:5000/api/products/${id}`);
  //   setProducts(products.filter((p) => p.id !== id));
  // };

  // const handleUpdate = async (id) => {
  //   const res = await axios.put(`http://localhost:5000/api/products/${id}`, {
  //     ...form,
  //     colors: form.colors.split(","),
  //     sizes: form.sizes.split(","),
  //   });
  //   setProducts(products.map((p) => (p.id === id ? res.data : p)));
  // };

  // const handleEdit = (product) => {
  //   setForm({
  //     ...product,
  //     colors: product.colors.join(","),
  //     sizes: product.sizes.join(","),
  //   });
  // };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

      {/* Form */}
      <div className="max-w-3xl  mx-auto mb-8 bg-white p-6 shadow-lg rounded-2xl">
        <div className="grid gap-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="rating"
            type="number"
            placeholder="Rating"
            value={form.rating}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="stock"
            type="number"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="brand"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="warranty"
            placeholder="Warranty"
            value={form.warranty}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="colors"
            placeholder="Colors (comma separated)"
            value={form.colors}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="sizes"
            placeholder="Sizes (comma separated)"
            value={form.sizes}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <button
            // onClick={handleAdd}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-3 gap-3 w-full mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-md rounded-2xl flex flex-col md:flex-row justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-gray-800 font-bold">${product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>

            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              {/* <button
                onClick={() => handleEdit(product)}
                className="border px-4 py-1 rounded hover:bg-gray-100"
              >
                Edit
              </button> */}
              <button
                // onClick={() => handleUpdate(product.id)}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Update
              </button>
              <button
                // onClick={() => handleDelete(product.id)}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
