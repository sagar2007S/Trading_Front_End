import React, { useState } from 'react';

import ProfileSettings from './ProfileSettings';
import ProfileVerification from './ProfileVerification';
import UserPersonalData from './UserPersonalData';

export default function MyProfile() {
  const [activeTab, setActiveTab] = useState('personal');
 
  

  return (
 
    
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-800">My profile</h1>
          <div className="flex gap-8 mt-4">
            <button
              onClick={() => setActiveTab('personal')}
              className={`pb-2 font-medium ${
                activeTab === 'personal'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-500'
              }`}
            >
              PERSONAL DATA
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`pb-2 font-medium ${
                activeTab === 'settings'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-500'
              }`}
            >
              SETTINGS
            </button>
            <button
              onClick={() => setActiveTab('verification')}
              className={`pb-2 font-medium ${
                activeTab === 'verification'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-500'
              }`}
            >
              VERIFICATION
            </button>
          </div>
        </div>
        {activeTab ==="personal" ? <UserPersonalData/>:""}
  {activeTab === "settings" ? <ProfileSettings/>: ""}
  {activeTab=== "verification" ? <ProfileVerification /> :""}
      </div>
      
    </div>
  );
}