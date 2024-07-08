
interface FeatureProps {
  title: string;
  heading: string;
  description: string;
  imageSrc: string;
}

const Feature = ({ title, heading, description, imageSrc }:FeatureProps) => (
  <div className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
    <div className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
      <div className="p-8 sm:p-12 lg:p-16">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">{title}</p>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">{heading}</h3>
        <p className="text-base font-normal text-gray-700 mt-4">{description}</p>
      </div>
      <div>
        <img className="w-full object-cover" src={imageSrc} alt="" />
      </div>
    </div>
  </div>
);

const Features = () => {
  const features: FeatureProps[] = [
    {
      title: "Personalized Chatbot",
      heading: "Build a custom chatbot trained on your own content",
      description: "Ever wanted to clone yourself to answer customer queries? Now you can! Train your chatbot with your content and let it echo your brands voice. Who knew a chatbot could be your digital doppelgänger?",
      imageSrc: "https://sitegpt.ai/images/features/feature-1.svg"
    },
    {
      title: "Quick Prompts",
      heading: "Help users start conversations with quick prompts",
      description: "Give users a digital icebreaker to kick things off. Include frequently asked questions or questions you wish more users would ask to get value out of your product or service.",
      imageSrc: "https://sitegpt.ai/images/features/feature-2.svg"
    },
    {
      title: "Email Summaries",
      heading: "Stay up to date with daily email summaries",
      description: "Keep a pulse on chatbot interactions with daily summaries delivered to your inbox. Upload more training data where needed, track the chatbots performance, and gain insights into user behavior.",
      imageSrc: "https://sitegpt.ai/images/features/feature-3.svg"
    },
    {
      title: "Escalate to Human",
      heading: "Escalate to a human when necessary",
      description: "While AI can handle a vast majority of inquiries, some conversations require human touch. Users can seamlessly transition the conversation to a live agent at the push of a button. This hybrid approach ensures that users always receive the best possible assistance.",
      imageSrc: "https://sitegpt.ai/images/features/feature-4.svg"
    },
    {
      title: "Collect Leads",
      heading: "Generate leads to follow up with later",
      description: "Dont just answer questions, seize opportunities. Our chatbot captures interested visitors details, allowing you to build a list of potential leads.",
      imageSrc: "https://sitegpt.ai/images/features/feature-5.svg"
    },
    {
      title: "Functions",
      heading: "Turn natural language commands into in-app actions",
      description: "Functions allows users to automate tasks just by interacting with your chatbot. Your chatbot can listen, understand, and interact with other systems based on chat interactions.",
      imageSrc: "https://sitegpt.ai/images/features/feature-6.svg"
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-6 lg:space-y-8 xl:space-y-10">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;