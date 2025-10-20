import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center text-center w-full min-h-screen bg-gradient-to-b from-[#E6F3FF] via-[#F4F9FF] to-white pt-24 pb-28 px-6 overflow-hidden">
      {/* --- Background Decorative Shape --- */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-[url('/wave.svg')] bg-no-repeat bg-bottom bg-cover opacity-40 pointer-events-none"></div>

      {/* --- Top Navbar --- */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl bg-white/90 backdrop-blur-md border border-[#E2E8F0] rounded-2xl shadow-lg flex justify-between items-center px-8 md:px-12 py-3">
        <img src="/logo.png" alt="Transcribe Logo" className="h-8 w-auto" />
        <Button className="bg-[#007BCE] hover:bg-[#0063A6] text-white rounded-xl px-6 py-2 text-sm font-medium shadow-md transition">
          Buy Now
        </Button>
      </nav>

      {/* --- Hero Content --- */}
      <div className="max-w-3xl mt-24 md:mt-32">
        <div className="inline-block bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium px-6 py-1.5 shadow-sm mb-6">
          AI-Powered Transcription Platform
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight mb-5">
          Turn Your Audio into{" "}
          <span className="text-[#007BCE]">Accurate Text</span> in{" "}
          <span className="text-[#007BCE]">Minutes</span>
        </h1>

        <p className="text-[#475569] text-lg max-w-2xl mx-auto mb-10">
          Upload, transcribe, and download with ease — powered by AI and reviewed by humans.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button
            className="bg-[#007BCE] hover:bg-[#0063A6] text-white px-8 py-3 rounded-xl text-base font-semibold shadow-md transition"
            onClick={() => navigate("/roleselection")}
          >
            Get Started
          </Button>
          <Button className="bg-[#F59E0B] hover:bg-[#EA8A00] text-white px-8 py-3 rounded-xl text-base font-semibold shadow-md transition">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* --- Dashboard Image --- */}
      <div className="flex justify-center w-full">
        <img
          src="/hero.png"
          alt="Dashboard Preview"
          className="rounded-2xl shadow-2xl border border-gray-100 w-[92%] max-w-5xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
