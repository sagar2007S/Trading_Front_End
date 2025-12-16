// import { useState } from 'react';
// import { X, DollarSign, Gem, Droplet, Flag } from 'lucide-react';
// import { AU, AT, BE, CA, CN, DK, EU,FI,FR } from "country-flag-icons/react/3x2";
// // import {USA} from "country-flag-icons"

// function FiltersPanelModal({ onClose, onApply, position = 'top-right' }) {
//     const modalRef = useRef(null);

//   const [importance, setImportance] = useState('low');
//   const [marketSegment, setMarketSegment] = useState('metals');
//   const [selectedCountries, setSelectedCountries] = useState(['austria', 'china', 'denmark']);

//   const countries = [
//     { id: 'australia', name: 'Australia', flag: AU},
//     { id: 'austria', name: 'Austria', flag: AT},
//     { id: 'belgium', name: 'Belgium', flag: BE},
//     { id: 'canada', name: 'Canada', flag: CA},
//     { id: 'china', name: 'China', flag: CN},
//     { id: 'denmark', name: 'Denmark', flag: DK},
//     { id: 'european-union', name: 'European Union', flag: EU},
//     { id: 'finland', name: 'Finland', flag: FI },
//     { id: 'france', name: 'France', flag: FR },
//   ];
// console.log(countries.flag)
//   const toggleCountry = (countryId) => {
//     setSelectedCountries(prev =>
//       prev.includes(countryId)
//         ? prev.filter(id => id !== countryId)
//         : [...prev, countryId]
//     );
//   };

//   const selectAllCountries = () => {
//     if (selectedCountries.length === countries.length) {
//       setSelectedCountries([]);
//     } else {
//       setSelectedCountries(countries.map(c => c.id));
//     }
//   };

//   const handleReset = () => {
//     setImportance('low');
//     setMarketSegment('metals');
//     setSelectedCountries([]);
//   };

//   const handleApply = () => {
//     onApply?.({ importance, marketSegment, selectedCountries });
//     onClose?.();
//   };

//   const positionClasses = {
//     'top-right': 'top-16 right-54',
//     'top-left': 'top-16 left-4',
//     'bottom-right': 'bottom-4 right-4',
//     'bottom-left': 'bottom-4 left-4',
//   };



//  useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose?.();
//       }
//     };

//     // Add event listener
//     document.addEventListener('mousedown', handleClickOutside);

//     // Cleanup
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [onClose]);


//   return (
//     <div 
//      ref={modalRef}
//       className={`fixed ${positionClasses[position]} z-50 w-[750px]`}
//       style={{ maxHeight: 'calc(100vh - 100px)' }}
//     >
//       {/* <div>
//         <USA/>
//       </div> */}
//       <div className="bg-white rounded-lg shadow-2xl border border-gray-200  dark:bg-[#1b1e2b] dark:text-gray-100 dark:border-[#262938]">
//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
//           <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Filters</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
//           {/* Importance Section */}
//           <div className="mb-6">
//             <h3 className="text-sm font-semibold text-gray-700 mb-3  dark:text-white">Importance</h3>
//             <div className="grid grid-cols-3 gap-3">
//               <button
//                 onClick={() => setImportance('low')}
//                 className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all dark:bg-gray-800 dark:text-white ${
//                   importance === 'low'
//                     ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-300'
//                     : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
//                 }`}
//               >
//                 <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
//                 Low
//               </button>
//               <button
//                 onClick={() => setImportance('middle')}
//                 className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all dark:bg-gray-800 dark:text-white ${
//                   importance === 'middle'
//                     ? 'bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-300'
//                     : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
//                 }`}
//               >
//                 <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mr-2"></span>
//                 Middle
//               </button>
//               <button
//                 onClick={() => setImportance('high')}
//                 className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all dark:bg-gray-800 dark:text-white ${
//                   importance === 'high'
//                     ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-300 '
//                     : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
//                 }`}
//               >
//                 <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-2"></span>
//                 High
//               </button>
//             </div>
//           </div>

//           {/* Market Segments Section */}
//           <div className="mb-6">
//             <h3 className="text-sm font-semibold text-gray-700 mb-3  dark:text-white">Market segments</h3>
//             <div className="grid grid-cols-3 gap-3">
//               <button
//                 onClick={() => setMarketSegment('currencies')}
//                 className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 dark:bg-gray-800 dark:text-white ${
//                   marketSegment === 'currencies'
//                     ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-300'
//                     : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
//                 }`}
//               >
//                 <DollarSign size={16} />
//                 Currencies
//               </button>
//               <button
//                 onClick={() => setMarketSegment('metals')}
//                 className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 dark:bg-gray-800 dark:text-white ${
//                   marketSegment === 'metals'
//                     ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-300'
//                     : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
//                 }`}
//               >
//                 <Gem size={16} />
//                 Metals
//               </button>
//               <button
//                 onClick={() => setMarketSegment('oil-gas')}
//                 className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 dark:bg-gray-800 dark:text-white ${
//                   marketSegment === 'oil-gas'
//                     ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-300'
//                     : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
//                 }`}
//               >
//                 <Droplet size={16} />
//                 Oil and gas
//               </button>
//             </div>
//           </div>

//           {/* Countries Section */}
//           <div>
//             <div className="flex items-center justify-between mb-3">
//               <h3 className="text-sm font-semibold text-gray-700  dark:text-white">Countries</h3>
//               <button
//                 onClick={selectAllCountries}
//                 className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selectedCountries.length === countries.length}
//                   onChange={selectAllCountries}
//                   className="w-4 h-4 rounded border-gray-300"
//                 />
//                 Select all
//               </button>
//             </div>
//             <div className="grid grid-cols-3 gap-3">
//               {countries.map((country) => (
//                 <button
//                   key={country.id}
//                   onClick={() => toggleCountry(country.id)}
//                   className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 dark:bg-gray-800 dark:text-white ${
//                     selectedCountries.includes(country.id)
//                       ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-300 '
//                       : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 '
//                   }`}
//                 >
//                   <span className="text-lg">
//                     <country.flag/>
//                   </span>
//                   {country.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
//           <button
//             onClick={handleReset}
//             className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded font-medium transition-colors"
//           >
//             Reset all
//           </button>
//           <div className="flex gap-3">
//             <button
//               onClick={onClose}
//               className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded font-medium transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleApply}
//               className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium transition-colors"
//             >
//               Apply
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// export default FiltersPanelModal;


import { useState, useEffect, useRef } from 'react';
import { X, DollarSign, Gem, Droplet, Flag } from 'lucide-react';
import { AU, AT, BE, CA, CN, DK, EU, FI, FR } from "country-flag-icons/react/3x2";

function FiltersPanelModal({ onClose, onApply, position = 'top-right' }) {
  const [importance, setImportance] = useState('low');
  const [marketSegment, setMarketSegment] = useState('metals');
  const [selectedCountries, setSelectedCountries] = useState(['austria', 'china', 'denmark']);
  const modalRef = useRef(null);

  const countries = [
    { id: 'australia', name: 'Australia', flag: AU},
    { id: 'austria', name: 'Austria', flag: AT},
    { id: 'belgium', name: 'Belgium', flag: BE},
    { id: 'canada', name: 'Canada', flag: CA},
    { id: 'china', name: 'China', flag: CN},
    { id: 'denmark', name: 'Denmark', flag: DK},
    { id: 'european-union', name: 'European Union', flag: EU},
    { id: 'finland', name: 'Finland', flag: FI },
    { id: 'france', name: 'France', flag: FR },
  ];

  // Handle click outside
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

  const toggleCountry = (countryId) => {
    setSelectedCountries(prev =>
      prev.includes(countryId)
        ? prev.filter(id => id !== countryId)
        : [...prev, countryId]
    );
  };

  const selectAllCountries = () => {
    if (selectedCountries.length === countries.length) {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(countries.map(c => c.id));
    }
  };

  const handleReset = () => {
    setImportance('low');
    setMarketSegment('metals');
    setSelectedCountries([]);
  };

  const handleApply = () => {
    onApply?.({ importance, marketSegment, selectedCountries });
    onClose?.();
  };

  const positionClasses = {
    'top-right': 'top-16 right-54',
    'top-left': 'top-16 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  return (
    <div 
      ref={modalRef}
      className={`fixed ${positionClasses[position]} z-50 w-[750px]`}
      style={{ maxHeight: 'calc(100vh - 100px)' }}
    >
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 dark:bg-[#1b1e2b] dark:text-gray-100 dark:border-[#262938]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-[#262938]">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
          {/* Importance Section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 dark:text-white">Importance</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setImportance('low')}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  importance === 'low'
                    ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-500 dark:text-white dark:border-sky-600'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700'
                }`}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                Low
              </button>
              <button
                onClick={() => setImportance('middle')}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  importance === 'middle'
                    ? 'bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-500 dark:text-white dark:border-orange-600'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700'
                }`}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mr-2"></span>
                Middle
              </button>
              <button
                onClick={() => setImportance('high')}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  importance === 'high'
                    ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-500 dark:text-white dark:border-red-600'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700'
                }`}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-2"></span>
                High
              </button>
            </div>
          </div>

          {/* Market Segments Section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 dark:text-white">Market segments</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setMarketSegment('currencies')}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${
                  marketSegment === 'currencies'
                    ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-500 dark:text-white dark:border-sky-600'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700'
                }`}
              >
                <DollarSign size={16} />
                Currencies
              </button>
              <button
                onClick={() => setMarketSegment('metals')}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${
                  marketSegment === 'metals'
                    ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-500 dark:text-white dark:border-sky-600'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700'
                }`}
              >
                <Gem size={16} />
                Metals
              </button>
              <button
                onClick={() => setMarketSegment('oil-gas')}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${
                  marketSegment === 'oil-gas'
                    ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-500 dark:text-white dark:border-sky-600'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700'
                }`}
              >
                <Droplet size={16} />
                Oil and gas
              </button>
            </div>
          </div>

          {/* Countries Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-white">Countries</h3>
              <button
                onClick={selectAllCountries}
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  checked={selectedCountries.length === countries.length}
                  onChange={selectAllCountries}
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600"
                />
                Select all
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => toggleCountry(country.id)}
                  className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedCountries.includes(country.id)
                      ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-sky-500 dark:text-white dark:border-sky-600'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700'
                  }`}
                >
                  <span className="text-lg w-6 h-4 overflow-hidden">
                    <country.flag className="w-full h-full object-cover"/>
                  </span>
                  {country.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-[#262938] flex justify-between">
          <button
            onClick={handleReset}
            className="px-6 py-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700 rounded font-medium transition-colors"
          >
            Reset all
          </button>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded font-medium transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersPanelModal;