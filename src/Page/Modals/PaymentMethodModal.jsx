import React, { useState } from 'react';
import { X, DollarSign } from 'lucide-react';

const PaymentMethodModal = ({ onClose, setPaymentMethod }) => {
  // const [selectedMethod, setSelectedMethod] = useState(null);


const onSelect =(value) =>{
setPaymentMethod(value);
onClose();
}

  
  const paymentMethods = [
    {
      id: 1,
      category: 'withdrawal',
      name: 'Bank Local Withdrawal',
      type: 'Bank'
    },
    {
      id: 2,
      category: 'withdrawal',
      name: 'Crypto Withdrawal',
      type: 'Crypto'
    }
  ];

  return (
    // 🔥 FIX: fullscreen wrapper with proper z-index
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* 🔥 FIX: overlay BELOW modal */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />

      {/* 🔥 FIX: modal ABOVE overlay */}
      <div className="relative z-10 bg-white rounded-lg shadow-xl w-full max-w-md">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Select a payment method
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="mb-4">
              <p className="text-xs text-gray-400 uppercase mb-2">
                {method.category}
              </p>
              <button
                onClick={() => onSelect(method?.name)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg transform transition-all duration-100 ease-out ' hover:border-gray-600 hover:bg-gray-50   `}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-green-500" />
                </div>

                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-900">
                    {method.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {method.type}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-gray-800 font-medium"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;
