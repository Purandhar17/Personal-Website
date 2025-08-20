import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = ({ theme }) => {
  const experiences = [
    {
      title: 'MERN Stack Developer',
      company: 'Mainflow Services & Technologies',
      period: 'Apr 2025 - Jun 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications with React.js and modern UI libraries',
        'Designed and implemented RESTful APIs using Express.js and Node.js',
        'Worked with MongoDB for database design and optimization',
        'Participated in code reviews and agile development processes',
        'Integrated third-party services and APIs for enhanced functionality'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Git']
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      theme === 'dark' ? 'bg-slate-950' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            theme === 'dark' ? 'bg-slate-700' : 'bg-gray-300'
          } hidden md:block`} />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline marker */}
              <div className={`absolute -left-20 top-6 w-4 h-4 rounded-full border-4 ${
                theme === 'dark' 
                  ? 'bg-slate-950 border-cyan-400' 
                  : 'bg-white border-cyan-500'
              } hidden md:block`}>
                <div className="absolute inset-0 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: theme === 'dark' 
                    ? '0 10px 30px rgba(56, 189, 248, 0.15)' 
                    : '0 10px 30px rgba(56, 189, 248, 0.1)'
                }}
                className={`p-6 md:p-8 rounded-xl ${
                  theme === 'dark' 
                    ? 'bg-slate-900/50 border border-slate-800 hover:border-cyan-400/50' 
                    : 'bg-gray-50 border border-gray-200 hover:border-cyan-400/50 shadow-lg'
                } backdrop-blur-sm transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <div className={`flex flex-col md:items-end space-y-1 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        theme === 'dark' 
                          ? 'bg-purple-400/20 text-purple-300' 
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className={`text-sm md:text-base mb-6 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className={`font-semibold mb-3 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-start text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className={`font-semibold mb-3 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          theme === 'dark' 
                            ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30' 
                            : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;