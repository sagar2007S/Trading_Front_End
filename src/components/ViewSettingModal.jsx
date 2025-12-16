
import { useState, useRef, useEffect } from 'react';

function ViewSettingModal({ onClose, onApply, position = 'bottom-left' }) {
  const [viewSetting, setViewSetting] = useState('country');
  const [timezone, setTimezone] = useState('browser');
  const modalRef = useRef(null);


   useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose?.();
        }
      };
  
      // Add event listener
      document.addEventListener('mousedown', handleClickOutside);
  
      // Cleanup
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);

  const handleApply = () => {
    onApply?.({ viewSetting, timezone });
    onClose?.();
  };

  // Position classes based on where you want it
  const positionClasses = {
    'bottom-left': 'bottom-30 left-87',
    'bottom-right': 'bottom-4 right-4',
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
  };

  return (
    <div 
    ref={modalRef}
      className={`fixed ${positionClasses[position]} z-50 w-[380px]`}
      style={{ maxHeight: 'calc(100vh - 32px)' }}
    >
      <div className="bg-[#f3f5f8] text-black rounded-lg shadow-2xl border border-gray-700 dark:bg-[#070707]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold dark:text-white">View settings</h2>
        </div>

        {/* Content */}
        <div className="px-6 py-6 max-h-[400px] overflow-y-auto">
          {/* View Settings Section */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-black mb-4 dark:text-white">View settings</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="viewSetting"
                  value="currency"
                  checked={viewSetting === 'currency'}
                  onChange={(e) => setViewSetting(e.target.value)}
                  className="w-5 h-5 text-blue-500 border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-black dark:text-white">Currency</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="viewSetting"
                  value="country"
                  checked={viewSetting === 'country'}
                  onChange={(e) => setViewSetting(e.target.value)}
                  className="w-5 h-5 text-blue-500 border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-black dark:text-white">Country</span>
              </label>
            </div>
          </div>

          {/* Time Zone Section */}
          <div>
            <h3 className="text-sm font-medium text-black mb-4 dark:text-white">Time zone</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="timezone"
                  value="browser"
                  checked={timezone === 'browser'}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-5 h-5 text-blue-500 border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-black dark:text-white">Browser time (UTC+05)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="timezone"
                  value="eniwetok"
                  checked={timezone === 'eniwetok'}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-5 h-5 text-blue-500 border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-black dark:text-white">Eniwetok, Kwajalein (UTC-12)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="timezone"
                  value="midway"
                  checked={timezone === 'midway'}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-5 h-5 text-blue-500 border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-black dark:text-white">Midway Island, Samoa (UTC-11)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="timezone"
                  value="hawaii"
                  checked={timezone === 'hawaii'}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-5 h-5 text-blue-500 border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-black dark:text-white">Hawaii, Tahiti (UTC-10)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-700 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded bg-transparent hover:bg-gray-700 text-black dark:text-white font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white dark:text-black font-medium transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
export default ViewSettingModal;