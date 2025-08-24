import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", { name, email, password });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser({ ...user, token });
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded shadow mt-14">
      <h2 className="text-xl font-bold mb-4">Create account</h2>
      <input className="w-full p-2 border rounded mb-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input className="w-full p-2 border rounded mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full p-2 border rounded mb-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="w-full bg-green-600 text-white p-2 rounded">Register</button>
    </form>
  );
}
