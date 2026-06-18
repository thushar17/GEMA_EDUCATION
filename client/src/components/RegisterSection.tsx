import React from 'react';
import RegistrationForm from './RegistrationForm';
import { CheckCircle2 } from 'lucide-react';

const RegisterSection: React.FC = () => {
  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 rounded-l-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Transition Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mb-6 tracking-tight">
            Register Here for <span className="text-blue-600">Workshop</span>
          </h2>

        </div>

        {/* Premium Card Layout */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto relative z-20">

          {/* Left Side - Benefits Panel */}
          <div className="w-full lg:w-5/12 bg-gradient-to-br from-slate-900 to-slate-800 p-10 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white">Workshop Highlights</h3>
              <p className="text-slate-400 font-medium mb-8">Secure your spot before seats run out!</p>

              <ul className="space-y-5">
                {[
                  "Live Online Sessions",
                  "Project-Based Learning",
                  "Certificate Included",
                  "Beginner Friendly",
                  "Small Interactive Groups"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 font-semibold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <p className="text-sm font-bold text-cyan-400 mb-1 uppercase tracking-wider">Next Cohort</p>
              <p className="text-xl font-black text-white">Starts July 15, 2026</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-7/12 p-10 sm:p-14 bg-white">
            <div className="mb-8 text-center sm:text-left">
              <h3 className="text-2xl font-black text-slate-800 mb-2">Reserve Your Seat</h3>
              <p className="text-slate-500 font-medium">Fill in the details below and we'll reach out within 24 hours.</p>
            </div>

            <RegistrationForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default RegisterSection;
