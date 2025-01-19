import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Led development of multiple high-impact projects, mentored junior developers, and implemented best practices.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    period: '2019 - 2021',
    description: 'Developed and maintained various web applications using React and Node.js.',
  },
  {
    title: 'Frontend Developer',
    company: 'Web Innovators',
    period: '2017 - 2019',
    description: 'Created responsive and interactive user interfaces for client projects.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 experience-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-500/30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                </div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <div className="flex items-center text-blue-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300 mb-4">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;