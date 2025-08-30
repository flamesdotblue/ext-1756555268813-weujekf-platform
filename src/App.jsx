import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-sky-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <section id="download" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 rounded-3xl p-1 shadow-lg">
              <div className="bg-white rounded-[22px] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Start splitting smarter today</h2>
                  <p className="mt-3 text-slate-600">BuddyBudget makes it easy to track shared expenses, settle up, and crush goals together. Download the app and invite your buddy.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition">Download on the App Store</a>
                    <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50 transition">Get it on Google Play</a>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[9/19] w-full max-w-sm mx-auto rounded-3xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
                    <img
                      src="https://source.unsplash.com/featured/800x1600?mobile-app,finance,budget"
                      alt="BuddyBudget mobile app screenshot"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-12 border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} BuddyBudget. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#gallery" className="hover:text-slate-900">Gallery</a>
            <a href="#download" className="hover:text-slate-900">Download</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
