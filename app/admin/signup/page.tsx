"use client";

import { useState } from "react";
import { User, Mail, Lock, Shield } from "lucide-react";
export default function SignUpPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
      role: form.get("role"),
    };

    await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center p-4">
    <div className="w-full max-w-sm bg-black/90 backdrop-blur-xl border border-green-700/40 rounded-3xl p-8 shadow-[0_0_20px_rgba(0,255,0,0.15)]">
    <h1 className="text-3xl font-extrabold mb-8 text-center tracking-wide bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
    Create Account
    </h1>
    
    
    <form className="space-y-6">
    {/* Name */}
    <div className="flex flex-col space-y-1">
    <label className="text-sm text-green-300 font-medium">Full Name</label>
    <div className="relative">
    <User className="absolute left-3 top-3 w-5 h-5 text-green-500" />
    <input
    type="text"
    placeholder="Enter name"
    className="w-full bg-black border border-green-800 rounded-xl pl-11 pr-4 py-3 text-green-100 placeholder-green-700 focus:outline-none focus:border-green-500 transition shadow-[0_0_10px_rgba(0,255,0,0.1)]"
    />
    </div>
    </div>
    
    
    {/* Email */}
    <div className="flex flex-col space-y-1">
    <label className="text-sm text-green-300 font-medium">Email</label>
    <div className="relative">
    <Mail className="absolute left-3 top-3 w-5 h-5 text-green-500" />
    <input
    type="email"
    placeholder="Enter email"
    className="w-full bg-black border border-green-800 rounded-xl pl-11 pr-4 py-3 text-green-100 placeholder-green-700 focus:outline-none focus:border-green-500 transition shadow-[0_0_10px_rgba(0,255,0,0.1)]"
    />
    </div>
    </div>
    
    
    {/* Password */}
    <div className="flex flex-col space-y-1">
    <label className="text-sm text-green-300 font-medium">Password</label>
    <div className="relative">
    <Lock className="absolute left-3 top-3 w-5 h-5 text-green-500" />
    <input
    type="password"
    placeholder="Enter password"
    className="w-full bg-black border border-green-800 rounded-xl pl-11 pr-4 py-3 text-green-100 placeholder-green-700 focus:outline-none focus:border-green-500 transition shadow-[0_0_10px_rgba(0,255,0,0.1)]"
    />
    </div>
    </div>
    
    
    {/* Role */}
    <div className="flex flex-col space-y-1">
    <label className="text-sm text-green-300 font-medium">Role</label>
    <div className="relative">
    <Shield className="absolute left-3 top-3 w-5 h-5 text-green-500" />
    <select
    className="w-full appearance-none bg-black border border-green-800 rounded-xl pl-11 pr-4 py-3 text-green-100 focus:outline-none focus:border-green-500 transition shadow-[0_0_10px_rgba(0,255,0,0.1)]"
    >
    <option value="" className="text-black">Select role</option>
    <option value="ADMIN" className="text-black">Admin</option>
    <option value="USER" className="text-black">User</option>
    </select>
    </div>
    </div>
    
    
    {/* Submit Button */}
    <button
    type="submit"
    className="w-full bg-green-600 hover:bg-green-500 active:scale-95 py-3 rounded-xl font-bold text-black transition-all shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:shadow-[0_0_25px_rgba(0,255,0,0.5)]"
    >
    Sign Up
    </button>
    </form>
    </div>
    </div>
    );
    
}
