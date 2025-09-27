import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Mic2, 
  FileText, 
  Headphones, 
  BookOpenCheck, 
  Clock, 
  Users, 
  Globe, 
  Star, 
  GraduationCap 
} from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";

const features = [
  {
    id: 1,
    title: "Personalized Learning Plans",
    description: "AI-driven study plans tailored to your strengths and weaknesses.",
    icon: <User size={28} className="text-teal-600" />,
  },
  {
    id: 2,
    title: "Speaking Practice with AI Feedback",
    description: "Interactive speaking sessions with instant evaluation.",
    icon: <Mic2 size={28} className="text-teal-600" />,
  },
  {
    id: 3,
    title: "Writing Assessment & Suggestions",
    description: "Detailed feedback on essays and letters to boost your band score.",
    icon: <FileText size={28} className="text-teal-600" />,
  },
  {
    id: 4,
    title: "Listening & Reading Exercises",
    description: "Adaptive exercises with transcripts and answer explanations.",
    icon: <Headphones size={28} className="text-teal-600" />,
  },
  {
    id: 5,
    title: "Progress Tracking Dashboard",
    description: "Visual reports to track improvement and identify weak areas.",
    icon: <BookOpenCheck size={28} className="text-teal-600" />,
  },
  {
    id: 6,
    title: "Flexible Online Learning",
    description: "Access lessons anytime, anywhere on all devices.",
    icon: <Clock size={28} className="text-teal-600" />,
  },
  {
    id: 7,
    title: "Expert-Led Coaching",
    description: "Guidance from certified IELTS instructors to maximize scores.",
    icon: <Users size={28} className="text-teal-600" />,
  },
  {
    id: 8,
    title: "Community Support & Forums",
    description: "Connect with other learners for group discussions and peer learning.",
    icon: <Globe size={28} className="text-teal-600" />,
  },
  {
    id: 9,
    title: "Scholarship & Study Abroad Guidance",
    description: "Advice for students planning to study overseas.",
    icon: <Star size={28} className="text-teal-600" />,
  },
  {
    id: 10,
    title: "Certification & Achievement",
    description: "Earn certificates for completed courses and practice milestones.",
    icon: <GraduationCap size={28} className="text-teal-600" />,
  },
];

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
          Our Features
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform cursor-pointer"
              variants={cardVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
