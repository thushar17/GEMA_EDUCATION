import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const LearningOutcomes: React.FC = () => {
  const outcomes = [
    "Understand the basics of Artificial Intelligence and Machine Learning.",
    "Build and program your very own virtual robots.",
    "Learn foundational coding concepts using block-based and text programming.",
    "Develop problem-solving and critical thinking skills through interactive challenges.",
    "Complete a capstone project to showcase your new AI and Robotics skills!"
  ];

  return (
    <section id="outcomes" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Will You <span className="text-blue-500">Learn?</span></h2>
            <p className="text-lg text-gray-600 mb-8">
              Our curriculum is designed by experts to make complex tech concepts easy and fun for kids. By the end of this workshop, students will have hands-on experience with real-world technologies.
            </p>
            
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-400 rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center transform translate-y-8 shadow-xl">
                <span className="text-5xl font-black mb-2">10+</span>
                <span className="font-semibold">Projects Built</span>
              </div>
              <div className="bg-blue-500 rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center shadow-xl">
                <span className="text-5xl font-black mb-2">4</span>
                <span className="font-semibold">Weeks of Fun</span>
              </div>
              <div className="bg-indigo-500 rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center transform translate-y-8 shadow-xl">
                <span className="text-5xl font-black mb-2">50+</span>
                <span className="font-semibold">Hours of Learning</span>
              </div>
              <div className="bg-green-400 rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center shadow-xl">
                <span className="text-5xl font-black mb-2">∞</span>
                <span className="font-semibold">Creativity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
