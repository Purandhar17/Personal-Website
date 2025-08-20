import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Star } from "lucide-react";

const Certificates = ({ theme }) => {
  const certificates = [
    {
      title: "HackerRank Java (Basic)",
      issuer: "HackerRank",
      date: "2024",
      description:
        "Certified in Java fundamentals including OOP concepts, data structures, and algorithms.",
      credentialId: "HR-JAVA-2024",
      link: "https://www.hackerrank.com/certificates/8b03a3839683",
      skills: ["Java", "OOP", "Data Structures"],
      level: "Basic",
    },
    {
      title: "Software Engineering",
      issuer: "HackerRank",
      date: "2024",
      description:
        "Certified In Software covers topics like Problem solving, SQL, and REST API ",
      credentialId: "HR-5STAR-JAVA-2024",
      link: "https://www.hackerrank.com/certificates/1cd2f170e070",
      skills: ["Java", "Algorithms", "Problem Solving"],
      level: "Advanced",
    },
    {
      title: "HackerRank 5★ Problem Solving",
      issuer: "HackerRank",
      date: "2024",
      description:
        "Demonstrated expertise in algorithmic thinking and competitive programming.",
      credentialId: "HR-5STAR-PS-2024",
      link: "https://hackerrank.com",
      skills: ["Algorithms", "Data Structures", "Logic"],
      level: "Advanced",
    },
  ];

  const getLevelColor = (level, theme) => {
    if (level === "Advanced") {
      return theme === "dark"
        ? "bg-purple-400/20 text-purple-300 border-purple-400/30"
        : "bg-purple-50 text-purple-700 border-purple-200";
    }
    return theme === "dark"
      ? "bg-cyan-400/20 text-cyan-300 border-cyan-400/30"
      : "bg-cyan-50 text-cyan-700 border-cyan-200";
  };

  return (
    <section
      id="certificates"
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
            Certifications &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  theme === "dark"
                    ? "0 20px 40px rgba(56, 189, 248, 0.2)"
                    : "0 20px 40px rgba(56, 189, 248, 0.15)",
              }}
              className={`group relative p-6 rounded-xl ${
                theme === "dark"
                  ? "bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50"
                  : "bg-white border border-gray-200 hover:border-cyan-400/50 shadow-lg"
              } backdrop-blur-sm transition-all duration-300 overflow-hidden`}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg text-white">
                      <Award size={24} />
                    </div>
                    <div>
                      <div
                        className={`text-xs font-medium px-2 py-1 rounded-full border ${getLevelColor(
                          cert.level,
                          theme
                        )}`}
                      >
                        {cert.level}
                      </div>
                    </div>
                  </div>
                  <motion.a
                    href={cert.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${
                      theme === "dark"
                        ? "bg-slate-700 text-gray-300 hover:text-cyan-400"
                        : "bg-gray-100 text-gray-600 hover:text-cyan-600"
                    } transition-colors`}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>

                <h3
                  className={`text-lg font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between mb-3">
                  <p className="text-cyan-400 font-semibold">{cert.issuer}</p>
                  <div className="flex items-center space-x-1">
                    {cert.level === "Advanced" && (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {cert.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          theme === "dark"
                            ? "bg-slate-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    ID: {cert.credentialId}
                  </div>
                  <div
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {cert.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
