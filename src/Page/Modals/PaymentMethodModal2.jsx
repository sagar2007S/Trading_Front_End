
import React from 'react';
import { X } from 'lucide-react';

export default function PaymentMethodModal2({onClose, setPaymentMethod}) {
  const paymentMethods = [
    {
      id: 'local-bank',
      category: 'Local Bank Deposit',
      name: 'Local Bank Deposit',
      subtitle: 'Local',
      icon: '💵'
    },
    {
      id: 'bithide',
      category: 'BitHide',
      name: 'BitHide',
      icon: '🪙'
    },
    {
      id: 'ragapay',
      category: 'RagaPay',
      name: 'RagaPay',
      icon: '💵'
    },
    {
      id: 'demo',
      category: 'Demo accounts',
      name: 'Demo account deposit',
      icon: '💲'
    }
  ];
   

  const handleSelect = (value) =>{
    setPaymentMethod(value)
    onClose()
  }


  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4 bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md ">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Select a payment method
          </h2>
          <button className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" onClick={()=> onClose(prev => !prev)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Payment Methods List */}
        <div className="py-2">
          {paymentMethods.map((method, index) => (
            <div key={method.id}>
              {/* Category Label */}
              <div className="px-6 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                {method.category}
              </div>

              {/* Payment Method Option */}
              <button className="w-full px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left" onClick={()=> handleSelect(method?.name)}>
                <div className="text-3xl">{method.icon}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {method.name}
                  </div>
                  {method.subtitle && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      {method.subtitle}
                    </div>
                  )}
                </div>
              </button>

              {/* Divider */}
              {index < paymentMethods.length - 1 && (
                <div className="border-t border-gray-100" />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end " >
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors uppercase cursor-pointer" onClick={()=> onClose(prev => !prev)} >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}