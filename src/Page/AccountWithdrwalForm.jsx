import React, { useState } from 'react';
import { ChevronDown, DollarSign } from 'lucide-react';
import PaymentMethodModal from './Modals/PaymentMethodModal';
import { countries } from 'country-flag-icons';

const AccountWithdrwalForm = () => {
  const [formData, setFormData] = useState({
    account: '10006 Real(USD)',
    paymentMethod: 'Crypto Withdrawal',
    currency: 'USD',
    amount: '',
    amountToBeCredited: '',
    wallet: '',
    comment: ''
  });
  const [isPaymentModalOpen, setIsPaymentModalOpen] =useState(true);
  const [paymentMethod, setPaymentMethod]=useState("Bank Local Withdrawal");


  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const country=[
    "USD","RUB","EUR","GBP","CNY"
  ]





  return (
    <div className="min-h-screen bg-gray-100 p-8">
              
 
   

      <div className="max-w-6xl mx-auto">
             {isPaymentModalOpen &&
  
      <PaymentMethodModal onClose={()=> setIsPaymentModalOpen(false) } setPaymentMethod={setPaymentMethod}/>
   
}
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Withdrawal</h1>
        
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Form Section */}
            <div className="lg:col-span-2 p-8 space-y-6">
              {/* Account */}
              <div className="grid grid-cols-3 gap-4 items-start">
                <label className="text-right text-gray-600 pt-2">Account</label>
                <div className="col-span-2">
                  <div className="relative">
                    <select
                      value={formData.account}
                      onChange={(e) => handleChange('account', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>10006 Real(USD)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                  <p className="text-sm text-green-600 mt-2">Available funds, excluding bonuses: 11.12 USD</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <label className="text-right text-gray-600">Payment method</label>
                <div className="col-span-2 flex gap-2">
                  <div className="relative flex-1" onClick={()=> setIsPaymentModalOpen(prev => !prev)}>
                    <input
                      value={paymentMethod}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                      {/* <option>Crypto Withdrawal</option>
                      <option>Bank Transfer</option>
                      <option>Card Withdrawal</option>
                    </select> */}
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                  <div className="relative w-32">
                    <select
                      value={formData.currency}
                      onChange={(e) => handleChange('currency', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                     {countries.map((country, index)=>(
                        <options  key={index}>
                         {country}
                        </options>
                     ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Amount of Payment */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <label className="text-right text-gray-600">Amount of payment</label>
                <div className="col-span-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.amount}
                      onChange={(e) => handleChange('amount', e.target.value)}
                      className="w-full px-4 py-2 pr-16 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">USD</span>
                  </div>
                </div>
              </div>

              {/* Amount to be Credited */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <label className="text-right text-gray-600">Amount to be credited</label>
                <div className="col-span-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.amountToBeCredited}
                      onChange={(e) => handleChange('amountToBeCredited', e.target.value)}
                      className="w-full px-4 py-2 pr-16 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">USD</span>
                  </div>
                </div>
              </div>

              {/* Wallet/Account */}
              <div className="grid grid-cols-3 gap-4 items-center">
                <label className="text-right text-gray-600">Wallet/Account</label>
                <div className="col-span-2">
                  <input
                    type="text"
                    value={formData.wallet}
                    onChange={(e) => handleChange('wallet', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Comment */}
              <div className="grid grid-cols-3 gap-4 items-start">
                <label className="text-right text-gray-600 pt-2">Comment</label>
                <div className="col-span-2">
                  <textarea
                    value={formData.comment}
                    onChange={(e) => handleChange('comment', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows="3"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Continue Button */}
              <div className="grid grid-cols-3 gap-4">
                <div></div>
                <div className="col-span-2">
                  <button className="px-8 py-2 bg-pink-200 text-gray-400 rounded-full font-medium cursor-not-allowed">
                    CONTINUE
                  </button>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="lg:col-span-1 bg-gray-50 border-l border-gray-200 p-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">Description</h3>
              <div className="flex justify-center mb-4">
                <DollarSign className="w-16 h-16 text-green-500" strokeWidth={1.5} />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Please provide your USDT TRON (TRC20) wallet address for withdrawal
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AccountWithdrwalForm;