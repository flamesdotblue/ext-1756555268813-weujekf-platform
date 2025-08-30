import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-orange-400 text-white font-extrabold shadow">BB</span>
          <span className="text-lg font-extrabold tracking-tight">BuddyBudget</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#gallery" className="hover:text-slate-900">Gallery</a>
          <a href="#download" className="hover:text-slate-900">Download</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#download" className="hidden sm:inline-flex items-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-slate-800 transition">Get the App</a>
        </div>
      </div>
    </header>
  );
}
