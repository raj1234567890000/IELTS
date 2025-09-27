import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";

const plans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "₹4999",
    features: [
      "Speaking Practice Sessions",
      "Weekly Mock Tests",
      "AI Feedback on Speaking",
    ],
    popular: false,
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "₹8999",
    features: [
      "Speaking + Writing Coaching",
      "Mock Tests & Practice Material",
      "AI Band Score & Feedback",
    ],
    popular: true,
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "₹12999",
    features: [
      "All Skills Coaching (S, W, L, R)",
      "Personalized Study Plan",
      "One-on-One Expert Guidance",
      "Priority Support & Consultation",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <>
    <Nav/>
    <section className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
          Choose Your IELTS Plan
        </h2>
        <p className="text-gray-700 mb-12">
          Flexible pricing plans to suit every learner. Get started and improve
          your IELTS score with expert guidance and AI-powered tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between transform hover:scale-105 transition-all ${
                plan.popular
                  ? "border-4 border-teal-500"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 w-max mx-auto">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                {plan.title}
              </h3>
              <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
              <ul className="text-gray-600 mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check size={20} className="text-teal-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition`}
              >
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
