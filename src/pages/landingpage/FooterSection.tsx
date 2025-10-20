import React from "react";

export default function FooterSection() {
  return (
    <footer className="mt-24 bg-white">
      {/* CTA Section */}
      <section className="relative bg-[#0078D7] text-white text-center rounded-3xl mx-auto max-w-5xl py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Start Transcribing Smarter Today
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Join thousands of users who trust our platform for fast, accurate,
            and secure audio transcription.
          </p>
          <button className="bg-[#FFA500] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#ff9300] transition">
            Start for free
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#002D55] text-white rounded-2xl mx-auto max-w-5xl mt-12 p-8 md:flex md:items-center md:justify-between space-y-6 md:space-y-0">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Stay Updated With Transcripto AI
          </h3>
          <p className="text-white/80 text-sm max-w-md">
            Get the latest transcription trends, AI updates, and productivity
            tips straight to your inbox. No spam—just smart insights.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-64 text-gray-800 outline-none focus:ring-2 focus:ring-[#FFA500]"
          />
          <button
            type="submit"
            className="bg-[#FFA500] text-white px-6 py-2 rounded-md font-medium hover:bg-[#ff9300] transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer Bottom */}
      <div className="max-w-5xl mx-auto mt-12 px-6 pb-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-2">
            {/* ✅ Replace with your own image logo */}
            <img
              src="/logo.png" // ← Replace with your actual image path (e.g., /images/logo.png)
              alt="Transcripto AI Logo"
              className="h-7 w-auto"
            />
          </div>
          <p className="text-gray-600 text-sm">
            AI-powered transcription made simple and accurate.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6 text-gray-700 text-sm">
          <a href="#" className="hover:text-[#0078D7] transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#0078D7] transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#0078D7] transition">
            Contact
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs border-t border-gray-200 pt-4 pb-6">
        © 2025 Transcripto AI. All rights reserved. Under Construction for better ADA compliance.
      </div>
    </footer>
  );
}
