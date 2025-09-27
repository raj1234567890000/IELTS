import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const countries = [
  {
    id: 1,
    name: "Canada",
    description:
      "World-class universities, affordable tuition, and post-study work opportunities.",
    image:
      "https://img.freepik.com/free-vector/canadian-flag-illustration_23-2148521784.jpg",
  },
  {
    id: 2,
    name: "Australia",
    description:
      "Popular for high-quality education, diverse culture, and skilled migration pathways.",
    image:
      "https://img.freepik.com/free-vector/australian-flag-illustration_23-2148521760.jpg",
  },
  {
    id: 3,
    name: "United Kingdom",
    description:
      "Home to prestigious universities like Oxford & Cambridge with globally recognized degrees.",
    image:
      "https://img.freepik.com/free-vector/uk-flag-illustration_23-2148521782.jpg",
  },
  {
    id: 4,
    name: "United States",
    description:
      "Top-ranked universities, research opportunities, and wide career prospects.",
    image:
      "https://img.freepik.com/free-vector/usa-flag-illustration_23-2148521785.jpg",
  },
  {
    id: 5,
    name: "New Zealand",
    description:
      "Safe, friendly environment with flexible work-study options for international students.",
    image:
      "https://img.freepik.com/free-vector/new-zealand-flag-illustration_23-2148521767.jpg",
  },
  {
    id: 6,
    name: "Germany",
    description:
      "Affordable education, strong engineering & tech programs, and work opportunities.",
    image:
      "https://img.freepik.com/free-vector/german-flag-illustration_23-2148521772.jpg",
  },
];

export default function Country() {
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
            Study Abroad Destinations
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Explore the best countries for higher education, career
            opportunities, and personal growth. Choose your dream destination
            and start your journey today.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">
            Popular Countries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, i) => (
              <motion.div
                key={country.id}
                className="bg-gradient-to-tr from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-xl p-6 transition hover:scale-105 text-center"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  {country.name}
                </h3>
                <p className="text-gray-600 text-sm">{country.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Why Choose Us for Study Abroad?
          </h2>
          <p className="text-gray-700 mb-8">
            With years of experience, personalized guidance, and tie-ups with
            top universities, we ensure your study abroad journey is smooth and
            successful.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Counseling",
                desc: "Get guidance from professionals who understand global education systems.",
              },
              {
                title: "Visa & Documentation",
                desc: "Complete support in preparing and submitting your visa applications.",
              },
              {
                title: "Scholarship Support",
                desc: "Assistance in finding and applying for scholarships to fund your education.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
              >
                <h3 className="text-lg font-semibold text-teal-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-gradient-to-r from-teal-100 via-white to-teal-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={ctaVariants}
      >
        <h2 className="text-3xl font-bold text-teal-800 mb-4">
          Ready to Choose Your Country?
        </h2>
        <p className="text-gray-700 mb-6">
          Book a free consultation with our experts and start planning your
          journey abroad today.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Book Consultation
        </motion.button>
      </motion.section>

      <Footer />
    </>
  );
}
