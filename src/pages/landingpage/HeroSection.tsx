import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex flex-col items-center text-center w-full min-h-screen bg-fixed bg-cover bg-top bg-no-repeat pb-28 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/wave.png')", // 👈 background image
      }}
    >
      {/* --- Navbar --- */}
      <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl bg-white shadow-md rounded-2xl border border-gray-200 flex justify-between items-center px-8 md:px-10 py-3 mt-4">
        <img src="/logo.png" alt="Transcribe Logo" className="h-8 w-auto" />
        <Button className="bg-[#007BFF] hover:bg-[#0066CC] text-white rounded-xl px-6 py-2 text-sm font-semibold shadow-sm">
          Buy Now
        </Button>
      </nav>

      {/* --- Hero Content --- */}
      <div className="max-w-4xl mt-28 md:mt-32"> {/* 👈 reduced spacing */}
        <div className="inline-block bg-white border border-gray-200 rounded-full text-gray-800 text-sm font-medium px-6 py-1.5 shadow-sm mb-6">
          AI-Powered Transcription Platform
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6">
          Turn Your Audio into{" "}
          <span className="text-[#007BFF]">Accurate Text</span> in{" "}
          <span className="text-[#007BFF]">Minutes</span>
        </h1>

        <p className="text-[#475569] text-lg max-w-2xl mx-auto mb-10">
          Upload, transcribe, and download with ease — powered by AI and
          reviewed by humans.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button
            className="bg-[#007BFF] hover:bg-[#0066CC] text-white px-8 py-3 rounded-xl text-base font-semibold shadow-md"
            onClick={() => navigate("/roleselection")}
          >
            Try free for 30 mins
          </Button>
          <Button className="bg-[#FF9F00] hover:bg-[#E68900] text-white px-8 py-3 rounded-xl text-base font-semibold shadow-md">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* --- Dashboard Image --- */}
      <div className="flex justify-center w-full">
        <img
          src="/hero.png"
          alt="Dashboard Preview"
          className="rounded-2xl shadow-2xl border border-gray-100 w-[90%] max-w-5xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
