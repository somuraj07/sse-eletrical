"use client";

import { useSession, signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();

  const userName = session?.user?.name;
  const userRole = session?.user?.role;

  return (
    <div className="min-h-screen bg-black text-white p-5 flex flex-col">

      <div className="bg-[#0f0f0f] border border-green-700 rounded-2xl p-6 shadow-lg">

        <h1 className="text-3xl font-bold text-green-500 mb-4">
          Dashboard
        </h1>

        {/* USER CARD */}
        <div className="flex items-center gap-4 bg-black p-4 rounded-xl border border-green-700 shadow-md">
          <div className="bg-green-600 p-3 rounded-full shadow-lg">
            <User className="w-7 h-7 text-black" />
          </div>

          <div>
            <p className="text-lg font-semibold text-green-400">
              {userName || "User"}
            </p>
            <p className="text-sm text-green-600">
              {userRole}
            </p>
          </div>
        </div>

        {/* CONTENT BOX */}
        <div className="mt-6 bg-black p-5 rounded-xl border border-green-800 shadow-inner">
          <p className="text-green-300 text-sm">
            Welcome to your control panel.  
            Here you can manage rooms, switches, AC, lights, fans, and more.
          </p>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={() => signOut({ callbackUrl: "/auth/signin" })}
          className="w-full mt-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>

      </div>
    </div>
  );
}
