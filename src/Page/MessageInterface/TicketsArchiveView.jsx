import React, { useState } from 'react';
import { Search, MessageSquare } from 'lucide-react';

export default function TicketsArchiveView() {
  const [activeTab, setActiveTab] = useState('archive');
  const [searchQuery, setSearchQuery] = useState('');

  const archivedTickets = [
    {
      id: 1,
      date: '27.12.2025',
      time: '11:39',
      title: 'My sunject',
      preview: 'Closed: You gggg',
      messages: [
        { date: '26.12.2025', text: 'gggg', sender: 'You', time: '15:19' },
        { date: '27.12.2025', text: 'Closed: Shanujan Satkunam', time: '27.12.2025 11:39' }
      ]
    },
    {
      id: 2,
      date: '26.12.2025',
      time: '12:34',
      title: 'ggg',
      preview: 'Closed: You gggggg',
      messages: []
    },
    {
      id: 3,
      date: '22.12.2025',
      time: '14:50',
      title: 'withdrawal',
      preview: 'Closed: You I need to take payout',
      messages: []
    }
  ];

  const [selectedTicket, setSelectedTicket] = useState(archivedTickets[0]);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-96 bg-white border-r border-gray-200 flex flex-col overflow-hidden">

        {/* Search */}
        <div className="p-4 border-b border-gray-200 flex-shrink-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Tickets List */}
        <div className="flex-1 overflow-y-auto">
          {archivedTickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket)}
              className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                selectedTicket?.id === ticket.id
                  ? 'bg-gray-600 text-white'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <MessageSquare 
                  className={selectedTicket?.id === ticket.id ? 'text-white' : 'text-gray-400'} 
                  size={24} 
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${selectedTicket?.id === ticket.id ? 'text-gray-300' : 'text-gray-500'}`}>
                      {ticket.date} in {ticket.time}
                    </span>
                  </div>
                  <h3 className={`font-semibold mb-1 ${selectedTicket?.id === ticket.id ? 'text-white' : 'text-gray-900'}`}>
                    {ticket.title}
                  </h3>
                  <p className={`text-sm truncate ${selectedTicket?.id === ticket.id ? 'text-gray-300' : 'text-gray-600'}`}>
                    {ticket.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <h2 className="text-xl font-semibold text-gray-900">
            {selectedTicket?.title || 'Tickets'}
          </h2>
          <button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
            REOPEN
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 min-h-0">
          {selectedTicket?.messages.map((msg, index) => (
            <div key={index} className="mb-6">
              <div className="text-center text-sm text-gray-500 mb-4">
                {msg.date}
              </div>
              <div className="flex justify-end mb-4">
                <div className="bg-white rounded-lg shadow-sm p-4 max-w-md">
                  <p className="text-gray-900 mb-2">{msg.text}</p>
                  <p className="text-xs text-gray-500">
                    {msg.sender} {msg.time}
                  </p>
                </div>
              </div>
              {msg.text.startsWith('Closed:') && (
                <div className="text-center text-sm text-gray-500 mt-4">
                  {msg.text}
                  <br />
                  {msg.time}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}