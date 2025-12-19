import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-dark mb-10 text-center relative">
        <span className="relative z-10 px-4 bg-slate-50">个人经历</span>
        <div className="absolute inset-0 top-1/2 h-px bg-gray-200 -z-0"></div>
      </h2>

      <div className="relative border-l-4 border-blue-200 ml-4 md:ml-6 space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Dot */}
            <div className="absolute -left-[10px] md:-left-[11px] top-1 h-5 w-5 md:h-6 md:w-6 bg-primary rounded-full border-4 border-white shadow-md"></div>
            
            {/* Content Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <div className="text-lg text-primary font-medium">{exp.company}</div>
                </div>
                <div className="mt-1 md:mt-0 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full inline-block">
                  <i className="fa-regular fa-calendar mr-2"></i>{exp.period}
                </div>
              </div>
              
              <p className="text-gray-600 mt-3 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded border border-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;