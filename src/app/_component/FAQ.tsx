"use client"
import React, { useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('chatbot-training-and-support');

  const categories = [
    { value: 'chatbot-training-and-support', label: 'Chatbot Training and Support' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'technology-and-integrations', label: 'Technology and Integrations' },
  ];

  const faqs = [
    {
      question: "Can I add text content to train the chatbot if I don't have web pages to scrape or files to upload?",
      answer: "Yes, you're able to enter raw text content as training data."
    },
    {
      question: "Do you have a plan for agencies to offer chatbots to their clients?",
      answer: "Yes, please contact us by sending us an email for more information."
    },
    {
      question: "Is there a demo that I can try?",
      answer: "Yes, you can go to sitegpt.ai/demo and try out the demo. The demo bot you see on sitegpt.ai/demo is trained on the sitegpt.ai website content itself. So you can ask any questions related to SiteGPT website in that demo bot and it will answer it. You can also sign up for a 7-day free trial and try out everything on your own data."
    },{
        question: "What type of content can we use to train the chatbot?",
        answer: "You can use any type of content to train the chatbot. The more content you provide, the better the chatbot will be able to answer the questions."
      },
      {
        question: "Do you retrain the chatbot automatically when the website content changes?",
        answer: "Right now, for retraining, you have to go to the dashboard and click on <strong>Retrain</strong> button to retrain the chatbot. We are working on automating this process and do it periodically."
      },
      {
        question: "Can I upload files to train the chatbot?",
        answer: "Yes. You can upload <code>CSV/TXT/PDF/DOCX/PPTX/MD</code> files to train the chatbot. The limits vary based on what plan you are on."
      },
      {
        question: "Some of my files are larger than 10 MB. What do I do?",
        answer: "Please contact us on <code>bhanu@sitegpt.ai</code>. We can figure out a way for you to upload those files."
      },
      {
        question: "How do I add the chatbot to my website?",
        answer: "Each chatbot gets its own unique url, you can embed the chatbot on your own site via the embed code we provide. You can even directly link to the chatbot from your site."
      },
      {
        question: "How do I train the chatbot?",
        answer: "You can train the chatbot by adding a <code>website link</code>, <code>a sitemap link</code>, a <code>Zendesk Help Center Link</code>, a <code>Gitbook link</code>. You can just enter a URL and the chatbot will be trained on all the content present on that URL. You can also upload <code>CSV/TXT/PDF/DOCX/PPTX/MD</code> files to train the chatbots."
      },
      {
        question: "How long does the training take?",
        answer: "It depends on the number of pages you are training. But usually, it should be done within a few minutes."
      },
      {
        question: "How can we contact you?",
        answer: "You can reach out to us at <code>bhanu@sitegpt.ai</code>."
      }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">FAQs</h2>
          <p className="text-base font-normal text-gray-600 mt-4 sm:text-lg">
            Have a different question and can't find the answer you're looking for? Reach out to our support team by{' '}
            <a href="mailto:bhanu@sitegpt.ai" className="isomorphic-link isomorphic-link--external text-blue-600 hover:text-blue-500 hover:underline">
              sending us an email
            </a>{' '}
            and we'll get back to you as soon as we can.
          </p>
        </div>
        
        <form method="get" action={`/?index&category=${activeCategory}`} className="mt-12 border-b border-gray-200 sm:mt-16">
          <nav className="flex w-full flex-nowrap gap-6 overflow-x-auto -mb-px sm:gap-8">
            {categories.map((category) => (
              <button
                key={category.value}
                type="submit"
                name="category"
                value={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`whitespace-nowrap text-base font-semibold transition-all duration-150 border-b-2 px-0.5 pb-3 ${
                  activeCategory === category.value
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </form>

        <div className="grid grid-cols-1 gap-x-16 gap-y-5 mt-8 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="flow-root">
              <div className="divide-gray-200 -my-6 divide-y">
                <div className="relative py-6">
                  <details className="menu-details peer cursor-pointer transition-all duration-150">
                    <summary className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">
                      {faq.question}
                    </summary>
                    <div className="mt-4">
                      <p className="text-base text-gray-600">
                        <span className="prose prose-blue">{faq.answer}</span>
                      </p>
                    </div>
                  </details>
                  <ChevronIcon direction="up" className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible" />
                  <ChevronIcon direction="down" className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChevronIcon  = ({ direction, className }: {
    direction: 'up' | 'down';
    className?: string
}) => (
  <svg
    aria-hidden="true"
    className={`h-5 w-5 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path
      d={
        direction === 'up'
          ? "M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"
          : "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
      }
    />
  </svg>
);

export default FAQ;