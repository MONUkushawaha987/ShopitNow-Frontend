import React from "react";
import { useState } from "react";

const Contact = ({ user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleClick = () => {

    if (!user) {
      alert("Please log in to send a message.");
      return;
    }
    // Handle form submission
    alert(`Message sent from ${email}`);
  };

  return (
    <div
      className="lg:max-w-2xl w-11/12 mx-auto mt-16 mb-9 p-8 bg-white rounded shadow-lg"
      id="contact"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-700">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        Have questions or need support? Reach out to our team and we'll be happy
        to assist you!
      </p>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white font-bold py-3 rounded hover:bg-purple-700 transition-colors duration-300"
          onSubmit={handleClick}
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-600">
        Or email us at{" "}
        <a
          // href="mailto:support@shopitnow.com"
          href="#"
          className="text-purple-700 font-semibold"
        >
          support@shopitnow.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
