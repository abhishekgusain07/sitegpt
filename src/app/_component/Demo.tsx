import React from 'react';

const Demo = () => {
  return (
    <section id="demo" className="bg-blue-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">
          <div className="max-w-xl mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Live demo
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">
              See for yourself. <br className="lg:block" />
            </h2>
            <p className="text-base text-gray-700 mt-4 sm:text-lg">
              Ask the SiteGPT chatbot a question about itself.
            </p>
          </div>
          <div className="xl:px-16">
            <div className="aspect-[1/2] overflow-hidden ring-1 ring-blue-600 rounded-2xl sm:aspect-[3/4]">
              <iframe 
                className="h-full w-full object-cover"
                src="https://widget.sitegpt.ai/c/360485494599975514?user_email=&user_email_signature="
                title="SiteGPT Demo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;