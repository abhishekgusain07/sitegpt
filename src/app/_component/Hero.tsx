import Image from "next/image"
import Link from "next/link"
import Video from "./Video";


const Benefits = ['Personalized onboarding help', 'Friendly pricing as you scale', '95+ languages supported', '7-day free trial', 'Cancel anytime'];
const Companies = [
  {
    name: 'alignable',
    imageSrc: 'https://sitegpt.ai/images/customer-logos/alignable.png'
  },{
    name: 'screen-binge',
    imageSrc: 'https://sitegpt.ai/images/customer-logos/screen-binge.png'
  },{
    name: 'sheets-giggles',
    imageSrc: 'https://sitegpt.ai/images/customer-logos/sheets-giggles.png'
  },{
    name: 'cbs-bahamas',
    imageSrc: 'https://sitegpt.ai/images/customer-logos/cbs-bahamas.png'
  },
  {
    name: 'link-research-tools',
    imageSrc: 'https://sitegpt.ai/images/customer-logos/link-research-tools.png'
  }
]
const Hero = () =>  {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 pb-12 pt-8 sm:pb-16 lg:pb-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2">
          <div className="max-w-xl mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left">
            <div className="inline-flex items-center justify-center transition-all duration-150 hover:-translate-y-1 hover:shadow-md lg:justify-start">
              <img
                className="h-12 w-auto"
                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=387564&theme=light&period=daily"
                alt="SiteGPT - ChatGPT for every website | Product Hunt"
              />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-wide text-gray-900 mt-8 sm:text-5xl lg:text-6xl xl:pr-12">
              Make <span className="text-blue-600">AI</span> your expert customer <span className="text-blue-600">support agent</span>
            </h1>
            <p className="text-base font-normal text-gray-700 mt-5 sm:text-lg lg:text-xl px-4">
              It&apos;s like having ChatGPT specifically for your SaaS product. Instantly answer your visitor&apos;s questions with a personalized chatbot trained on your website content.
            </p>
            <ul className="flex flex-col justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-900 mt-6 sm:flex-row sm:flex-wrap sm:mt-8 lg:justify-start">
              {Benefits.map((item, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:mt-8 lg:justify-start">
              <Link href="/pricing" className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Start a free trial
              </Link>
              <Link href="/book-a-demo" className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 rounded-xl px-8 py-4 hover:bg-gray-50">
                Book a demo
              </Link>
            </div>
          </div>
          <div className="xl:px-16">
            <div className="aspect-[1/2] overflow-hidden ring-1 ring-blue-600 rounded-2xl sm:aspect-[3/4]">
              <iframe className="h-full w-full object-cover" src="https://widget.sitegpt.ai/c/360485494599975514?user_email=&user_email_signature=" title="SiteGPT Demo"></iframe>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-4 p-2 flex items-center justify-center bg-blue-600 rounded-lg">
          <div className="mt-6 min-h-full min-w-full">
            <Video />
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-16 text-center lg:mt-20">
          <p className="text-base font-semibold text-gray-900">Trusted by these leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 mt-4 sm:mt-6 lg:gap-x-8">
            {Companies.map((company, index) => (
              <Image
                key={index}
                className="h-12 w-auto object-contain mix-blend-multiply sm:h-14"
                src={company.imageSrc}
                alt=""
                width={168}
                height={56}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    )
}
export default Hero
