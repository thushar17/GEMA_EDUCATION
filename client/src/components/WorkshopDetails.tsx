import React from 'react';
import { Calendar, Clock, MonitorPlay, IndianRupee, Users } from 'lucide-react';

const WorkshopDetails: React.FC = () => {
  const details = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      label: "Age Group",
      value: "8–14 Years",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      label: "Duration",
      value: "4 Weeks",
      bgColor: "bg-orange-50"
    },
    {
      icon: <MonitorPlay className="w-8 h-8 text-green-500" />,
      label: "Mode",
      value: "Online Interactive",
      bgColor: "bg-green-50"
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-purple-500" />,
      label: "Fee",
      value: "₹2,999",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Calendar className="w-8 h-8 text-red-500" />,
      label: "Start Date",
      value: "15 July 2026",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Workshop <span className="text-blue-500">Details</span></h2>
          <p className="text-xl text-gray-600">Everything you need to know about our upcoming summer camp.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {details.map((item, index) => (
            <div key={index} className="w-full sm:w-64 bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className={`${item.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-gray-500 font-semibold mb-1 uppercase tracking-wider text-sm">{item.label}</h3>
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
