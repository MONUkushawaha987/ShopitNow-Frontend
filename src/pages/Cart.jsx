import React, { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => setCart(JSON.parse(localStorage.getItem("cart") || "[]")), []);
  const updateQty = (id, qty) => {
    const newCart = cart.map(i => i._id === id ? { ...i, qty } : i);
    setCart(newCart); localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const removeItem = id => {
    const newCart = cart.filter(i => i._id !== id);
    setCart(newCart); localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const total = cart.reduce((s,i)=> s + i.price * i.qty, 0);
  const checkout = () => alert("Mock checkout — integrate payments (Stripe/PayPal) here.");
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="mb-4 font-bold  text-5xl  mt-10 ">Your Cart</h1>
      {cart.length === 0 ? <p className="text-gray-600  text-3xl h-[20vh] mt-10 ">Your cart is empty</p> : (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            {cart.map(item => (
              <div key={item._id} className="bg-white p-4 rounded mb-2 flex items-center justify-between">
                <div>
                  <div>{item.image && <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded" />}</div>
                  <div className="font-semibold">{item.name}</div>
                  <p>{item.description}</p>
                  {/* <div className="text-sm">${item.price.toFixed(2)}</div> */}
                </div>
                <div className="flex items-center space-x-2">
                  <input type="number" min="1" value={item.qty} onChange={e=> updateQty(item._id, Math.max(1, +e.target.value))} className="w-16 p-1 border rounded" />
                  <button onClick={() => removeItem(item._id)} className="text-red-500">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-lg font-semibold">Order summary</div>
            <div className="mt-2">Items: {cart.length}</div>
            <div className="mt-2 font-bold text-xl">Total: ₹ {total.toFixed(2)}</div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded" onClick={checkout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
