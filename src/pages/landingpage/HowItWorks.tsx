import React from "react";
import { Upload, Wand2, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-[#007BCE]" />,
      title: "Upload Audio",
      desc: "Choose your file and upload it securely. We support all major audio formats.",
    },
    {
      icon: <Wand2 className="w-8 h-8 text-[#007BCE]" />,
      title: "AI Transcribes + Human Review",
      desc: "Our system generates text and reviewers refine it for perfect accuracy.",
    },
    {
      icon: <Download className="w-8 h-8 text-[#007BCE]" />,
      title: "Download & Share",
      desc: "Get your transcript in PDF, Word, or Subtitle format instantly.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F9FBFF] py-28 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block bg-[#F1F7FF] px-5 py-1.5 rounded-full text-sm text-[#0F172A] font-medium mb-6 shadow-sm">
            How it works
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-3">
            Transcribe Your Audio in 3 Simple Steps
          </h2>

          <p className="text-[#475569] text-base md:text-lg max-w-2xl mx-auto">
            From upload to final text, we’ve made transcription effortless.
          </p>
        </motion.div>

        {/* --- Steps Grid --- */}
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex justify-center ${
                index === 1 ? "translate-y-6 sm:translate-y-8" : ""
              }`}
            >
              <Card className="flex flex-col justify-between w-full bg-white border border-[#E5E9F0] shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 rounded-3xl">
                <CardContent className="p-10 flex flex-col items-center text-center flex-grow">
                  <div className="bg-[#E6F3FF] rounded-2xl p-4 mb-6 flex items-center justify-center shadow-inner">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
