import React from 'react';

interface SidebarProps {
  onEnrollClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onEnrollClick }) => {
  return (
    <aside className="hidden lg:block lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-5">

        {/* ── Price Card ── */}
        <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-xl">
          {/* Urgency badge */}
          <div className="bg-yellow-100 text-yellow-700 font-black text-sm px-4 py-2 rounded-full text-center mb-4 flex items-center justify-center gap-2">
            🔥 Only 30 Seats Left!
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <p className="text-5xl font-black text-slate-800">₹2,999</p>
            <p className="text-slate-400 font-semibold text-sm mt-1">All inclusive — no hidden fees</p>
          </div>

          {/* Enroll button */}
          <button
            onClick={onEnrollClick}
            className="w-full bg-orange-500 hover:bg-orange-400 text-white font-black text-lg py-4 rounded-2xl shadow-lg hover:shadow-orange-400/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Enroll Now
          </button>

          {/* Divider */}
          <div className="border-t border-slate-100 my-5" />

          {/* Quick details list */}
          <ul className="space-y-3">
            {[
              { emoji: '📅', label: 'Start Date', value: 'July 15, 2026' },
              { emoji: '⏳', label: 'Duration', value: '4 Weeks' },
              { emoji: '💻', label: 'Mode', value: 'Online (Live)' },
              { emoji: '🧒', label: 'Age Group', value: '8 – 14 Years' },
              { emoji: '🏅', label: 'Certificate', value: 'Included ✓' },
            ].map(({ emoji, label, value }) => (
              <li key={label} className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-semibold flex items-center gap-2">
                  <span>{emoji}</span> {label}
                </span>
                <span className="font-black text-slate-800">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Trust badges ── */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-3xl p-5">
          <p className="text-center text-slate-600 font-bold text-sm mb-3">🌟 Trusted by Parents</p>
          <div className="flex justify-around text-center">
            <div>
              <p className="text-2xl font-black text-blue-600">500+</p>
              <p className="text-xs text-slate-500 font-semibold">Kids Trained</p>
            </div>
            <div className="border-l border-blue-200" />
            <div>
              <p className="text-2xl font-black text-orange-500">4.9 ⭐</p>
              <p className="text-xs text-slate-500 font-semibold">Rating</p>
            </div>
            <div className="border-l border-blue-200" />
            <div>
              <p className="text-2xl font-black text-green-500">100%</p>
              <p className="text-xs text-slate-500 font-semibold">Certified</p>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
