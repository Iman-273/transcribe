import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex flex-col items-center text-center w-full overflow-hidden pb-0"
      style={{
        background: "linear-gradient(180deg, #B5E3FF 0%, #FFFFFF 45.5%)",
        fontFamily: "'Plus Jakarta Sans'",
      }}
    >
      {/* --- Navbar --- */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl flex justify-between items-center bg-white border border-[#E5EAF0] rounded-2xl shadow-sm px-8 py-3 z-20">
        <img src="/logo.png" alt="Transcribe Logo" className="h-8 w-auto" />
        <Button className="bg-[#007BFF] hover:bg-[#0066CC] text-white rounded-xl px-6 py-2 text-sm font-semibold shadow-sm">
          Buy Now
        </Button>
      </nav>

      {/* --- Hero Content --- */}
      <div className="max-w-3xl mt-48 md:mt-52 z-10 px-4">
        <div className="inline-block bg-white border border-[#E5EAF0] rounded-full text-[#475569] text-sm font-medium px-5 py-1.5 shadow-sm mb-6">
          AI-Powered Transcription Platform
        </div>

        <h1 className="text-[48px] sm:text-[56px] md:text-[64px] font-extrabold text-[#0F172A] leading-[1.15] mb-5">
          Turn Your Audio into{" "}
          <span className="text-[#007BFF]">Accurate Text</span> in{" "}
          <span className="text-[#007BFF]">Minutes</span>
        </h1>

        <p className="text-[#475569] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Upload, transcribe, and download with ease — powered by AI and reviewed by humans.
        </p>

        <div className="flex justify-center gap-4 mb-20 flex-wrap">
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
      <div className="relative flex justify-center w-full z-10 mb-[-40px]">
        <div
          className="relative w-[92%] max-w-5xl rounded-[28px] p-[6px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          style={{
            background: "linear-gradient(135deg, #EBF7FF 0%, #EEF0FF 50%, #FFF4EB 100%)",
          }}
        >
          <div className="rounded-[22px] overflow-hidden bg-white">
            <img
              src="/hero.png"
              alt="Dashboard Preview"
              className="w-full h-auto block rounded-[22px]"
            />
          </div>
        </div>
      </div>

      {/* --- Decorative Bottom Wave --- */}
      <img
        src="/wave.jpeg"
        alt="Decorative Wave"
        className="absolute bottom-0 left-0 w-full object-cover select-none pointer-events-none"
        style={{
          transform: "translateY(10%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
