import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <StepsList />
      </div>
    </section>
  );
};

const Header = () => (
  <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
    <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl p-8">
      You're <span className="text-blue-600">three easy steps</span> away from your own personalized AI support chatbot
    </h2>
  </div>
);

const StepsList = () => (
  <div className="grid max-w-sm grid-cols-1 gap-12 mx-auto mt-12 text-center sm:mt-16 lg:max-w-none lg:grid-cols-3 lg:text-left">
    <Step
      number={1}
      title="Sync training data"
      description="Enter your URL for SiteGPT to scan, or upload files, or drop in raw text content."
    />
    <Step
      number={2}
      title="Install on your site"
      description="Embed a chatbot on as many sites as you want — your marketing site, in-app, help center… wherever."
    />
    <Step
      number={3}
      title="Learn and refine"
      description="Use real chat history to improve your chatbot by providing feedback that allows it to improve with every interaction."
    />
  </div>
);

const Step = ({ number, title, description }:{
    number: number;
    title: string;
    description: string
}) => (
  <div>
    <div className="inline-flex rounded-lg shadow-lg h-12 w-12 items-center justify-center bg-blue-600 text-xl font-bold text-white ">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mt-4 sm:text-2xl lg:mt-6">{title}</h3>
    <p className="text-sm font-normal text-gray-700 mt-2 sm:text-base sm:mt-3">{description}</p>
  </div>
);

export default HowItWorks;