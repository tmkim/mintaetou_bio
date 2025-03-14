"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(apiUrl + "login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setError("Invalid username or password");
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.access);
      router.push("/redirect");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
<div className="flex flex-col min-h-screen p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mx-auto my-[10%]">
    <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

    {error && (
      <p className="text-red-500 text-sm text-center mb-4">{error}</p>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>
    </form>
  </div>
</div>

  );
}
