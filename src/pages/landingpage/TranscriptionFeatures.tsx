import React from "react";
import { Play, Pause } from "lucide-react";

const TranscriptionFeatures: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playbackRate, setPlaybackRate] = React.useState(1);

  return (
    <section className="w-full bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ===== Header ===== */}
        <div className="text-center mb-24">
          <div className="inline-block bg-[#F1F5FF] text-[#0F172A] px-5 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            Why Choose us
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-3">
            Everything You Need to Transcribe Smarter
          </h2>

          <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            All the features you need for fast, accurate, and effortless transcription.
          </p>
        </div>

        {/* ===== Content Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* ==== Left: Audio Player Card ==== */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#E8F1FF] rounded-[32px] -z-10" />
            <div className="bg-white rounded-[28px] shadow-sm border border-[#E2E8F0] p-8">
              <h3 className="text-[#0F172A] font-semibold text-base mb-1">
                Interview Recording 001
              </h3>
              <p className="text-[#64748B] text-sm mb-6">
                Assigned on 10/14/2025
              </p>

              {/* Audio Player Section */}
              <div className="border border-[#E2E8F0] rounded-2xl p-6">
                <p className="text-[#0F172A] text-sm font-medium mb-3">
                  Audio Player
                </p>

                {/* Waveform */}
                <div className="bg-gradient-to-r from-[#EAF2FF] to-[#FFF3E7] rounded-lg h-20 mb-5 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 30"
                    className="w-3/4 h-10 text-orange-500"
                    fill="currentColor"
                  >
                    <rect x="2" y="10" width="2" height="10" />
                    <rect x="8" y="5" width="2" height="20" />
                    <rect x="14" y="8" width="2" height="14" />
                    <rect x="20" y="4" width="2" height="22" />
                    <rect x="26" y="6" width="2" height="18" />
                    <rect x="32" y="7" width="2" height="16" />
                    <rect x="38" y="3" width="2" height="24" />
                    <rect x="44" y="10" width="2" height="10" />
                    <rect x="50" y="5" width="2" height="20" />
                    <rect x="56" y="8" width="2" height="14" />
                    <rect x="62" y="4" width="2" height="22" />
                    <rect x="68" y="6" width="2" height="18" />
                    <rect x="74" y="7" width="2" height="16" />
                    <rect x="80" y="3" width="2" height="24" />
                  </svg>
                </div>

                {/* Progress bar */}
                <div className="relative w-full h-2 bg-gray-200 rounded-full mb-5">
                  <div className="absolute left-0 top-0 h-2 w-1/5 bg-[#007BCE] rounded-full"></div>
                  <div className="absolute left-1/5 top-1/2 w-4 h-4 bg-white border border-gray-300 rounded-full transform -translate-y-1/2"></div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-[#334155]">00:00</span>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-[#FF8C00] hover:bg-[#e57d00] text-white rounded-full p-4 transition"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <span className="text-sm text-[#334155]">05:00</span>
                </div>

                {/* Playback Speed */}
                <div>
                  <p className="text-sm text-[#0F172A] font-medium mb-2">
                    Playback Speed:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => setPlaybackRate(speed)}
                        className={`px-3 py-1 rounded-md border text-sm font-medium transition ${
                          playbackRate === speed
                            ? "bg-[#007BCE] text-white border-[#007BCE]"
                            : "border-gray-300 text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==== Right: Feature List ==== */}
          <div className="space-y-10">
            {[
              {
                title: "AI–Powered Accuracy",
                desc: "Advanced AI technology delivers industry-leading transcription accuracy for crystal-clear results.",
              },
              {
                title: "Minute–Based Pricing",
                desc: "Pay only for what you use with transparent, flexible minute-based packages.",
              },
              {
                title: "Human Review Quality",
                desc: "Every transcript is verified by expert reviewers to ensure perfect accuracy.",
              },
              {
                title: "Automated Invoicing & Receipts",
                desc: "Get instant invoices and receipts automatically generated for every transaction.",
              },
            ].map((feature, index) => (
              <div key={index} className="border-l-2 border-[#007BCE] pl-6">
                <h4 className="text-lg font-semibold text-[#0F172A] mb-1">
                  {feature.title}
                </h4>
                <p className="text-[#475569] text-sm leading-relaxed mb-2">
                  {feature.desc}
                </p>
                <button className="text-[#007BCE] text-sm font-medium hover:underline flex items-center gap-1">
                  Learn more <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranscriptionFeatures;
