import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MessagingInterface from "../MessageInterface/MessagingInterface";

export default function CreateTicketModal({ onClose, onCreate }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageInetrfaceOpen, setIsMessageInetrfaceOpen] = useState(false);
  

  const handleCreate = () => {
    let trimmedSubject=subject.trim();
    let trimmedMessage=message.trim();
    if (!trimmedSubject || !trimmedMessage) return 
     onCreate({
      subject:trimmedSubject,
      message:trimmedMessage
     })

     onClose();

  };

 
  return (
    
<div>

    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Create a ticket
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Subject Input */}
          <div>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject of the ticket"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message text"
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Attachment Button */}
          <button className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <Plus size={24} />
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors font-medium"
          >
            CANCEL
          </button>
          <button
            onClick={handleCreate}
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium"
          >
            CREATE
          </button>
        </div>
      </div>
    </div>

  
    </div>
  );
}
