import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = ({ theme }) => {
  const projects = [
    {
      title: "Hotel Booking System",
      description:
        "A full-stack hotel booking platform with user authentication, room management, and payment integration.",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React.js", "CSS", "HTML", "JavaScript", "Stripe"],
      github: "https://github.com/Purandhar17",
      demo: "https://purandar-luxstay-web.netlify.app/",
      date: "2025",
    },
    {
      title: "NextGen Job Portal",
      description:
        "A modern job portal with AI-powered job matching and real-time chat functionality.",
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React.js", "Node.js", "MongoDB", "Express", "Git"],
      github: "https://github.com/Purandhar17",
      demo: "https://nextgen-frontend-snd7.onrender.com",
      date: "2025",
    },
    {
      title: "Centralized Health Record System",
      description:
        "A secure healthcare platform for managing patient records with role-based access control.",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React.js", "Spring Boot", "MySQL", "JWT", "Material-UI"],
      github: "https://github.com/Purandhar17",
      demo: "https://demo.com",
      date: "2024",
    },
    {
      title: "DevConnect",
      description:
        "A social networking platform for developers to connect, share projects, and collaborate.",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Redux"],
     github: "https://github.com/Purandhar17",
      demo: "https://demo.com",
      date: "2023",
    },
  ];

  return (
    <section
      id="projects"
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
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  theme === "dark"
                    ? "0 20px 40px rgba(56, 189, 248, 0.15)"
                    : "0 20px 40px rgba(56, 189, 248, 0.1)",
              }}
              className={`group rounded-xl overflow-hidden ${
                theme === "dark"
                  ? "bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50"
                  : "bg-white border border-gray-200 hover:border-cyan-400/50 shadow-lg"
              } backdrop-blur-sm transition-all duration-300`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-cyan-400/80 transition-colors"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-purple-400/80 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div
                    className={`flex items-center text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p
                  className={`text-sm mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  } leading-relaxed`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        theme === "dark"
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                          : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
