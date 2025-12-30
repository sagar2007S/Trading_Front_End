import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProfileSettings() {
  const handleChangePassword = () => {
    console.log('Navigate to change password');
  };

  const handleRestorePassword = () => {
    console.log('Navigate to restore password');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Change Password Option */}
          <button
            onClick={handleChangePassword}
            className="w-full flex items-center justify-between p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors text-left"
          >
            <span className="text-gray-600">Change user account password</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          {/* Restore Password Option */}
          <button
            onClick={handleRestorePassword}
            className="w-full flex items-center justify-between p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors text-left"
          >
            <span className="text-gray-600">Restore account password</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          {/* Version Info */}
          <div className="flex items-center justify-between p-6">
            <span className="text-gray-600">Version</span>
            <span className="text-gray-500">2.36.1</span>
          </div>
        </div>
      </div>
    </div>
  );
}