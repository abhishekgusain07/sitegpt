"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const FAQ  = () => {
  const [activeCategory, setActiveCategory] = useState('chatbot-training-and-support');

  const categories = [
    { id: 'chatbot-training-and-support', name: 'Chatbot Training and Support' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'technology-and-integrations', name: 'Technology and Integrations' },
  ];

  const faqs = [
    {
      category: 'chatbot-training-and-support',
      question: "Can I add text content to train the chatbot if I don't have web pages to scrape or files to upload?",
      answer: "Yes, you're able to enter raw text content as training data."
    },
    {
      category: 'chatbot-training-and-support',
      question: "Do you have a plan for agencies to offer chatbots to their clients?",
      answer: "Yes, please contact us by sending us an email for more information."
    },
    {
      category: 'chatbot-training-and-support',
      question: "Is there a demo that I can try?",
      answer: "Yes, you can go to sitegpt.ai/demo and try out the demo. The demo bot you see on sitegpt.ai/demo is trained on the sitegpt.ai website content itself. So you can ask any questions related to SiteGPT website in that demo bot and it will answer it. You can also sign up for a 7-day free trial and try out everything on your own data."
    },
    {
      category: 'chatbot-training-and-support',
      question: "What type of content can we use to train the chatbot?",
      answer: "You can use any type of content to train the chatbot. The more content you provide, the better the chatbot will be able to answer the questions."
    },
    {
      category: 'chatbot-training-and-support',
      question: "Do you retrain the chatbot automatically when the website content changes?",
      answer: "Right now, for retraining, you have to go to the dashboard and click on Retrain button to retrain the chatbot. We are working on automating this process and do it periodically."
    },
    {
      category: 'chatbot-training-and-support',
      question: "Can I upload files to train the chatbot?",
      answer: "Yes. You can upload CSV/TXT/PDF/DOCX/PPTX/MD files to train the chatbot. The limits vary based on what plan you are on."
    },
    {
      category: 'chatbot-training-and-support',
      question: "Some of my files are larger than 10 MB. What do I do?",
      answer: "Please contact us on bhanu@sitegpt.ai. We can figure out a way for you to upload those files."
    },
    {
      category: 'technology-and-integrations',
      question: "How do I add the chatbot to my website?",
      answer: "Each chatbot gets its own unique url, you can embed the chatbot on your own site via the embed code we provide. You can even directly link to the chatbot from your site."
    },
    {
      category: 'chatbot-training-and-support',
      question: "How do I train the chatbot?",
      answer: "You can train the chatbot by adding a website link, a sitemap link, a Zendesk Help Center Link, a Gitbook link. You can just enter a URL and the chatbot will be trained on all the content present on that URL. You can also upload CSV/TXT/PDF/DOCX/PPTX/MD files to train the chatbots."
    },
    {
      category: 'chatbot-training-and-support',
      question: "How long does the training take?",
      answer: "It depends on the number of pages you are training. But usually, it should be done within a few minutes."
    },
    {
      category: 'chatbot-training-and-support',
      question: "How can we contact you?",
      answer: "You can reach out to us at bhanu@sitegpt.ai."
    },{
      question: "Can you embed a chatbot on multiple websites?",
      answer: "Yes, you're able to add any chatbot to any number of sites that you want visitors to interact with.",
      category: "pricing"
    },
    {
      question: "In every pricing plan, the message limits are written as Upto x messages per month. What does it mean?",
      answer: (
        <div>
          <p>GPT-4 messages are 10 times costlier than GPT-3.5 messages.</p>
          <p>
            For example, let&apos;s take <strong>$99/mo Growth plan</strong>.<br />
            In this plan, you get <strong>10k messages per month</strong> if you use <strong>GPT-3.5</strong>.<br />
            But if you use <strong>GPT-4</strong>, then you only get <strong>1k messages per month</strong>.<br />
            You can also use a combination of both <strong>GPT-3.5</strong> and <strong>GPT-4</strong> if you want.
          </p>
        </div>
      ),
      category: "pricing"
    },
    {
      question: "Do you have a plan for agencies to offer chatbots to their clients?",
      answer: "Yes, please contact us by sending us an email for more information.",
      category: "pricing"
    },
    {
      question: "Is there a free plan?",
      answer: (
        <span>
          No, there is no free plan. But, you have a 7-day free trial where you can try out everything. You can also go to{' '}
          <Link href="https://sitegpt.ai/demo" target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:underline">
            sitegpt.ai/demo
          </Link>{' '}
          and try the demo bot.
        </span>
      ),
      category: "pricing"
    },
    {
      question: "Is there a demo that I can try?",
      answer: (
        <span>
          Yes, you can go to{' '}
          <Link href="https://sitegpt.ai/demo" target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:underline">
            sitegpt.ai/demo
          </Link>{' '}
          and try out the demo. The demo bot you see on{' '}
          <Link href="https://sitegpt.ai/demo" target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:underline">
            sitegpt.ai/demo
          </Link>{' '}
          is trained on the <strong>sitegpt.ai</strong> website content itself. So you can ask any questions related to SiteGPT website in that demo bot and it will answer it. You can also sign up for a 7-day free trial and try out everything on your own data.
        </span>
      ),
      category: "pricing"
    },
    {
      question: "Is there a limit on number of messages that can be sent?",
      answer: "Yes, there are limits on the number of messages that can be sent. Please check the above pricing plans to see the limits for various plans. You can also purchase addons to increase the limits.",
      category: "pricing"
    },
    {
      question: "Does it work on websites that are in other languages than English?",
      answer: "Yes, your website can be in any language, not just English. Chatbot can also answer questions in a different language. You can also ask questions in a different language and the chatbot will be able to answer them.",
      category: "pricing"
    },
    {
      question: "My company needs a custom integration or custom feature that is not yet supported by SiteGPT. What should I do?",
      answer: "If you need us to build a custom integration for your company, you can join as an enterprise customer and we can figure out a custom pricing plan for you, based on your needs.",
      category: "pricing"
    },
    {
      question: "Is there a whitelabel option available for SiteGPT?",
      answer: (
        <span>
          Yes, please contact <code className="bg-gray-100 p-1 rounded">bhanu@sitegpt.ai</code> if you are interested in white labelling the product for your own customers. The pricing varies based on your needs.
        </span>
      ),
      category: "pricing"
    },
    {
      question: "Can you embed a chatbot on multiple websites?",
      answer: "Yes, you're able to add any chatbot to any number of sites that you want visitors to interact with.",
      category: "technology-and-integrations"
    },
    {
      question: "Do you have API for SiteGPT?",
      answer: (
        <span>
          Yes, there is a very comprehensive API available for SiteGPT. You can check it out at{' '}
          <a href="https://sitegpt.ai/docs/api-reference" target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:underline">
            sitegpt.ai/docs/api-reference
          </a>
          . Please contact us for more details.
        </span>
      ),
      category: "technology-and-integrations"
    },
    {
      question: "Do you use ChatGPT (aka GPT-3.5 Turbo) or GPT-4?",
      answer: <span>SiteGPT uses <code className="bg-gray-100 p-1 rounded">GPT-4 API</code> to provide you the best quality for your customer support experience.</span>,
      category: "technology-and-integrations"
    },
    {
      question: "How do I add the chatbot to my website?",
      answer: "Each chatbot gets its own unique url, you can embed the chatbot on your own site via the embed code we provide. You can even directly link to the chatbot from your site.",
      category: "technology-and-integrations"
    },
    {
      question: "Can I have the SiteGPT on Facebook Messenger? Do you have Facebook Messenger Integration?",
      answer: <span>Yes. We have an integration with Facebook Messenger. Please contact us at <code className="bg-gray-100 p-1 rounded">bhanu@sitegpt.ai</code> and we will enable it for you.</span>,
      category: "technology-and-integrations"
    },
    {
      question: "Can I have the SiteGPT on Whatsapp? Do you have Whatsapp Integration?",
      answer: <span>No. We currently don&apos;t have any kind of integration with Whatsapp. But if this something that you want, please reach out to us at <code className="bg-gray-100 p-1 rounded">bhanu@sitegpt.ai</code> and we can figure out a custom plan for you and build the integration for you based on your needs.</span>,
      category: "technology-and-integrations"
    },
    {
      question: "Can I have the SiteGPT on Slack? Do you have Slack Integration?",
      answer: <span>Yes. We have an integration with Slack. Please contact us at <code className="bg-gray-100 p-1 rounded">bhanu@sitegpt.ai</code> and we will enable it for you.</span>,
      category: "technology-and-integrations"
    },
    {
      question: "How does it integrate with other chat providers like Crisp, Intercom etc?",
      answer: <span>At the moment, SiteGPT has integrations with chat Crisp, Zendesk, Messenger and Slack. We are constantly adding more and more integrations. If you want to request a custom integration, we are open to building it too. Please reach out to us at <code className="bg-gray-100 p-1 rounded">bhanu@sitegpt.ai</code> to discuss further.</span>,
      category: "technology-and-integrations"
    },
    {
      question: "What is considered as a \"message\"?",
      answer: "Both the user message and the bot generated reply are counted separately when counting the number of messages. For example, when the user sends a message to the bot and the bot generates a reply, then this would be counted as two messages.",
      category: "technology-and-integrations"
    },
    {
      question: "Does it integrate with ticketing platforms like Zendesk, Intercom, Freshdesk, Hubspot etc?",
      answer: <span>Yes. But right now, this functionality is only available to Enterprise customers. So if you want integration with your own ticketing platform, please reach out to us at <code className="bg-gray-100 p-1 rounded">bhanu@sitegpt.ai</code> and we can figure out a custom plan just for you.</span>,
      category: "technology-and-integrations"
    },
    {
      question: "Will I be able to see the chats/interactions that the users are having with my chatbots?",
      answer: "Yes, you have complete access to all the chats/interactions with your chatbots. You can see the entire chat history of all the interactions made with your chatbot. In the future, we will also generate insights automatically based on your chatbot history. Things like most asked questions, questions that the chatbot was unable to answer properly etc. will be automatically shown to you in the future.",
      category: "technology-and-integrations"
    },
    {
      question: "Can I customize the chatbot?",
      answer: "Yes, you can change the color, chatbot icon, chatbot name, chatbot suggestions, and a lot of other things. You can customize everything you see in the chatbot.",
      category: "technology-and-integrations"
    },
    {
      question: "Do you store the chatbot messages?",
      answer: "Yes, we store the all the questions that are asked by the visitors and also all the answers that the chatbot replied with. We show all this chat history to the chatbot owner inside the dashboard. For example, if you used SiteGPT to create a chatbot, you will be able to see the conversations that users are having with your chatbot from the dashboard. We don't store any other information from the visitors except the questions they asked and the answers the chatbot replied with.",
      category: "technology-and-integrations"
    },
    {
      question: "Does it work on websites that are in other languages than English?",
      answer: "Yes, your website can be in any language, not just English. Chatbot can also answer questions in a different language. You can also ask questions in a different language and the chatbot will be able to answer them.",
      category: "technology-and-integrations"
    },
    {
      question: "Do you use Open AI models or your own custom model?",
      answer: "We use Open AI models for everything at the moment.",
      category: "technology-and-integrations"
    },
    {
      question: "My company needs a custom integration or custom feature that is not yet supported by SiteGPT. What should I do?",
      answer: "If you need us to build a custom integration for your company, you can join as an enterprise customer and we can figure out a custom pricing plan for you, based on your needs.",
      category: "technology-and-integrations"
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">FAQs</h2>
          <p className="text-base font-normal text-gray-600 mt-4 sm:text-lg">
            Have a different question and can&apos;t find the answer you&apos;re looking for? Reach out to our support team by{' '}
            <Link href="mailto:bhanu@sitegpt.ai" className="text-blue-600 hover:text-blue-500 hover:underline">
              sending us an email
            </Link>{' '}
            and we&apos;ll get back to you as soon as we can.
          </p>
        </div>

        <div className="mt-12 border-b border-gray-200 sm:mt-16">
          <nav className="flex w-full flex-nowrap gap-6 overflow-x-auto -mb-px sm:gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap text-base font-semibold transition-all duration-150 border-b-2 px-0.5 pb-3 ${
                  activeCategory === category.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-5 mt-8 lg:grid-cols-2 auto-rows-fr">
        {faqs
          .filter((faq) => faq.category === activeCategory)
          .map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
      </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string | React.JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative py-2">
      <details
        className="group px-6"
        open={isOpen}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900">
          {question}
          <span className="ml-6 flex h-7 items-center">
            <svg
              className={`h-5 w-5 transform transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </summary>
        <div className={`mt-3 pr-12 absolute bg-white z-10 w-full max-h-60 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      </details>
      <div className='h-[1px] w-full bg-gray-300 text-muted-foreground mt-3'/>
    </div>
  );
};
export default FAQ;