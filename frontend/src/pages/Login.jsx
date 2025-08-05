import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://linkdeinclone.onrender.com/api/login", {
        email,
        password,
      });

      if (res.data.token) {
        // Save token to localStorage
        localStorage.setItem("token", res.data.token);
        alert("Login successful");
        navigate("/home"); // 
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#F4F2EE] px-4">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Welcome back</h1>
        <p className="text-gray-600">Sign in to stay connected to your professional world.</p>
      </div>
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign in</h2>
        <input
          type="email"
          placeholder="Email or Phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition"
        >
          Sign in
        </button>
        <p className="text-sm text-gray-600 text-center">
          New to LinkedIn?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Join now
          </a>
        </p>
      </form>
    </div>
  );
}


