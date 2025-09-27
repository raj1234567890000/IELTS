import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-100 via-white to-teal-50 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-teal-800 mb-4">IELTS Coach</h2>
          <p className="text-sm leading-relaxed">
            Helping students achieve their dream IELTS scores with expert
            guidance, AI-powered tools, and flexible learning options.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-teal-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/features" className="hover:text-teal-700 transition">
                Features
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-teal-700 transition">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-teal-700 transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-700 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-teal-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-200 mt-10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} IELTS Coach. All rights reserved.
      </div>
    </footer>
  );
}
