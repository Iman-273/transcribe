import React from "react";
import { Check, Star } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingSection: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for trying basic features",
      features: [
        "300 minutes transcription",
        "PDF/Word export",
        "Secure storage",
        "Auto invoice",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$45",
      description: "Perfect for trying basic features",
      features: [
        "500 minutes transcription",
        "PDF/Word export",
        "Secure storage",
        "Auto invoice",
        "Email support",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "$79",
      description: "Perfect for trying basic features",
      features: [
        "1000 minutes transcription",
        "PDF/Word export",
        "Secure storage",
        "Auto invoice",
        "Email support",
      ],
    },
  ];

  return (
    <section className="bg-[#EAF4FF] py-24 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-white text-gray-700 text-sm font-medium px-5 py-1.5 rounded-full mb-5 shadow-sm">
          Pricing
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Choose the Plan That Fits You
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Pay only for the minutes you need — upgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-[22px] p-8 shadow-sm transition border ${
              plan.isPopular
                ? "border-orange-400 shadow-md"
                : "border-transparent"
            }`}
          >
            {/* Popular Tag */}
            {plan.isPopular && (
              <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                Popular Plan
              </div>
            )}

            {/* Orange Star Icon */}
            <div className="absolute top-4 right-4">
              <Star className="text-orange-400 fill-orange-400" size={20} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {plan.name}
            </h3>
            <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

            {/* Price */}
            <div className="text-5xl font-bold text-gray-900 mb-1">
              {plan.price}
            </div>
            <p className="text-gray-500 text-sm mb-6">USD/month</p>

            {/* Button */}
            <button
              className={`w-full py-2.5 rounded-md text-sm font-medium border transition mb-6 ${
                plan.isPopular
                  ? "bg-[#007BCE] text-white border-[#007BCE] hover:bg-[#006bb5]"
                  : "border-[#007BCE] text-[#007BCE] hover:bg-blue-50"
              }`}
            >
              Buy Now
            </button>

            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              What’s included:
            </h4>

            {/* Features */}
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-sm text-gray-700 leading-relaxed"
                >
                  <Check size={16} className="text-blue-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
