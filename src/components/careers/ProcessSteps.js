import {
  DocumentTextIcon,
  UserIcon,
  ComputerDesktopIcon,
  UsersIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";

export default function ProcessSteps() {
  const steps = [
    {
      icon: <DocumentTextIcon className="h-10 w-10 text-red-500" />,
      title: "Receive Application",
      number: "01",
    },
    {
      icon: <UserIcon className="h-10 w-10 text-red-500" />,
      title: "Screen and shortlist",
      number: "02",
    },
    {
      icon: <ComputerDesktopIcon className="h-10 w-10 text-red-500" />,
      title: "Technical Test and Interview",
      number: "03",
    },
    {
      icon: <UsersIcon className="h-10 w-10 text-red-500" />,
      title: "Leadership Interview",
      number: "04",
    },
    {
      icon: <HandRaisedIcon className="h-10 w-10 text-red-500" />,
      title: "Get Offer",
      number: "05",
    },
  ];

  return (
    <div className="app__container">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y- md:space-x-4 p-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="relative flex flex-col items-center bg-white p-4 shadow-md w-44 h-36">
              {step.icon}
              <div className="text-center font-semibold text-gray-700 max-w-[130px] text-sm mt-2">{step.title}</div>
              <div className="font-bold absolute bottom-[-12px] rounded-full p-1 bg-red-400/95 text-white text-sm">{step.number}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block mx-2 w-[60px] text-3xl text-center text-red-500">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
