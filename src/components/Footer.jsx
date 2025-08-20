import React from "react";
import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-12 border-t ${
        theme === "dark"
          ? "bg-slate-950 border-slate-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sai.dev
            </h3>
          </motion.div>

          {/* Made with love */}
          <div
            className={`flex items-center justify-center space-x-2 text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-400 fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code size={16} className="text-cyan-400" />
            </motion.div>
            <span>and lots of</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Coffee size={16} className="text-amber-400" />
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-200 dark:border-slate-800">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © {currentYear} Madiri Purandar Sai. All rights reserved.
            </p>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
              theme === "dark"
                ? "bg-slate-800 text-gray-300 hover:text-cyan-400"
                : "bg-gray-100 text-gray-600 hover:text-cyan-600"
            } transition-colors duration-200`}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
