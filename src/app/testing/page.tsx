import Image from 'next/image';
import Link from 'next/link';

const ChatInterface = () => {
  return (
    <div className="relative overflow-y-hidden w-full h-full flex flex-col bg-no-repeat" style={{backgroundImage: "linear-gradient(rgb(17, 25, 243), rgb(17, 25, 243), rgb(17, 25, 243), rgb(255, 255, 255))", backgroundSize: "100% 55%"}}>
      <div className="pt-5 flex-grow px-5 overflow-y-scroll">
        <div className="flex p-4 flex-col justify-between w-full">
          <div className="flex justify-between items-center w-full mb-[100px]">
            <Image src="https://mnmxcrqbhvdpcqvzmvxh.supabase.co/storage/v1/object/public/chatbot_assets/28da1aa6-20e8-42c3-832a-daec701c614c/7b016f11-eda7-47f6-9dd7-2710420209e1/chatbot_header_image?version=1719000089957?update=1720709680777" alt="Header" width={28} height={28} className="rounded-md" />
            <span className="flex">
              <Image src="/images/agents/agent1.png" alt="_" width={40} height={40} className="rounded-full" />
              <Image src="/images/agents/agent2.png" alt="_" width={40} height={40} className="rounded-full" />
              <Image src="/images/agents/agent3.png" alt="_" width={40} height={40} className="rounded-full" />
            </span>
          </div>
          <div className="text-[32px] leading-[38px] pb-1 mt-2">
            <h1 className="font-bold truncate text-white">Hi there 👋</h1>
            <h1 className="font-bold truncate text-white">How can we help?</h1>
          </div>
        </div>
        
        <div className="w-full max-h-screen mb-4 overflow-y-auto flex-grow flex flex-col gap-3">
          <div>
            <div className="flex cursor-pointer items-center group justify-between overflow-hidden p-4 rounded-xl shadow-sm border text-[14px] bg-white text-black">
              <div className="flex flex-col">
                <div className="font-semibold truncate text-black">Send us a message</div>
                <p className="truncate text-gray-500">We typically reply within a few seconds</p>
              </div>
              <svg width="16" height="16" fill="none" className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" color="#1219f3">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.394 14.7l9.356-5.4c1-.577 1-2.02 0-2.598L4.394 1.299a1.5 1.5 0 00-2.25 1.3v3.438l4.059 1.088c.494.132.494.833 0 .966l-4.06 1.087v4.224a1.5 1.5 0 002.25 1.299z" fill="#1219f3"></path>
              </svg>
            </div>
          </div>

          <div>
            <div className="flex cursor-pointer items-center group justify-between overflow-hidden p-4 rounded-xl shadow-sm border text-[14px] bg-white text-black">
              <div className="flex flex-col">
                <div className="font-semibold truncate text-black">Verify email</div>
                <p className="truncate text-gray-500">Verify your email to save your chat history</p>
              </div>
              <svg width="16" height="16" fill="none" className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" color="#1219f3">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.394 14.7l9.356-5.4c1-.577 1-2.02 0-2.598L4.394 1.299a1.5 1.5 0 00-2.25 1.3v3.438l4.059 1.088c.494.132.494.833 0 .966l-4.06 1.087v4.224a1.5 1.5 0 002.25 1.299z" fill="#1219f3"></path>
              </svg>
            </div>
          </div>

          <div className="rounded-xl shadow-sm border bg-white">
            <Link href="https://elephant.ai/auth/signup" target="_blank" className="flex gap-1 no-underline items-center justify-between p-2 text-sm leading-[21px] overflow-hidden rounded-lg m-2 text-black bg-white">
              <p>Want to Create an Assistant Like This for Your Website? Sign Up Here (It's FREE)</p>
              <div className="m-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" color="#1219f3">
                  <path fill="#1219f3" fillRule="evenodd" d="M3 3.7h4V2H3a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-2h-1.7v2a.3.3 0 01-.3.3H3a.3.3 0 01-.3-.3V4a.3.3 0 01.3-.3zM9.218 3c0 .47.38.85.85.85h1.88L8.296 7.502a.85.85 0 001.202 1.202l3.652-3.652v1.88a.85.85 0 001.7 0V3a.85.85 0 00-.85-.85h-3.932a.85.85 0 00-.85.85z" clipRule="evenodd"></path>
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex cursor-pointer flex-col overflow-hidden rounded-xl shadow-sm border bg-white">
            <div className="p-3 flex flex-col bg-white text-black">
              <button className="flex my-2 items-center justify-between py-3 px-3 w-full rounded-lg bg-gray-100 text-black">
                <p className="text-sm font-semibold">Search for help</p>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="#1219f3">
                  <g clipPath="url(#sm-solid-search_svg__clip0)" fillRule="evenodd" clipRule="evenodd">
                    <path d="M7.212 1.803a5.409 5.409 0 100 10.818 5.409 5.409 0 000-10.818zM0 7.212a7.212 7.212 0 1114.424 0A7.212 7.212 0 010 7.212z"></path>
                    <path d="M11.03 11.03a.901.901 0 011.275 0l3.43 3.432a.902.902 0 01-1.274 1.275l-3.431-3.431a.901.901 0 010-1.275z"></path>
                  </g>
                </svg>
              </button>
              <div className="flex justify-between items-center text-sm font-normal py-2.5 px-3 rounded-lg cursor-pointer bg-white text-black">
                <p>What is Elephant.ai?</p>
                <div className="w-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#1219f3" xmlns="http://www.w3.org/2000/svg" color="#1219f3">
                    <path stroke="#1219f3" strokeWidth="0.5" d="M13.7918 8L9.81992 4.03125C9.52617 3.7375 9.52617 3.2625 9.81992 2.97188C10.1137 2.68125 10.5887 2.68125 10.8824 2.97188L15.3824 7.46875C15.6668 7.75313 15.673 8.20938 15.4043 8.50313L10.8855 13.0312C10.7387 13.1781 10.5449 13.25 10.3543 13.25C10.1637 13.25 9.96992 13.1781 9.82305 13.0312C9.5293 12.7375 9.5293 12.2625 9.82305 11.9719L13.7918 8Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm font-normal py-2.5 px-3 rounded-lg cursor-pointer bg-white text-black">
                <p>What makes Elephant.ai different from other chatbots?</p>
                <div className="w-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#1219f3" xmlns="http://www.w3.org/2000/svg" color="#1219f3">
                    <path stroke="#1219f3" strokeWidth="0.5" d="M13.7918 8L9.81992 4.03125C9.52617 3.7375 9.52617 3.2625 9.81992 2.97188C10.1137 2.68125 10.5887 2.68125 10.8824 2.97188L15.3824 7.46875C15.6668 7.75313 15.673 8.20938 15.4043 8.50313L10.8855 13.0312C10.7387 13.1781 10.5449 13.25 10.3543 13.25C10.1637 13.25 9.96992 13.1781 9.82305 13.0312C9.5293 12.7375 9.5293 12.2625 9.82305 11.9719L13.7918 8Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm font-normal py-2.5 px-3 rounded-lg cursor-pointer bg-white text-black">
                <p>How quickly can I see results from implementing Elephant.ai?</p>
                <div className="w-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#1219f3" xmlns="http://www.w3.org/2000/svg" color="#1219f3">
                    <path stroke="#1219f3" strokeWidth="0.5" d="M13.7918 8L9.81992 4.03125C9.52617 3.7375 9.52617 3.2625 9.81992 2.97188C10.1137 2.68125 10.5887 2.68125 10.8824 2.97188L15.3824 7.46875C15.6668 7.75313 15.673 8.20938 15.4043 8.50313L10.8855 13.0312C10.7387 13.1781 10.5449 13.25 10.3543 13.25C10.1637 13.25 9.96992 13.1781 9.82305 13.0312C9.5293 12.7375 9.5293 12.2625 9.82305 11.9719L13.7918 8Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm font-normal py-2.5 px-3 rounded-lg cursor-pointer bg-white text-black">
                <p>How does pricing work?</p>
                <div className="w-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#1219f3" xmlns="http://www.w3.org/2000/svg" color="#1219f3">
                    <path stroke="#1219f3" strokeWidth="0.5" d="M13.7918 8L9.81992 4.03125C9.52617 3.7375 9.52617 3.2625 9.81992 2.97188C10.1137 2.68125 10.5887 2.68125 10.8824 2.97188L15.3824 7.46875C15.6668 7.75313 15.673 8.20938 15.4043 8.50313L10.8855 13.0312C10.7387 13.1781 10.5449 13.25 10.3543 13.25C10.1637 13.25 9.96992 13.1781 9.82305 13.0312C9.5293 12.7375 9.5293 12.2625 9.82305 11.9719L13.7918 8Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex sticky bottom-0 shadow border-t bg-white">
        <div className="flex-1 cursor-pointer text-gray-500 gap-2 flex flex-col group items-center py-3">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#1219f3">
            <mask id="a" fill="#fff">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.5 2.335L3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 00-3 0zM7.316 14.366a.85.85 0 10-1.132 1.268A8.704 8.704 0 0012 17.852a8.71 8.71 0 005.816-2.218.85.85 0 10-1.132-1.268A7.005 7.005 0 0112 16.152c-1.8 0-3.44-.675-4.684-1.786z"></path>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 2.335L3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 00-3 0zM7.316 14.366a.85.85 0 10-1.132 1.268A8.704 8.704 0 0012 17.852a8.71 8.71 0 005.816-2.218.85.85 0 10-1.132-1.268A7.005 7.005 0 0112 16.152c-1.8 0-3.44-.675-4.684-1.786z" fill="#1219f3"></path>
            <path d="M3 7.51l-.965-1.4-.01.007L3 7.51zm7.5-5.175L9.538.934l-.003.002.965 1.399zM21 7.51l.974-1.393-.009-.006L21 7.51zm-7.5-5.175l.966-1.4-.004-.001-.962 1.401zM6.116 14.434l1.268 1.132-1.268-1.132zm1.2-.068l1.133-1.268-1.133 1.268zm-1.132 1.268L5.05 16.902l1.133-1.268zm11.632 0l1.133 1.268-1.133-1.268zm.068-1.2l-1.268 1.132 1.268-1.132zm-1.2-.068l-1.133-1.268 1.133 1.268zM3.965 8.91l7.5-5.175L9.536.936l-7.5 5.175 1.93 2.798zm-.265.44c0-.12.063-.299.274-.447L2.026 6.117C.987 6.843.3 8.022.3 9.35h3.4zm0 10.35V9.35H.3V19.7h3.4zm.8.6a.906.906 0 01-.615-.227.509.509 0 01-.185-.373H.3c0 2.335 2.022 4 4.2 4v-3.4zm15 0h-15v3.4h15v-3.4zm.8-.6a.51.51 0 01-.185.373.906.906 0 01-.615.227v3.4c2.178 0 4.2-1.665 4.2-4h-3.4zm0-10.35V19.7h3.4V9.35h-3.4zm-.274-.447c.211.148.274.326.274.447h3.4c0-1.328-.687-2.507-1.726-3.233l-1.948 2.786zm-7.492-5.169l7.5 5.175 1.931-2.798-7.5-5.175-1.93 2.798zm-1.072.002a.991.991 0 011.076 0L14.462.934a4.39 4.39 0 00-4.924 0l1.924 2.802zm-4.078 11.83a.85.85 0 01-1.2.068l2.265-2.536a2.55 2.55 0 00-3.6.203l2.535 2.265zm-.068-1.2c.35.313.38.85.068 1.2l-2.536-2.265a2.55 2.55 0 00.203 3.6l2.265-2.535zM12 16.152c-1.8 0-3.44-.675-4.684-1.786l-2.265 2.536A10.405 10.405 0 0012 19.552v-3.4zm4.684-1.786A7.005 7.005 0 0112 16.152v3.4c2.667 0 5.105-1.004 6.949-2.65l-2.265-2.536zm-.068 1.2a.85.85 0 01.068-1.2l2.265 2.536a2.55 2.55 0 00.203-3.6l-2.536 2.264zm1.2.068a.85.85 0 01-1.2-.068l2.536-2.265a2.55 2.55 0 00-3.6-.203l2.264 2.536zM12 17.852a8.704 8.704 0 005.816-2.218l-2.265-2.536A5.305 5.305 0 0112 14.452v3.4zm-5.816-2.218A8.704 8.704 0 0012 17.852v-3.4a5.305 5.305 0 01-3.551-1.354l-2.265 2.536z" fill="#1219f3" mask="url(#a)"></path>
          </svg>
          <p className="font-medium text-sm text-[#1219f3]">Home</p>
        </div>
        <div className="flex-1 cursor-pointer text-gray-500 gap-2 flex flex-col group items-center py-3">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="messages_svg__a" fill="#fff">
              <path fillRule="evenodd" clipRule="evenodd" d="M19 2a3 3 0 013 3V20.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 01-3-3V5a3 3 0 013-3h14z"></path>
            </mask>
            <path className="messages_svg__fill" d="M19.441 21.868l1.2-1.204-1.2 1.204zM15.56 18v-1.7h.702l.498.496-1.2 1.204zM20.3 5A1.3 1.3 0 0019 3.7V.3A4.7 4.7 0 0123.7 5h-3.4zm0 8.956V5h3.4v8.956h-3.4zm0 2.544v-2.544h3.4V16.5h-3.4zm0 4.306V16.5h3.4v4.306h-3.4zm.341-.142a.23.23 0 00-.218-.043.228.228 0 00-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267l2.4-2.409zm-3.882-3.868l3.882 3.868-2.4 2.409-3.882-3.869 2.4-2.408zM5 16.3h10.559v3.4H5v-3.4zM3.7 15A1.3 1.3 0 005 16.3v3.4A4.7 4.7 0 01.3 15h3.4zm0-10v10H.3V5h3.4zM5 3.7A1.3 1.3 0 003.7 5H.3A4.7 4.7 0 015 .3v3.4zm14 0H5V.3h14v3.4z" fill="#000000" mask="url(#messages_svg__a)"></path>
            <path className="messages_svg__fill" fillRule="evenodd" clipRule="evenodd" d="M17 7a.85.85 0 010 1.7H7A.85.85 0 117 7h10zm-5 4a.85.85 0 010 1.7H7A.85.85 0 017 11h5z" fill="#000000"></path>
          </svg>
          <p className="text-sm text-gray-500">Messages</p>
        </div>
        <div className="flex-1 cursor-pointer text-gray-500 gap-2 flex flex-col group items-center py-3">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="tickets_svg__a" fill="#fff">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 4.5A1.5 1.5 0 001.5 6v2.875c0 .276.226.495.497.547a2.626 2.626 0 010 5.156c-.271.052-.497.27-.497.547V18A1.5 1.5 0 003 19.5h18a1.5 1.5 0 001.5-1.5v-2.875c0-.276-.226-.495-.497-.547a2.626 2.626 0 010-5.156c.271-.052.497-.27.497-.547V6A1.5 1.5 0 0021 4.5H3z"></path>
            </mask>
            <path className="tickets_svg__fill" d="M1.997 9.422l-.32 1.67.32-1.67zm0 5.156l-.32-1.67.32 1.67zm20.006 0l-.32 1.67.32-1.67zm0-5.156l-.32-1.67.32 1.67zM3.2 6a.2.2 0 01-.2.2V2.8A3.2 3.2 0 00-.2 6h3.4zm0 1.5V6H-.2v1.5h3.4zm0 1.375V7.5H-.2v1.375h3.4zm-.883-1.123c.332.064.883.397.883 1.123H-.2c0 1.278 1.003 2.05 1.877 2.217l.64-3.34zM5.825 12c0-2.11-1.51-3.865-3.508-4.248l-.64 3.34c.426.081.748.459.748.908h3.4zm-3.508 4.248A4.326 4.326 0 005.825 12h-3.4c0 .45-.322.827-.748.908l.64 3.34zm.883-1.123c0 .726-.551 1.059-.883 1.123l-.64-3.34c-.874.168-1.877.94-1.877 2.217h3.4zm0 1.375v-1.375H-.2V16.5h3.4zm0 1.5v-1.5H-.2V18h3.4zm-.2-.2c.11 0 .2.09.2.2H-.2A3.2 3.2 0 003 21.2v-3.4zm18 0H3v3.4h18v-3.4zm-.2.2c0-.11.09-.2.2-.2v3.4a3.2 3.2 0 003.2-3.2h-3.4zm0-1.5V18h3.4v-1.5h-3.4zm3.4 0v-1.375h-3.4V16.5h3.4zm0-1.375c0-1.278-1.003-2.05-1.877-2.217l-.64 3.34a1.119 1.119 0 01-.883-1.123h3.4zm-1.877-2.217a.926.926 0 01-.748-.908h-3.4c0 2.11 1.51 3.865 3.508 4.248l.64-3.34zM21.575 12c0-.45.322-.827.748-.908l-.64-3.34A4.326 4.326 0 0018.175 12h3.4zm.748-.908c.874-.168 1.877-.94 1.877-2.217h-3.4c0-.726.551-1.059.883-1.123l.64 3.34zM24.2 8.875V7.5h-3.4v1.375h3.4zM20.8 6v1.5h3.4V6h-3.4zm.2.2a.2.2 0 01-.2-.2h3.4A3.2 3.2 0 0021 2.8v3.4zm-18 0h18V2.8H3v3.4z" fill="#000000" mask="url(#tickets_svg__a)"></path>
            <path className="tickets_svg__stroke" d="M7.5 8.625h9" stroke="#000000" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <p className="text-sm text-gray-500">Tickets</p>
        </div>
        <div className="flex-1 cursor-pointer text-gray-500 gap-2 flex flex-col group items-center py-3">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="help_svg__stroke help_svg__circle" cx="12" cy="12" r="9.65" stroke="#000000" strokeWidth="1.7"></circle>
            <path className="help_svg__stroke help_svg__negative" d="M9.664 8.576a2.41 2.41 0 114.102 2.39l-1.075 1.104c-.326.322-.765.76-.765 1.544v.364" stroke="#000000" strokeWidth="1.7" strokeLinecap="round"></path>
            <circle className="help_svg__fill help_svg__negative" cx="11.927" cy="16.884" r="0.884" fill="#000000"></circle>
          </svg>
          <p className="text-sm text-gray-500">Help</p>
        </div>
      </div>
      
      <Link href="https://elephant.ai/" target="_blank" className="py-2 font-[500] flex items-center justify-center gap-2 bg-[#fafafa] hover:bg-[#f5f5f5] text-[#777678] text-xs text-center" style={{transition: "all 0.2s ease-in-out 0s"}}>
        <Image src="/images/logo/logo.png" width={16} height={16} alt="Elephant.ai" className="inline-block" />
        Powered by Elephant.ai
      </Link>
    </div>
  );
};

export default ChatInterface;