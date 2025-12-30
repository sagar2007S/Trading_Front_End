import React, { useState } from 'react';
import CreateTicketModal from './Modals/CreateTicketModal';
import { useNavigate } from 'react-router-dom';
import TicketsArchiveView from './MessageInterface/TicketsArchiveView';


export default function TicketsComponent() {
  const [activeTab, setActiveTab] = useState('OPEN');
  const [isTicketOpen, setIsTicketOpen]=useState(false);

  console.log(isTicketOpen);


  const navigate=useNavigate()

  

  const handleCreateTicket =(data)=>{
      navigate('/user/ticket/message', {
        state:data
      })
    
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Tickets</h1>
          
          {/* Tabs */}
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('OPEN')}
              className={`pb-1 text-sm font-medium transition-colors relative ${
                activeTab === 'OPEN'
                  ? 'text-red-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              OPEN
              {activeTab === 'OPEN' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('ARCHIVE')}
              className={`pb-1 text-sm font-medium transition-colors relative ${
                activeTab === 'ARCHIVE'
                  ? 'text-red-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ARCHIVE
              {activeTab === 'ARCHIVE' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
              )}
            </button>
          </div>
        </div>

        {/* Empty State Card */}
        
        <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-16">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              You have no open tickets
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              You can create a new ticket
            </p>
            <button className="px-8 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors" onClick={()=> setIsTicketOpen(prev => !prev)}>
              Create
            </button>
            {isTicketOpen && <CreateTicketModal onClose={() => setIsTicketOpen(false)} onCreate={handleCreateTicket}/> }
          </div>
        </div>
      </div>
    </div>
  );
}