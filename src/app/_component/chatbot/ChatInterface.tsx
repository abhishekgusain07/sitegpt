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
              <Image src="/agent1.png" alt="_" width={40} height={40} className="rounded-full" />
              <Image src="/agent2.png" alt="_" width={40} height={40} className="rounded-full" />
              <Image src="/agent3.png" alt="_" width={40} height={40} className="rounded-full" />
            </span>
          </div>
          <div className="text-[32px] leading-[38px] pb-1 mt-2">
            <h1 className="font-bold truncate text-white">Hi there 👋</h1>
            <h1 className="font-bold truncate text-white">How can we help?</h1>
          </div>
        </div>
        
        {/* Chat options and content */}
        <div className="w-full max-h-screen mb-4 overflow-y-auto flex-grow flex flex-col gap-3">
          {/* Chat options */}
          {/* ... (Include the chat options here) */}
        </div>
      </div>
      
      {/* Footer navigation */}
      <div className="flex sticky bottom-0 shad border-t bg-white">
        {/* Footer navigation items */}
        {/* ... (Include the footer navigation items here) */}
      </div>
      
      {/* Powered by link */}
      <Link href="https://elephant.ai/" target="_blank" className="py-2 font-[500] flex items-center justify-center gap-2 bg-[#fafafa] hover:bg-[#f5f5f5] text-[#777678] text-xs text-center" style={{transition: "all 0.2s ease-in-out 0s"}}>
        <Image src="/logo.png" width={16} height={16} alt="Elephant.ai" className="inline-block" />
        Powered by Elephant.ai
      </Link>
    </div>
  );
};

export default ChatInterface;