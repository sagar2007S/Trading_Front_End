import React from 'react';
import { Check } from 'lucide-react';

export default function ProfileVerification() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-12 px-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Status</span>
          <div className="flex items-center gap-2 text-green-600">
            <div className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center">
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className="font-medium text-sm">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}