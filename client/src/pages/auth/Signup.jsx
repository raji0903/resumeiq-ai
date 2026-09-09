import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      console.log(response.data);

      navigate("/dashboard");
    } catch (err) {
  console.error("Signup Error:", err);

  setError(
    err.response?.data?.message ||
    err.response?.data?.error ||
    err.message ||
    "Something went wrong. Please try again."
  );
}
 finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070d1f] px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl p-12 shadow-xl">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-slate-800">
            Create your account
          </h1>

          <p className="text-xl text-slate-500 mt-4">
            Start analyzing and improving your resume.
          </p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 px-5 py-4 rounded-xl mb-6 text-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 border border-slate-300 rounded-xl text-xl text-slate-800 outline-none focus:border-blue-600"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 border border-slate-300 rounded-xl text-xl text-slate-800 outline-none focus:border-blue-600"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-6 py-5 border border-slate-300 rounded-xl text-xl text-slate-800 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-5 rounded-xl transition"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-center text-slate-500 text-lg mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}