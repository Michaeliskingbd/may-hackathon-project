import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-bold text-gray-800 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {question}
        {open ? (
          <MdKeyboardArrowUp className="text-2xl text-blue-500" />
        ) : (
          <MdKeyboardArrowDown className="text-2xl text-blue-500" />
        )}
      </button>
      {open && <p className="mt-3 text-white">{answer}</p>}
    </div>
  );
};

const FAQSection = ({ title, faqs }) => (
  <div className="bg-[#1ca8cb] shadow-md text-white rounded-xl p-6">
    <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
    {faqs.map((faq, index) => (
      <FaqItem key={index} question={faq.question} answer={faq.answer} />
    ))}
  </div>
);

const FaqDetails = () => {
  const bookingFAQs = [
    {
      question: "How do I book a flight?",
      answer:
        "Select your departure and arrival locations, choose travel dates, and complete payment online.",
    },
    {
      question: "Can I book multiple passengers at once?",
      answer:
        "Yes, you can select the number of passengers during the booking process.",
    },
  ];

  const paymentFAQs = [
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit cards, debit cards, and popular online payment gateways.",
    },
    {
      question: "Can I get a refund if I cancel?",
      answer:
        "Refund policies depend on the airline and ticket type. Check your booking confirmation for details.",
    },
  ];

  const luggageFAQs = [
    {
      question: "What is the baggage allowance?",
      answer:
        "Allowance varies by airline and ticket class. Standard economy usually includes 1 carry-on and 1 checked bag.",
    },
    {
      question: "Can I bring extra luggage?",
      answer:
        "Yes, extra luggage can be added for a fee during booking or at check-in.",
    },
  ];

  const travelFAQs = [
    {
      question: "Do I need a visa?",
      answer:
        "Visa requirements depend on your nationality and destination country. Check before booking.",
    },
    {
      question: "Can I change my flight?",
      answer:
        "Flight changes are possible depending on the airline policy and ticket type.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-10 min-h-[300px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          <FAQSection title="Booking Questions" faqs={bookingFAQs} />
          <FAQSection title="Payment Questions" faqs={paymentFAQs} />
          <FAQSection title="Luggage Questions" faqs={luggageFAQs} />
          <FAQSection title="Travel Info" faqs={travelFAQs} />
        </div>
        <div className="pt-8">
            <p className="font-bold text-black">Ads</p><img className="w-full h-[250px]" src="https://img.freepik.com/free-vector/realistic-travel-agency-twitch-banner_23-2149382865.jpg" alt="Ads banner"/>
        </div>
      </div>
    </section>
  );
};

export default FaqDetails;
