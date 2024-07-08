import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const Testimonial = ({ quote, name, title, imageSrc }:TestimonialProps) => (
  <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
    <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full" src={imageSrc} alt={name} />
    <div>
      <blockquote>
        <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">{quote}</p>
      </blockquote>
      <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">{name}</p>
      <p className="text-sm font-normal text-gray-700 mt-0.5">{title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "\"SiteGPT appears to be first really production ready support solution that allows custom training, while so many others break or simply lack functionality. (we have tested and trialed MANY in the past 3 months)\"",
      name: "Christoph C. Cemper",
      title: "Founder & CEO of AIPRM.com",
      imageSrc: "https://sitegpt.ai/images/testimonials/christoph.jpeg"
    },
    {
      quote: "\"Other than the obvious benefits of using SiteGPT, we are getting user feedback/feature requests - it's only day 1 of using the SiteGPT bot.\"",
      name: "Akhil Kundh",
      title: "Growth at CheqUptime",
      imageSrc: "https://sitegpt.ai/images/testimonials/akhil.jpeg"
    },
    {
      quote: "\"We've got the bot dialled in - we're using GPT-4, have an avenue for escalations to Zendesk, and so far I have no complaints.\"",
      name: "Brent Burrows II",
      title: "Vice President – Retail & Sales at CBS Bahamas",
      imageSrc: "https://sitegpt.ai/images/testimonials/brent.jpeg"
    },
    {
      quote: "\"Every now and then, you stumble on a great solution. SiteGPT is like I imagined a chatbot solution could be a few years back.\"",
      name: "Frank Smit",
      title: "Chief Innovation Officer at OBI4wan",
      imageSrc: "https://sitegpt.ai/images/testimonials/frank.jpeg"
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Customer testimonials
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">
            Don't just take our word for it
          </h2>
        </div>
        <div className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-12 mx-auto mt-12 text-center sm:mt-16 sm:text-left lg:max-w-none lg:grid-cols-2 lg:mx-0">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;