import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "1. How long does it take to get my transcription?",
    answer:
      "Turnaround time depends on the audio length, but most files are transcribed within a few hours.",
  },
  {
    question: "2. Is my data secure on your platform?",
    answer:
      "Yes, all files are encrypted and securely stored. Only authorized personnel can access your data.",
  },
  {
    question: "3. Can I edit the transcription after submission?",
    answer:
      "Yes, you can edit the transcription from your dashboard anytime after it’s delivered.",
  },
  {
    question: "4. What payment methods do you support?",
    answer:
      "We support credit/debit cards, PayPal, and other major online payment methods.",
  },
  {
    question: "5. How do I become a reviewer on your platform?",
    answer:
      "You can apply through our 'Careers' page. Once approved, you’ll receive access to reviewer tools.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-5 py-1.5 rounded-full mb-4 shadow-sm">
          FAQs
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-[#475569] text-base md:text-lg">
          Find quick answers to common queries about our auditing services.
        </p>
      </div>

      {/* Accordion */}
      <div className="bg-[#F9FBFF] border border-gray-100 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] max-w-3xl w-full divide-y divide-gray-100">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-5 md:p-6 transition-colors hover:bg-white rounded-2xl"
            >
              <span className="font-medium text-gray-900 text-[15px]">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-500" />
              ) : (
                <Plus className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-5 md:px-6 pb-6 -mt-2 text-[#007BCE] text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
