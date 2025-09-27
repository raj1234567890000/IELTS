import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    feedback:
      "The AI feedback on my speaking test was amazing! I improved my fluency and confidence within weeks.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Aman Verma",
    feedback:
      "Mock tests felt just like the real IELTS exam. I was well-prepared and scored higher than I expected.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Priya Nair",
    feedback:
      "The platform is super flexible. I could study anytime, anywhere and track my progress easily.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    feedback:
      "Expert-led coaching with personalized tips helped me achieve my desired band score.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 1,
    name: "Riya Sharma",
    feedback:
      "The AI feedback on my speaking test was amazing! I improved my fluency and confidence within weeks.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Aman Verma",
    feedback:
      "Mock tests felt just like the real IELTS exam. I was well-prepared and scored higher than I expected.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Priya Nair",
    feedback:
      "The platform is super flexible. I could study anytime, anywhere and track my progress easily.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    feedback:
      "Expert-led coaching with personalized tips helped me achieve my desired band score.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 1,
    name: "Riya Sharma",
    feedback:
      "The AI feedback on my speaking test was amazing! I improved my fluency and confidence within weeks.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Aman Verma",
    feedback:
      "Mock tests felt just like the real IELTS exam. I was well-prepared and scored higher than I expected.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Priya Nair",
    feedback:
      "The platform is super flexible. I could study anytime, anywhere and track my progress easily.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    feedback:
      "Expert-led coaching with personalized tips helped me achieve my desired band score.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
    <Nav/>
    <section className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-12">
          What Our Students Say
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer"
              variants={cardVariants}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h3 className="text-lg font-semibold text-teal-700">{t.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
