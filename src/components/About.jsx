import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Zap } from "lucide-react";
import image from "../images/6.jpg";
const About = ({ theme }) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full Stack Development",
      desc: "MERN Stack expertise",
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      desc: "MongoDB & MySQL",
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      desc: "Modern frameworks",
    },
    {
      icon: <Zap size={24} />,
      title: "Performance",
      desc: "Optimized solutions",
    },
  ];

  return (
    <section
      id="about"
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
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full p-1">
                  <img
                    src={image}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p className="mb-4">
                I'm a passionate MERN Stack Developer with a strong foundation
                in modern web technologies. I love creating scalable, efficient,
                and user-friendly applications that solve real-world problems.
              </p>
              <p className="mb-4">
                With experience in full-stack development, I specialize in
                building responsive web applications using React.js, Node.js,
                Express.js, and MongoDB. I'm constantly learning and adapting to
                new technologies to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source
                projects, learning new frameworks, and sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-xl ${
                    theme === "dark"
                      ? "bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50"
                      : "bg-white border border-gray-200 hover:border-cyan-400/50 shadow-sm"
                  } backdrop-blur-sm transition-all duration-300 group`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-cyan-400 group-hover:text-purple-400 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
