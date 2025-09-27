import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Contact() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Nav />

      <motion.section
        className="w-full bg-gradient-to-r from-teal-100 via-white to-teal-50 py-20 mt-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Have questions about IELTS coaching, study abroad, or visa services?
            Get in touch with our team — we’re here to help!
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { title: "📞 Phone", value: "+91 98765 43210" },
            { title: "📧 Email", value: "support@ieltshub.com" },
            {
              title: "📍 Address",
              value: "123 Learning Street, New Delhi, India",
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-tr from-teal-50 to-teal-100 p-6 rounded-2xl shadow-lg"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600">{info.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">
            Send Us a Message
          </h2>
          <motion.form
            className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-r from-teal-100 via-white to-teal-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-teal-800 mb-4">
          Let’s Connect Today!
        </h2>
        <p className="text-gray-700 mb-6">
          Our counselors are available to answer your queries and guide you
          towards your study abroad dream.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Book a Free Consultation
        </motion.button>
      </motion.section>

      <Footer />
    </>
  );
}
