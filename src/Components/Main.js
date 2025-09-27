import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const slides = [
  {
    id: 1,
    title: "Achieve Your Dream IELTS Score",
    description:
      "Join our expert-led coaching programs with AI-powered practice tests.",
    image:
      "https://images.unsplash.com/photo-1627501691850-db08eb81199a?w=600&auto=format&fit=crop&q=60",
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Personalized Learning Experience",
    description:
      "Track your progress, get feedback, and improve faster with AI guidance.",
    image:
      "https://plus.unsplash.com/premium_photo-1680807869086-e08309acfb24?w=600&auto=format&fit=crop&q=60",
    buttonText: "Join Now",
  },
  {
    id: 3,
    title: "Practice Anytime, Anywhere",
    description: "Access our practice tests and study materials on any device.",
    image:
      "https://plus.unsplash.com/premium_photo-1666954642119-69cd43bfbee5?w=600&auto=format&fit=crop&q=60",
    buttonText: "Start Today",
  },
];

const features = [
  {
    id: 1,
    title: "Speaking Practice",
    description:
      "Improve your fluency with interactive speaking sessions and AI feedback.",
    icon: "🗣️",
  },
  {
    id: 2,
    title: "Mock Tests",
    description:
      "Simulate real IELTS exams to track your progress and reduce anxiety.",
    icon: "📋",
  },
  {
    id: 3,
    title: "AI Band Score",
    description:
      "Get instant AI-generated band scores and personalized tips to improve.",
    icon: "🤖",
  },
  {
    id: 4,
    title: "Flexible Learning",
    description: "Access lessons anytime, anywhere on all your devices.",
    icon: "⌚",
  },
];

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
];

export default function Main() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <>
      <Nav />

      <section className="w-full bg-gradient-to-r from-teal-50 via-white to-teal-100 py-16 relative overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
            >
              <motion.div
                className="md:w-1/2 text-center md:text-left space-y-6 px-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                  {slides[current].title}
                </h2>
                <p className="text-lg text-gray-600">
                  {slides[current].description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                  {slides[current].buttonText}
                </motion.button>
              </motion.div>

              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((slide, index) => (
              <span
                key={slide.id}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === current ? "bg-teal-700" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="bg-gradient-to-tr from-teal-100 to-teal-200 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // <-- animate every time
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-teal-50 via-white to-teal-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                custom={i}
                variants={testimonialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // <-- animate every time
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
                <h3 className="text-lg font-semibold text-teal-700">
                  {t.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
