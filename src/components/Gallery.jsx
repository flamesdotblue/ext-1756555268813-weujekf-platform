import React from 'react';

const images = [
  {
    src: 'https://source.unsplash.com/featured/800x1600?budget-app,screenshot,ui',
    alt: 'Expense split screen from a budgeting app'
  },
  {
    src: 'https://source.unsplash.com/featured/1000x800?finance,illustration,colorful',
    alt: 'Bright finance illustration with coins and charts'
  },
  {
    src: 'https://source.unsplash.com/featured/900x1400?mobile,app,ui,finance',
    alt: 'Mobile budgeting interface with charts'
  },
  {
    src: 'https://source.unsplash.com/featured/1200x900?couple,planning,home,finance',
    alt: 'Couple planning a budget together'
  },
  {
    src: 'https://source.unsplash.com/featured/800x1200?goals,progress,app,ui',
    alt: 'Savings goal tracker interface'
  },
  {
    src: 'https://source.unsplash.com/featured/1200x1200?colorful,3d,illustration,coins',
    alt: 'Playful 3D finance illustration'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Screenshots & vibes</h2>
          <p className="mt-3 text-slate-600">A peek at BuddyBudget’s playful interface and bright illustrations that make money talks feel easy.</p>
        </div>
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4">
          {images.map((img, i) => (
            <figure key={i} className="break-inside-avoid rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" loading="lazy" />
            </figure>
          ))}
        </div></div>
      </div>
    </section>
  );
}
