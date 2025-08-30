import React from 'react';
import { PiggyBank, Users, Target, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Fair splits in seconds',
    text: 'Add an expense, choose who participated, and BuddyBudget does the math—debts stay balanced and transparent.'
  },
  {
    icon: PiggyBank,
    title: 'Shared goals that stick',
    text: 'Save for furniture, trips, or rainy days together with progress rings, nudges, and streaks that keep you motivated.'
  },
  {
    icon: Target,
    title: 'Smart reminders',
    text: 'Automatic pings before due dates with receipt attachments and one-tap settle up.'
  },
  {
    icon: Shield,
    title: 'Private & secure',
    text: 'Your data is encrypted and stays between you and your buddy—period.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Built for buddies, not spreadsheets</h2>
          <p className="mt-3 text-slate-600">Playful design, powerful math, and zero stress. Everything you need to split and save—together.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-tr from-sky-400 via-fuchsia-400 to-amber-400 text-white shadow">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
              <div className="absolute -z-[0] pointer-events-none blur-2xl opacity-40 group-hover:opacity-70 transition inset-0 bg-gradient-to-tr from-fuchsia-300 via-rose-300 to-amber-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
