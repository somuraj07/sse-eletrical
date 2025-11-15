"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid username or password");
      setLoading(false);
      return;
    }

    // Success tick animation
    setSuccess(true);
    setTimeout(() => {
      window.location.href = "/"; // your protected page
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center h-screen px-4 bg-black">

      {/* SUCCESS SCREEN */}
      {success && (
        <div className="absolute flex flex-col items-center gap-3">
          <CheckCircle className="w-20 h-20 text-green-500 animate-bounce" />
          <p className="text-green-400 text-lg font-semibold">Login Successful</p>
        </div>
      )}

      {!success && (
        <div className="bg-[#0f0f0f] w-full max-w-sm p-6 rounded-2xl shadow-xl border border-green-700">

          <h1 className="text-3xl text-green-500 font-bold text-center mb-6">
             Login
          </h1>

          {error && (
            <p className="text-red-500 text-sm text-center mb-3">{error}</p>
          )}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="text-green-400 text-sm">Email</label>
              <div className="flex items-center mt-1 bg-black border border-green-700 rounded-lg px-3 py-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" stroke="none"></path>
                  <path d="M4 4l8 8 8-8"></path>
                </svg>

                <input
                  type="email"
                  className="w-full bg-transparent outline-none text-white ml-3"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="mb-6">
              <label className="text-green-400 text-sm">Password</label>
              <div className="flex items-center mt-1 bg-black border border-green-700 rounded-lg px-3 py-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17v.01"></path>
                  <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                  <path d="M8 11V7a4 4 0 118 0v4"></path>
                </svg>

                <input
                  type="password"
                  className="w-full bg-transparent outline-none text-white ml-3"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* LOGIN BUTTON */}
            <button
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold text-black bg-green-500 hover:bg-green-400 transition-all active:scale-95 ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Verifying..." : "Login"}
            </button>

          </form>
        </div>
      )}
    </div>
  );
}
