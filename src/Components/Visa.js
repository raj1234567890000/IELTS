import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const services = [
  {
    id: 1,
    title: "Student Visa Assistance",
    description:
      "End-to-end support for your student visa application, ensuring smooth processing.",
    image:
      "https://img.freepik.com/free-vector/student-visa-concept-illustration_114360-10250.jpg",
  },
  {
    id: 2,
    title: "Work Visa Guidance",
    description:
      "Get expert help in applying for work permits and visas for multiple countries.",
    image:
      "https://img.freepik.com/free-vector/work-visa-illustration_23-2148810582.jpg",
  },
  {
    id: 3,
    title: "Permanent Residency (PR)",
    description:
      "Step-by-step guidance to apply for PR, from documentation to final approval.",
    image:
      "https://img.freepik.com/free-vector/residency-application-illustration_23-2148795621.jpg",
  },
];

const steps = [
  "Book a Free Consultation",
  "Prepare & Verify Documents",
  "Submit Application",
  "Receive Visa Approval",
];

export default function Visa() {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const serviceVariants = {
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
            Visa Assistance Services
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our team provides reliable visa assistance for students,
            professionals, and families. From consultation to approval — we
            guide you every step of the way.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">
            Our Visa Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-tr from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-xl p-6 transition hover:scale-105"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={stepVariants}
              >
                <div className="text-4xl font-bold text-teal-600 mb-4">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-teal-800 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition hover:scale-105 text-center"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={serviceVariants}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
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
          Ready to Apply for Your Visa?
        </h2>
        <p className="text-gray-700 mb-6">
          Contact us today and let our experts handle your visa journey with
          ease.
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
