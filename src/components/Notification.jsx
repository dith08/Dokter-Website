import { useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed md:top-4 md:right-4 top-2 right-2 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 border border-green-400/20 max-w-[90vw] md:max-w-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold text-sm md:text-base">{message}</span>
        </div>
        <button 
          onClick={onClose} 
          className="ml-3 p-1.5 hover:bg-green-600/50 rounded-full transition-all duration-200 active:scale-95"
          aria-label="Close notification"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-green-400 animate-shrink w-full rounded-b-lg"></div>
    </div>
  );
};

export default Notification;