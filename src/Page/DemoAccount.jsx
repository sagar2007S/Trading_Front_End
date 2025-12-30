
import React,{useState} from 'react'
import { ChevronDown } from 'lucide-react';



const DemoAccount = () => {
  const [accountType, setAccountType] = useState('Real');
  const [leverage, setLeverage] = useState('1 : 100');
  const [depositMoney,setDepositMoney]=useState("");
  return (
    
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <label className="text-gray-600 text-sm">Account type</label>
                <div className="relative">
                  <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded appearance-none cursor-pointer focus:outline-none focus:border-red-500"
                  >
                    <option>Demo</option>
                     
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-600 text-sm">Leverage</label>
                <div className="relative">
                  <select
                    value={leverage}
                    onChange={(e) => setLeverage(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded appearance-none cursor-pointer focus:outline-none focus:border-red-500"
                  >
                    <option>1 : 100</option>
                    <option>1 : 50</option>
                    <option>1 : 200</option>
                    <option>1 : 500</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

 <div className="space-y-2">
                <label className="text-gray-600 text-sm">Deposit Money</label>
                <div className="relative">
                  <input
                    value={depositMoney}
                    onChange={(e) => setDepositMoney(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded appearance-none cursor-pointer focus:outline-none focus:border-red-500"
                  />
                    
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>


              

              <div className="pt-4">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200">
                  OPEN AN ACCOUNT
                </button>
              </div>
            </div>
            </div>   
  )
}

export default DemoAccount
