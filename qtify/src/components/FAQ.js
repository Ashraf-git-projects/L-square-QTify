// components/FAQ.js
import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Is Qtify free to use?",
    answer: "Yes! It is 100% free, and has 0% ads!",
  },
  {
    question: "Can I download and listen to songs offline?",
    answer: "Sorry, unfortunately we don’t provide the service to download any songs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div
          className={`faq-item ${openIndex === index ? "open" : ""}`}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <span className="faq-arrow">{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
