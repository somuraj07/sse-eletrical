"use client";

import Link from "next/link";
import { ShieldX, ArrowLeft } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center border border-gray-200">
        
        <div className="flex justify-center mb-6">
          <ShieldX className="w-20 h-20 text-red-500 animate-pulse" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Unauthorized Access
        </h1>

        <p className="text-gray-500 mb-6">
          You do not have permission to view this page.  
          Please login with the correct role.
        </p>

        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-medium shadow hover:bg-blue-700 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Go Back Home</span>
        </Link>
      </div>
    </div>
  );
}
