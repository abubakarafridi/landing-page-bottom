import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-t border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 px-3 text-left"
        onClick={onToggle}>
        <span className="font-normal text-[#0F172A]">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}>
        <p className="p-3 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Enim sodales consequat adipiscing facilisis massa venenatis?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      question:
        'Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      question: 'Varius ultricies molestie tellus fermentum, viverra ipsum ?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      question:
        'Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      question:
        'Sagittis consectetur gravida nec turpis eros, id sit et, dictum?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ];

  return (
    <div className="flex flex-col items-center px-4">
      {/* FAQ Section */}
      <div className="flex flex-col items-center gap-6 w-full max-w-3xl mb-10">
        <h1 className="font-semibold text-[#1B65A6] text-2xl sm:text-3xl lg:text-4xl">
          Frequently asked questions
        </h1>
        <div className="rounded-lg w-full">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-6 items-center w-full max-w-3xl mt-10 mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1B65A6]">
          Contact Us
        </h1>
        <form className="space-y-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="space-y-2 w-full">
              <label htmlFor="fullName" className="block text-[#0F172A] font-normal">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your Good Name"
                className="w-full p-3 border border-[#CBD5E1] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2 w-full">
              <label htmlFor="email" className="block text-[#0F172A] font-normal">
                Mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@mail.com"
                className="w-full p-3 border border-[#CBD5E1] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="comment" className="block text-[#0F172A] font-normal">
              Comment
            </label>
            <textarea
              id="comment"
              placeholder="Write your comment here..."
              rows={4}
              className="w-full px-3 py-2 border border-[#CBD5E1] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;