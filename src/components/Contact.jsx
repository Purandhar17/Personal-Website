import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setSubmitStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus(""), 5000);
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/Purandhar17",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/purandharsai/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
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
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p
            className={`mt-6 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Let's discuss your next project or just say hello. I'm always
            excited to work on new challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700 text-white focus:border-cyan-400"
                      : "bg-white border-gray-300 text-gray-900 focus:border-cyan-500"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200`}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700 text-white focus:border-cyan-400"
                      : "bg-white border-gray-300 text-gray-900 focus:border-cyan-500"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700 text-white focus:border-cyan-400"
                      : "bg-white border-gray-300 text-gray-900 focus:border-cyan-500"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none`}
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    Send Message
                  </>
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </motion.button>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 font-medium"
                >
                  {submitStatus}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div
              className={`p-8 rounded-xl ${
                theme === "dark"
                  ? "bg-slate-900/50 border border-slate-800"
                  : "bg-gray-50 border border-gray-200 shadow-sm"
              } backdrop-blur-sm`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Let's Connect
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p
                      className={`font-medium ${
                        theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Email
                    </p>
                    <p
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      purandharsai128@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p
                      className={`font-medium ${
                        theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      Available for remote work
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg text-white">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p
                      className={`font-medium ${
                        theme === "dark" ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Response Time
                    </p>
                    <p
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4
                  className={`font-semibold mb-4 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg ${
                        theme === "dark"
                          ? "bg-slate-800 text-gray-300"
                          : "bg-white text-gray-600 shadow-sm"
                      } ${
                        social.color
                      } transition-all duration-200 hover:shadow-lg`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
