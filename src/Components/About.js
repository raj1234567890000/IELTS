import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const missionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const visionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const teamVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About IELTS Coach
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We are dedicated to helping students achieve their dream IELTS
            scores through expert guidance, AI-powered tools, and flexible
            learning options. Our platform combines technology and personalized
            coaching to make IELTS preparation smarter, faster, and more
            effective.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={missionVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower every student with the right resources
              and strategies to excel in IELTS. By leveraging AI technology, we
              provide real-time feedback, personalized study plans, and mock
              tests that replicate the real exam environment.
            </p>
          </motion.div>

          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={visionVariants}
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where IELTS preparation is accessible,
              affordable, and effective for all learners. Our platform is built
              to adapt to each student’s needs, ensuring faster progress and
              higher confidence on exam day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Rahul Mehta",
                role: "Founder & IELTS Expert",
                img: "https://randomuser.me/api/portraits/men/44.jpg",
              },
              {
                name: "Neha Gupta",
                role: "AI Specialist",
                img: "https://randomuser.me/api/portraits/women/47.jpg",
              },
              {
                name: "Arjun Patel",
                role: "Academic Coordinator",
                img: "https://randomuser.me/api/portraits/men/52.jpg",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={teamVariants}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-teal-700">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
