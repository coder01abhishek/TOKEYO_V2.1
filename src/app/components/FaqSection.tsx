"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is Project Tokyo?",
    answer:
      "Project Tokyo is a platform where you can create and interact with AI companions. You can choose existing characters or design your own and engage with them in real time. You can also go live & stream on any platform once you configure them.",
  },
  {
    question: "How does it work?",
    answer:
      "You select a character and customize features such as memory and voice. The system then brings the character to life so you can chat or even stream with it.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No installation is required. Everything runs in your browser and is hosted online. ",
  },
  {
    question: "Can I create my own character?",
    answer:
      "Yes. You can design your own companion with a unique look and personality. In the future you will also be able to sell your creations on the marketplace.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "The platform supports multiple languages including English Spanish Japanese and more.",
  },
  {
    question: "Is it free to use?",
    answer:
      "There is a free tier that allows you to try the core features. Advanced modules and premium characters will be available through paid plans.",
  },
  {
    question: "What are modules ?",
    answer:
      "Modules are extra functions such as memory voice and streaming tools that can be activated to expand what your character can do.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. All interactions are handled securely. Your data is not shared with external parties and you stay in control of your content.",
  },
  {
    question: "Can I use the characters for streaming?",
    answer:
      "Yes. Characters can be linked with streaming platforms so you can have a live interactive presence. Some features are still in development and will be released soon.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white md:py-16 py-10 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="md:text-5xl text-3xl md:leading-15 leading-10 ">
            Questions?
            <br/> Lets clear things up.
          </h2>
          <p className="text-[#A0A0A0] w-full max-w-lg">
            AI companions, streaming integration, character customization, 
            memory modules... we know there&apos;s a lot to understand about 
            bringing your digital characters to life.
          </p>
          <p className="text-[#A0A0A0] w-full max-w-lg">
            We&apos;re here to make it clear - check out our FAQs below, and if you 
            still have questions about creating your perfect AI companion, 
            we&apos;ve got you covered.
          </p>
        </div>

        <div className="divide-y divide-[#FFFFFF4D]">
          {faqData.map((item, index: number) => (
            <div key={index}>
              <button
                className="w-full text-left py-6 flex justify-between items-center transition-colors duration-200 hover:text-gray-300"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="pb-4 text-base text-white/60 pr-10">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
