import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser({ ...user, token });
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={submit} className=" w-4/5  md:max-w-md mx-auto bg-white p-6 rounded shadow md:mt-28 mt-44">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input className="w-full p-2 border rounded mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full p-2 border rounded mb-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
  );
}
