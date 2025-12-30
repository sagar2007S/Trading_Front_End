import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NavBar = ({onToggle}) => {
     const [viewMode, setViewMode] = useState("grid");
      const [isProfOpen, setIsProfOpen] = useState(false);
      const navigation = useNavigate()




     const handleProfOpen = () =>{
      setIsProfOpen(prev => !prev);
     }
 
      const handleProfile =()=>{
      navigation('/user/myprofile')
      }
      const handleLogout=()=>{
        navigation("/")
        toast.info("Logged Out Successfully");
      }
      const handleWebTrade =()=>{
        navigation("/")
      }
  return (
    <div>
         <nav className="bg-slate-700 text-white">
        <div className="max-w-full mx-auto px-6 py-3 flex items-center">
        
          <div className="flex items-center gap-6">
            <button
              className="text-gray-300 hover:text-white"
              onClick={onToggle}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
            </div>
          </div>

      
          <div className="flex-1 flex items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded transition-colors"
            onClick={()=> handleWebTrade()}>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-sm">WebTrader</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-sm">Trader's Room</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-2 py-1 hover:bg-slate-600 rounded text-sm">
              EN
            </button>
            <button className="px-2 py-1 bg-blue-600 rounded text-sm">
              SS
            </button>
            <button
              className="flex items-center gap-2 hover:bg-slate-600 rounded px-3 py-1"
              onClick={() => handleProfOpen()}
              
            >
              <span className="text-sm">Bhanujee</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProfOpen && (
              <div
                className="fixed top-15 left-322 origin-top-left z-100
 bg-white h-30 w-57   text-black pt-2 pb-2 flex items-center justify-center rounded-sm shadow-md flex-col transition-all duration-1500 ease-out"
              >
                <div className="w-full h-12 bg-white hover:bg-red-500 hover:text-white flex items-center justify-center
                 transition-all duration-200 ease-in-out
                " onClick={()=> handleProfile()}>
                  My Profile
                </div>
                <div className="w-full h-12 bg-white hover:bg-red-500 hover:text-white flex items-center justify-center
                transition-all duration-200 ease-in-out" onClick={()=> handleLogout()}>
                  Log out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default NavBar;
