import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Outcome {
  num: string;
  numColor: string;
  title: string;
  desc: string;
  borderColor: string;
}

const outcomes: Outcome[] = [
  {
    num: '01',
    numColor: 'bg-blue-500',
    title: 'Build Real Robots 🤖',
    desc: 'Kids assemble and program virtual robots using sensors, motors, and logic blocks — bringing their creations to life step by step.',
    borderColor: 'border-blue-400',
  },
  {
    num: '02',
    numColor: 'bg-purple-500',
    title: 'Learn AI Fundamentals 🧠',
    desc: 'Understand how AI works through fun games and activities — image recognition, voice commands, and smart decision-making.',
    borderColor: 'border-purple-400',
  },
  {
    num: '03',
    numColor: 'bg-cyan-500',
    title: 'Code with Python & Scratch 💻',
    desc: 'Start with drag-and-drop Scratch, then level up to real Python code — writing loops, functions, and mini-projects.',
    borderColor: 'border-cyan-400',
  },
  {
    num: '04',
    numColor: 'bg-orange-500',
    title: 'Solve Real-World Problems 🌍',
    desc: 'Design solutions to everyday challenges using STEM thinking — from smart traffic lights to environment-saving robots.',
    borderColor: 'border-orange-400',
  },
  {
    num: '05',
    numColor: 'bg-green-500',
    title: 'Build Teamwork & Confidence 🏆',
    desc: 'Collaborate in small groups, present projects, and earn a certificate that showcases every child\'s achievements.',
    borderColor: 'border-green-400',
  },
];

const topics: string[] = [
  '#robotics', '#AI', '#python', '#scratch', '#sensors',
  '#machinelearning', '#stem', '#coding', '#electronics',
  '#problemsolving', '#creativity', '#logic',
];

const topicColors: string[] = [
  'bg-blue-100 text-blue-700',
  'bg-purple-100 text-purple-700',
  'bg-cyan-100 text-cyan-700',
  'bg-orange-100 text-orange-700',
  'bg-green-100 text-green-700',
  'bg-pink-100 text-pink-700',
  'bg-yellow-100 text-yellow-700',
  'bg-indigo-100 text-indigo-700',
  'bg-red-100 text-red-700',
  'bg-teal-100 text-teal-700',
  'bg-rose-100 text-rose-700',
  'bg-emerald-100 text-emerald-700',
];

const stats = [
  { value: '500+', label: 'Kids Enrolled', emoji: '👦' },
  { value: '30',   label: 'Seats Left 🔥', emoji: '🪑' },
  { value: '4.9 ⭐', label: 'Average Rating', emoji: '🌟' },
];

const LearningOutcomes: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section id="outcomes" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">

        {/* ── Learning Outcomes ── */}
        <div>
          <div className="reveal text-center mb-12">
            <span className="inline-block bg-purple-100 text-purple-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              🎯 Learning Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
              What Your Child Will <span className="gradient-text">Learn</span> 🎯
            </h2>
            <p className="mt-3 text-slate-500 font-semibold max-w-xl mx-auto">
              Five powerful skills packed into four exciting weeks.
            </p>
          </div>

          <div className="space-y-4">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className={`reveal border-l-4 ${o.borderColor} bg-white rounded-2xl p-5 sm:p-6 flex gap-4 sm:gap-6 items-start shadow-sm hover:shadow-md transition-shadow`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`${o.numColor} text-white font-black text-sm w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {o.num}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-800 mb-1">{o.title}</h3>
                  <p className="text-slate-500 font-semibold text-sm leading-relaxed">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Topics (hashtag chips) ── */}
        <div className="reveal">
          <div className="text-center mb-8">
            <span className="inline-block bg-cyan-100 text-cyan-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              🔖 Topics Covered
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800">Explore These Subjects</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic, i) => (
              <span
                key={i}
                className={`${topicColors[i % topicColors.length]} font-bold text-sm px-4 py-2 rounded-full hover:scale-105 transition-transform cursor-default`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* ── Class Insights / Stats ── */}
        <div className="reveal">
          <div className="text-center mb-8">
            <span className="inline-block bg-orange-100 text-orange-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              📊 Class Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800">Trusted by Hundreds of Families</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white border-2 border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-2">{s.emoji}</div>
                <p className="text-4xl font-black text-slate-800">{s.value}</p>
                <p className="text-slate-500 font-bold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningOutcomes;
