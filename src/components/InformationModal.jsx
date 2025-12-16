
import { X, ThumbsUp, ThumbsDown, HelpCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

function InformationModal({onClose}) {
   const modalRef = useRef(null);




    // Handle click outside
     useEffect(() => {
       const handleClickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
           onClose?.();
         }
       };
   
       // Add event listener
       document.addEventListener('mousedown', handleClickOutside);
   
       // Cleanup
       return () => {
         document.removeEventListener('mousedown', handleClickOutside);
       };
     }, [onClose]);

  const terms = [
    {
      title: "Bid",
      description: "This is the price at which a trader gives an order to the broker to sell an asset (Sell order)."
    },
    {
      title: "Ask",
      description: "This is the price at which a trader gives an order to the broker to buy an asset (Buy order)."
    },
    {
      title: "Spread",
      description: "The difference between purchase price (Ask) and sale price (Bid)."
    },
    {
      title: "Swap short",
      description: "These are funds accrued or deducted from the deposit for transferring open Sell positions to the next day."
    },
    {
      title: "Swap long",
      description: "These are funds accrued or deducted from the deposit for transferring open Buy positions to the next day."
    }
  ];

  return (
    <div className="fixed inset-0 flex justify-end z-50 pointer-events-none "
    ref={modalRef}>
      {/* Modal Panel */}
      <div className="w-80 bg-white h-full shadow-2xl overflow-hidden pointer-events-auto  dark:bg-[#1b1e2b] dark:text-white dark:border-[#262938]"> 
        <div className="p-4 pb-20 relative dark:text-white ">

          {/* Close Button */}
          <button 
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors dark:text-white"
            onClick={onClose}
          >
            <X size={20} />
          </button>

          {/* Terms List */}
          <div className="space-y-4 mt-2">
            {terms.map((term, index) => (
              <div key={index}>
                <h3 className="text-gray-900 font-semibold text-sm mb-1 dark:text-white">
                  {term.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed dark:text-white">
                  {term.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feedback Section */}
          <div className="mt-8 border border-gray-200 rounded-lg p-4 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <HelpCircle className="text-white" size={20} />
              </div>
            </div>
            
            <h4 className="text-gray-900 font-medium text-sm mb-1 dark:text-blue-600">
              Have you found this information helpful?
            </h4>
            
            <p className="text-gray-500 text-xs mb-3">
              We'd love to hear about your experience
            </p>
            
            <div className="flex justify-center gap-3">
              <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <ThumbsUp className="text-gray-400 hover:text-blue-600" size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <ThumbsDown className="text-gray-400 hover:text-blue-600" size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InformationModal;
