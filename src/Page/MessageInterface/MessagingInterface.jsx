import React, { useState,useRef,useEffect } from 'react';
import { Search, MessageSquare, Plus } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import CreateTicketModal from '../Modals/CreateTicketModal';
import { act } from 'react';
import TicketsArchiveView from './TicketsArchiveView';

export default function MessagingInterface() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [messageText, setMessageText] = useState('');
  const { state } = useLocation();
  const { subject,message } = state || {};

  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('open');
  
  useEffect(()=>{
    if(!state?.subject || !state?.message) return;
    const newTicket = {
      id: Date.now(),
      title: subject,
      preview: `You: ${message}`,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      content: [{ text: message, sender: "You" }],
      };
      
      setMessages([newTicket]);
      setSelectedConversation(newTicket);
    }, [state])
    
    
    
    const handleCreate = () =>{
      setOpenTicketModal(true)
    }  
    
    
    const handleCreateTicket = ({ subject, message }) => {
      const newTicket = {
        id: Date.now(),
        title: subject,
        preview: `You: ${message}`,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        content: [{ text: message, sender: "You" }],
      };
      
      setMessages(prev => [newTicket, ...prev]);
      setSelectedConversation(newTicket);
    };
    
    
    
    console.log(messages)
    
    
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [openTicketModal, setOpenTicketModal]=useState(false)

  const handleSend = () => {
    if (messageText.trim()) {
      const newMessage = {
        text: messageText,
        sender: 'You',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
      };
      
      setSelectedConversation({
        ...selectedConversation,
        content: [...selectedConversation.content, newMessage]
      });
      
      setMessageText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };


  return (
    
    <div>
     <div className="px-4 pt-4 pb-0 flex-shrink-0">
       <div className="flex gap-6 border-b border-gray-200 justify-center">
            <button
              onClick={() => setActiveTab('open')}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === 'open'
                  ? 'text-red-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              OPEN
              {activeTab === 'open' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('archive')}
              className={`pb-3 px-1 font-medium transition-colors relative ${
                activeTab === 'archive'
                  ? 'text-red-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ARCHIVE
              {activeTab === 'archive' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
              )}
            </button>
          </div>
          </div>
     {activeTab === "open"? 
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      
      {/* Left Sidebar */}
      <div className="w-96 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
        {/* Search and Create */}
        <div className="p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            onClick={handleCreate}
            >
              CREATE
            </button>
          </div>
        </div>

        {openTicketModal && <CreateTicketModal  onCreate={handleCreateTicket} onClose={() => setOpenTicketModal(false)} /> }

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {messages.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                selectedConversation?.id === conversation.id
                  ? 'bg-gray-600 text-white'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <MessageSquare className={selectedConversation?.id === conversation.id ? 'text-white' : 'text-gray-400'} size={24} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${selectedConversation?.id === conversation.id ? 'text-gray-300' : 'text-gray-500'}`}>
                      {conversation.time}
                    </span>
                  </div>
                  <h3 className={`font-semibold mb-1 ${selectedConversation?.id === conversation.id ? 'text-white' : 'text-gray-900'}`}>
                    {conversation.title}
                  </h3>
                  <p className={`text-sm truncate ${selectedConversation?.id === conversation.id ? 'text-gray-300' : 'text-gray-600'}`}>
                    {conversation.preview}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">{selectedConversation?.title}</h2>
          <button className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
            CLOSE
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-center text-sm text-gray-500 mb-6">
            {selectedConversation?.date}
          </div>
          
          {selectedConversation?.content.map((msg, index) => (
            <div key={index} className="flex justify-end mb-4 text-wrap overflow-auto
">
              <div className="bg-white rounded-lg shadow-sm p-4 max-w-md text-wrap overflow-auto
">
                <p className="text-gray-900 mb-2 text-wrap overflow-auto
">{msg.text}</p>
                <p className="text-xs text-gray-500">
                  {msg.sender} {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Plus size={24} />
            </button>
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Message text"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              SEND
            </button>
            
          </div>
        </div>
      </div>
    </div>
    : <TicketsArchiveView/>}
    </div>
  );
}