
import { useEffect, useState } from 'react';
import { X, Plus } from 'lucide-react';

function ChartTabs({value, setIsSearchPannelActive, onActiveSymbolChange}) {
  const [tabs, setTabs] = useState([
   
  ]);
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    if (!value || value.trim() === "") return;

     const exists = tabs.find(tab => tab.symbol === value);
      if (exists) {
      setActiveTab(exists.id);
      onActiveSymbolChange(exists.symbol);
      return;
    }
    
 
    const newTab = {
      id: Date.now(),
      symbol: value,
      timeframe: 'H1',
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
     onActiveSymbolChange(value);

  }, [value])
  


  useEffect(() => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    if (currentTab) {
      onActiveSymbolChange(currentTab.symbol);
    }
  }, [activeTab, tabs]);

  
  const closeTab = (id, e) => {
    e.stopPropagation();
    const newTabs = tabs.filter(tab => tab.id !== id);
    setTabs(newTabs);
    
    // If closing active tab, switch to first remaining tab
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  return (
    <div className="flex items-center bg-[#e8eaf0] dark:bg-[#1a1d2e] border-b border-gray-300 dark:border-gray-700">
      {/* Tabs */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            group flex items-center gap-2 px-4 py-2 cursor-pointer
            border-r border-gray-300 dark:border-gray-700
            transition-colors relative
            ${activeTab === tab.id 
              ? 'bg-white dark:bg-[#0f1117] text-blue-600 dark:text-blue-400' 
              : 'hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
            }
          `}
        >
          {/* Active indicator line */}
          {activeTab === tab.id && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />
          )}
          
          <span className="text-sm font-medium whitespace-nowrap">
            {tab.symbol} {tab.timeframe}
          </span>
          
          <button
            onClick={(e) => closeTab(tab.id, e)}
            className="opacity-0 group-hover:opacity-100 hover:bg-gray-300 dark:hover:bg-gray-700 rounded p-0.5 transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}

      {/* Add Tab Button */}
      <button
        
        className="flex items-center justify-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        onClick={()=> setIsSearchPannelActive(true)}
      >
        <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  );
}


export default ChartTabs;