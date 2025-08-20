import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

const Hero = ({ theme }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 👉 Function to open Resume (replace with your Google Drive link)
  const viewResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1-sB1LEbXkadtrsIajpmuSOhUmsSKTOY5/view?usp=sharing"; // 🔗 Replace with your link
    window.open(resumeUrl, "_blank");
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Hi I'm
            </span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={theme === "dark" ? "text-gray-100" : "text-gray-800"}
            >
              Madiri Purandar Sai
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4 mb-8"
        >
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            MERN Stack Developer
          </h2>
          <p
            className={`text-lg md:text-xl ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto leading-relaxed`}
          >
            Building Scalable Web Applications with Modern Technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* Resume Button with Google Drive Link */}
          <motion.button
            onClick={viewResume}
            whileHover={{
              scale: 1.05,
              boxShadow:
                theme === "dark"
                  ? "0 0 30px rgba(56, 189, 248, 0.5)"
                  : "0 0 30px rgba(56, 189, 248, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            View Resume
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>

          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 border-2 ${
              theme === "dark"
                ? "border-purple-400 text-purple-400 hover:bg-purple-400/10"
                : "border-purple-500 text-purple-500 hover:bg-purple-500/10"
            } font-semibold rounded-full transition-all duration-300 flex items-center gap-3`}
          >
            View My Work
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 ${
            theme === "dark" ? "border-gray-400" : "border-gray-500"
          } rounded-full flex justify-center`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 ${
              theme === "dark" ? "bg-gray-400" : "bg-gray-500"
            } rounded-full mt-2`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
