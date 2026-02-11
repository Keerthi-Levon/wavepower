import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What is wave energy and how does it work?",
    answer:
      "Wave energy captures the natural motion of ocean waves and converts it into electricity using mechanical and electrical systems."
  },
  {
    question: "Is wave energy environmentally safe?",
    answer:
      "Yes. Modern wave systems are designed to operate safely within marine ecosystems and produce zero emissions."
  },
  {
    question: "How reliable is wave energy compared to other renewables?",
    answer:
      "Wave energy is highly predictable and consistent compared to solar and wind energy."
  },
  {
    question: "Where can wave energy systems be installed?",
    answer:
      "Wave energy systems are typically installed in coastal regions and island communities."
  },
  {
    question: "What are the long-term benefits of wave energy?",
    answer:
      "Long-term benefits include energy security, sustainability, and reduced dependence on fossil fuels."
  },
  {
    question: "Is wave energy scalable for future energy needs?",
    answer:
      "Yes. Wave energy projects can scale from pilot installations to large commercial deployments."
  }
];

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);  
    } else {
      setActiveIndex(index);  
    }
  };

  return (
    <section className="faq-section">
      <div className="container">

        <h2 className="faq-title text-center">
          Frequently asked questions
        </h2>

        <div className="faq-wrapper">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{index + 1}. {item.question}</span>
                <FaChevronDown className="faq-icon" />
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
