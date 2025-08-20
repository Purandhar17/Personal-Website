import React from "react";
import { motion } from "framer-motion";
import { Rocket, BookOpen, Code2 } from "lucide-react";

const Learning = ({ theme }) => {
  const learningSkills = [
    {
      name: "Spring Boot",
      level: 10,
      icon: <Code2 size={32} />,
      description: "Java framework for building enterprise applications",
    },
    {
      name: "System Design",
      level: 25,
      icon: <BookOpen size={32} />,
      description: "Scalable architecture and distributed systems",
    },
    {
      name: "Advanced DSA",
      level: 30,
      icon: <Rocket size={32} />,
      description: "Complex algorithms and data structures",
    },
  ];

  return (
    <section
      id="learning"
      className={`py-20 ${theme === "dark" ? "bg-slate-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Currently{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p
            className={`mt-6 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Continuously expanding my skillset with cutting-edge technologies
            and advanced concepts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  theme === "dark"
                    ? "0 20px 40px rgba(56, 189, 248, 0.2)"
                    : "0 20px 40px rgba(56, 189, 248, 0.15)",
              }}
              className={`group relative p-8 rounded-xl ${
                theme === "dark"
                  ? "bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50"
                  : "bg-white border border-gray-200 hover:border-cyan-400/50 shadow-lg"
              } backdrop-blur-sm transition-all duration-300 overflow-hidden`}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Progress indicator */}
              <div className="absolute top-4 right-4">
                <div
                  className={`w-12 h-12 rounded-full border-4 ${
                    theme === "dark" ? "border-slate-600" : "border-gray-200"
                  } relative`}
                >
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${skill.level}, 100`}
                      className="text-gradient-to-r from-cyan-400 to-purple-400"
                      style={{
                        stroke: "url(#gradient)",
                        strokeLinecap: "round",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`text-xs font-bold ${
                        theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl text-white mr-4"
                  >
                    {skill.icon}
                  </motion.div>
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {skill.name}
                    </h3>
                    <div
                      className={`flex items-center mt-1 text-sm ${
                        theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                      }`}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2 animate-pulse" />
                      In Progress
                    </div>
                  </div>
                </div>

                <p
                  className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {skill.description}
                </p>

                <div
                  className={`mt-4 w-full h-2 rounded-full overflow-hidden ${
                    theme === "dark" ? "bg-slate-700" : "bg-gray-200"
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-400 animate-pulse opacity-50 rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning commitment message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className={`mt-12 text-center p-6 rounded-xl ${
            theme === "dark"
              ? "bg-slate-800/30 border border-slate-700"
              : "bg-gray-100 border border-gray-200"
          } backdrop-blur-sm`}
        >
          <p
            className={`text-lg font-medium ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Committed to continuous learning and staying updated with the latest
            technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
