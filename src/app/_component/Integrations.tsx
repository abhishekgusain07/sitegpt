import React from 'react';

const Integrations= () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Supercharge your chatbot
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">
            Direct integrations with your favorite tools
          </h2>
          <p className="text-base text-gray-700 mt-4 sm:text-lg">
            With native integrations into platforms like Crisp, Intercom, and Zendesk, our chatbot becomes an extended arm of your existing toolkit.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <img 
            className="w-full object-cover" 
            src="/images/integrations.svg" 
            alt="Integrations illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;