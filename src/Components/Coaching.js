import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const courses = [
  {
    id: 1,
    title: "Speaking Coaching",
    description:
      "Boost your fluency and confidence with one-on-one speaking sessions and AI-powered feedback.",
    image:
      "https://img.freepik.com/free-vector/online-conversation-illustration_23-2148502602.jpg",
  },
  {
    id: 2,
    title: "Writing Coaching",
    description:
      "Get expert evaluation on your essays and letters with detailed feedback to improve your writing score.",
    image:
      "https://plus.unsplash.com/premium_photo-1724815398052-a61554ee965e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdHRpbmclMjB0ZXN0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Listening Practice",
    description:
      "Enhance your listening skills with timed practice tests, transcripts, and smart tips.",
    image:
      "https://img.freepik.com/free-vector/music-podcast-illustration_23-2148512573.jpg",
  },
  {
    id: 4,
    title: "Reading Practice",
    description:
      "Master IELTS reading with guided practice, question-solving strategies, and explanations.",
    image:
      "https://img.freepik.com/free-vector/reading-book-illustration_23-2148525910.jpg",
  },
];

export default function Coaching() {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Nav />

      <motion.section
        className="w-full bg-gradient-to-r from-teal-100 via-white to-teal-50 py-20 mt-16"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            IELTS Coaching Programs
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get personalized guidance from IELTS experts and AI-driven tools.
            Choose from our wide range of coaching programs tailored to improve
            every skill — Speaking, Writing, Listening, and Reading.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">
            Our Coaching Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                className="bg-gradient-to-tr from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-xl p-6 transition hover:scale-105 text-center"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-100 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={ctaVariants}
      >
        <h2 className="text-3xl font-bold text-teal-800 mb-4">
          Ready to Begin Your IELTS Journey?
        </h2>
        <p className="text-gray-700 mb-6">
          Enroll today and start improving with our expert-led coaching and
          AI-powered tools.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Join Now
        </motion.button>
      </motion.section>

      <Footer />
    </>
  );
}
