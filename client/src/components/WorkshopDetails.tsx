import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface DetailCard {
  emoji: string;
  label: string;
  value: string;
  bg: string;
  border: string;
}

const cards: DetailCard[] = [
  { emoji: '📅', label: 'Start Date',  value: 'July 15, 2026',  bg: 'bg-blue-50',   border: 'border-blue-200' },
  { emoji: '⏳', label: 'Duration',   value: '4 Weeks',         bg: 'bg-purple-50',  border: 'border-purple-200' },
  { emoji: '💻', label: 'Mode',       value: 'Online (Live)',   bg: 'bg-cyan-50',    border: 'border-cyan-200' },
  { emoji: '🧒', label: 'Age Group',  value: '8 – 14 Years',   bg: 'bg-yellow-50',  border: 'border-yellow-200' },
  { emoji: '💰', label: 'Fee',        value: '₹2,999',          bg: 'bg-green-50',   border: 'border-green-200' },
  { emoji: '🏅', label: 'Certificate', value: 'Yes, Included',  bg: 'bg-orange-50',  border: 'border-orange-200' },
];

const WorkshopDetails: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section id="details" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="reveal text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
            📋 Workshop at a Glance
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
            Everything You Need to <span className="gradient-text">Know</span>
          </h2>
          <p className="mt-3 text-slate-500 font-semibold max-w-xl mx-auto">
            Clear, upfront details so kids and parents can plan ahead.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal ${card.bg} border-2 ${card.border} rounded-3xl p-5 sm:p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-4xl mb-3">{card.emoji}</span>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{card.label}</p>
              <p className="text-lg sm:text-xl font-black text-slate-800">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
