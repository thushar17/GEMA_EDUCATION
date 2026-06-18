import React from 'react';
import { motion } from 'framer-motion';

const weeks = [
  {
    week: "Level 1",
    title: "Meet Robots ",
    points: ["Introduction to robotics", "Sensors and motors", "First robot simulation"],
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: "1"
  },
  {
    week: "Level 2",
    title: "Learn Coding ",
    points: ["Scratch programming", "Logic and problem solving", "Interactive mini projects"],
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: "2"
  },
  {
    week: "Level 3",
    title: "Discover AI ",
    points: ["What is Artificial Intelligence", "Image recognition", "Voice assistants and automation"],
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: "3"
  },
  {
    week: "Level 4",
    title: "Build & Showcase ",
    points: ["Final robotics project", "Project presentation", "Certificate of completion"],
    color: "bg-green-500",
    lightColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: "4"
  }
];

const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="pt-24 pb-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            Your 4-Week <span className="text-blue-600">Learning Journey</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Every week unlocks a new skill and brings your child closer to building amazing projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Vertical line for desktop timeline */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1.5 bg-slate-200 -translate-x-1/2 rounded-full" />

          <div className="space-y-6 md:space-y-0">
            {weeks.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-8`}
                >
                  {/* Timeline node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-slate-100 items-center justify-center z-10 shadow-md">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white font-black text-sm shadow-inner`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-[46%] ${isEven ? 'md:text-right md:pr-4' : 'md:text-left md:pl-4'}`}>
                    <div className={`bg-white border-2 ${item.borderColor} p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group`}>

                      {/* Decorative background shape */}
                      <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-20 ${item.color} transition-transform group-hover:scale-150`} />

                      <div className="relative z-10">
                        <span className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-black mb-4 shadow-sm uppercase tracking-wider ${item.color}`}>
                          {item.week}
                        </span>
                        <h3 className="text-2xl font-black text-slate-800 mb-4">{item.title}</h3>
                        <ul className={`space-y-2.5 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col items-start`}>
                          {item.points.map((pt, i) => (
                            <li key={i} className="text-slate-600 font-semibold text-sm sm:text-base flex items-center gap-3">
                              <span className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0 shadow-sm`} />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="hidden md:block w-[46%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Transition Block */}


      </div>
    </section>
  );
};

export default LearningJourney;
