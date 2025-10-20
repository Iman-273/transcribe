import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-5 py-1.5 rounded-full mb-5 shadow-sm">
          Testimonials
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-3">
          What Our Customers Say
        </h2>
        <p className="text-[#475569] text-base md:text-lg">
          See why individuals and teams rely on us every day.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
            alt="Customer"
            className="rounded-[22px] w-80 h-80 object-cover shadow-sm"
          />
        </div>

        {/* Center Testimonial Card */}
        <div className="bg-[#F9FAFB] rounded-[22px] shadow-sm p-8 border border-gray-100">
          <div className="flex flex-wrap gap-3 mb-6">
            {["AI Accuracy", "Fast Turnaround", "Secure Uploads"].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-full shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-6xl font-serif text-gray-700 leading-none mb-4">“</div>
          <p className="text-[#0F172A] text-base md:text-lg leading-relaxed mb-5">
            The platform made audio review so effortless. Upload, edit, and finalize —
            all in one place. The accuracy and speed are unmatched!
          </p>
          <p className="text-[#475569] text-sm font-medium">– Brenda C</p>
        </div>

        {/* Right Promo Card */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-[22px] overflow-hidden w-80 h-80 mb-5">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
              alt="Platform Access"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
              <h3 className="text-lg font-semibold mb-1">24/7 Platform Access</h3>
              <p className="text-sm opacity-90 mb-5">Clarence B, Lawyers Owner</p>
            </div>
          </div>

          <button className="bg-[#007BCE] hover:bg-[#006bb5] text-white font-medium text-sm py-2.5 px-6 rounded-md shadow-sm">
            Start for free
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center gap-4 mt-12">
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
          <ArrowLeft size={18} className="text-gray-700" />
        </button>
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
          <ArrowRight size={18} className="text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
