import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demonstration purposes
    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (credentials.username === adminUsername && credentials.password === adminPassword) {
      // Set a flag to indicate admin is logged in (you can use a token for real-world apps)
      localStorage.setItem("isAdmin", true);
      navigate("/admin/borrowers");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="p-8 bg-gray-100 max-w-md mx-auto rounded-lg h-screen shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
