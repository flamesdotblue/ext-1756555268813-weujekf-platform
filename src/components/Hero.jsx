import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold ring-1 ring-rose-200">
            Friendly shared budgeting
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Split expenses, save together, stay buddies
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            BuddyBudget helps roommates and couples track shared bills, settle up fairly, and hit savings goals—without the awkward spreadsheets.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#download" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition">Get Started Free</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50 transition">See how it works</a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>No math needed—fair splits</li>
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-sky-400"></span>Goal tracking with your buddy</li>
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400"></span>Instant reminders & receipts</li>
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>iOS and Android</li>
          </ul>
        </div>
        <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-white">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
