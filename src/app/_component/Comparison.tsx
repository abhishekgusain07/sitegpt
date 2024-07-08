const Comparison = () => {
    return (
        <div className="relative">
            <div className="absolute grid inset-0" aria-hidden="true">
                <div className="bg-blue-50"></div>
                <div className="bg-white"></div>
            </div>
            <div className="relative pt-12 lg:pt-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <BeforeCard />
                <AfterCard />
                </div>
            </div>
            </div>
        </div>
    )
}
const BeforeCard = () => {
    return (
      <div className="bg-white shadow-lg ring-2 ring-inset ring-gray-200 rounded-2xl">
        <div className="p-8 sm:p-12">
          <CardHeader icon={<BeforeIcon />} text="Before" />
          <h3 className="font-display text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl">
            Fickle, one-size-fits-all chatbots that do more harm than good
          </h3>
          <ul className="text-base text-gray-900 mt-6 space-y-3 sm:text-lg">
            <li>Generic GPT tools don't answer based on your training data</li>
            <li>Custom-built bots are finicky and difficult to maintain</li>
            <li>Customer support staff takes 3+ months to train</li>
            <li>Bogged down with support tickets</li>
          </ul>
        </div>
      </div>
    );
  };
  const AfterCard = () => {
    return (
      <div className="bg-blue-600 shadow-lg rounded-2xl">
        <div className="p-8 sm:p-12">
          <AfterCardHeader icon={<AfterIcon />} text="After" textColor="text-blue-100" />
          <h3 className="font-display text-2xl font-bold tracking-tight text-white mt-4 sm:text-3xl">
            An automated resource that super charges your support team
          </h3>
          <ul className="text-base text-white mt-6 space-y-3 sm:text-lg">
            <ListItem icon={<CheckIcon />}>
              Provide 24/7/365 quality customer support with instant responses
            </ListItem>
            <ListItem icon={<CheckIcon />}>
              Automate answering the vast majority of support tickets
            </ListItem>
            <ListItem icon={<CheckIcon />}>
              Make your current support team twice as productive
            </ListItem>
            <ListItem icon={<CheckIcon />}>
              Free up time to work on higher-level tasks
            </ListItem>
          </ul>
        </div>
      </div>
    );
  };
  const CardHeader = ({ icon, text, textColor = "text-gray-700" }:{
    icon: any;
    text: string;
    textColor?: string;
  }) => (
    <div className="inline-flex items-center gap-2">
      {icon}
      <p className={`text-base font-semibold ${textColor}`}>{text}</p>
    </div>
  );
  const AfterCardHeader = ({ icon, text, textColor = "text-gray-700" }:{
    icon: any;
    text: string;
    textColor?: string;
  }) => (
    <div className="inline-flex items-center gap-2">
      <p className={`text-base font-semibold ${textColor}`}>{text}</p>
      {icon}
    </div>
  );
  const ListItem = ({ children, icon }:{
    children: React.ReactNode;
    icon: any
  }) => (
    <li className="flex items-start gap-3">
      <div className="shrink-0 py-1.5">
        {icon || <svg className="h-3 w-3 fill-error-200" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>}
      </div>
      {children}
    </li>
  );
  
  const BeforeIcon = () => (
    <svg aria-hidden="true" className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
      <path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z"></path>
    </svg>
  );
  
  const AfterIcon = () => (
    <svg aria-hidden="true" className="h-6 w-6 text-blue-100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
      <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
    </svg>
  );
  
  const CheckIcon = () => (
    <svg aria-hidden="true" className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
    </svg>
  );
export default Comparison
