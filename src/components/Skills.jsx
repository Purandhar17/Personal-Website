import React from "react";
import { motion } from "framer-motion";

const Skills = ({ theme }) => {
  const skills = [
    { name: "Java", level: 90, category: "Backend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React.js", level: 88, category: "Frontend" },
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "MySQL", level: 78, category: "Database" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Git/GitHub", level: 88, category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section
      id="skills"
      className={`py-20 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`}
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
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
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
                          ? "0 10px 30px rgba(56, 189, 248, 0.2)"
                          : "0 10px 30px rgba(56, 189, 248, 0.15)",
                    }}
                    className={`p-6 rounded-xl ${
                      theme === "dark"
                        ? "bg-slate-900/50 border border-slate-800 hover:border-cyan-400/50"
                        : "bg-gray-50 border border-gray-200 hover:border-cyan-400/50 shadow-sm"
                    } backdrop-blur-sm transition-all duration-300 group`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4
                        className={`font-semibold text-lg ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {skill.name}
                      </h4>
                      <span
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-cyan-400/20 text-cyan-300"
                            : "bg-cyan-100 text-cyan-700"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className={`w-full h-3 rounded-full overflow-hidden ${
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
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-400 animate-pulse opacity-50" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
