// NavBar Plus Symbol Selector
import { useState } from 'react';
import { Search, X } from 'lucide-react';

const SymbolSearchPanel = ({ onSelectSymbol, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const symbols = [
    { symbol: 'AAPL', name: 'Apple Inc.', category: 'US Stocks' },
    { symbol: 'ADAUSD', name: 'Cardano / US Dollar', category: 'Crypto' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', category: 'US Stocks' },
    { symbol: 'AUDUSD', name: 'Australian Dollar / US Dollar', category: 'Currencies' },
    { symbol: 'AVAXUSD', name: 'Avalanche / US Dollar', category: 'Crypto' },
    { symbol: 'BCHETH', name: 'Bitcoin cash / Ethereum', category: 'Crypto' },
    { symbol: 'BNBUSD', name: 'Binance Coin / US Dollar', category: 'Crypto' },
    { symbol: 'BRENT', name: 'Brent Crude Oil', category: 'Commodities' },
    { symbol: 'BTCUSD', name: 'Bitcoin / US Dollar', category: 'Crypto' },
    { symbol: 'COFFEE', name: 'Coffee', category: 'Commodities' },
    { symbol: 'CORN', name: 'Corn', category: 'Commodities' },
    { symbol: 'DAX', name: 'Xetra DAX Index', category: 'Indices' },
    { symbol: 'DIS', name: 'Walt Disney Co.', category: 'US Stocks' },
    { symbol: 'DOGEUSD', name: 'Dogecoin / US Dollar', category: 'Crypto' },
    { symbol: 'EURUSD', name: 'Euro / US Dollar', category: 'Currencies' },
    { symbol: 'GBPUSD', name: 'British Pound / US Dollar', category: 'Currencies' },
    { symbol: 'GOLD', name: 'Gold', category: 'Commodities' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', category: 'US Stocks' },
    { symbol: 'JPYUSD', name: 'Japanese Yen / US Dollar', category: 'Currencies' },
    { symbol: 'META', name: 'Meta Platforms Inc.', category: 'US Stocks' },
    { symbol: 'MSFT', name: 'Microsoft Corporation', category: 'US Stocks' },
    { symbol: 'NFLX', name: 'Netflix Inc.', category: 'US Stocks' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', category: 'US Stocks' },
    { symbol: 'SPX', name: 'S&P 500 Index', category: 'Indices' },
    { symbol: 'TSLA', name: 'Tesla Inc.', category: 'US Stocks' },
    { symbol: 'USDCAD', name: 'US Dollar / Canadian Dollar', category: 'Currencies' },
    { symbol: 'WHEAT', name: 'Wheat', category: 'Commodities' },
  ];

  const categories = [
    { name: 'All', count: symbols.length },
    { name: 'Currencies', count: symbols.filter(s => s.category === 'Currencies').length },
    { name: 'Commodities', count: symbols.filter(s => s.category === 'Commodities').length },
    { name: 'Crypto', count: symbols.filter(s => s.category === 'Crypto').length },
    { name: 'Indices', count: symbols.filter(s => s.category === 'Indices').length },
    { name: 'US Stocks', count: symbols.filter(s => s.category === 'US Stocks').length },
  ];

  const filteredSymbols = symbols.filter(symbol => {
    const matchesSearch = searchQuery === '' || 
      symbol.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      symbol.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || symbol.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSymbolClick = (symbol) => {
    if (onSelectSymbol) {
      onSelectSymbol(symbol);
    }
  };

  return (
    <div className="flex w-[700px] h-[500px] bg-white rounded-lg shadow-lg border border-gray-200 absolute top-30 right-46 dark:bg-gray-900 dark:border-gray-700">
      {/* Left Sidebar - Categories */}
      <div className="w-48 bg-gray-50 border-r border-gray-200 rounded-l-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="p-3 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-base font-semibold text-gray-800 dark:text-white">Add symbol</h2>
        </div>
        
        <div className="py-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full px-3 py-2 flex items-center justify-between hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors ${
                selectedCategory === category.name ? 'bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-600' : ''
              }`}
            >
              <span className={`text-sm ${
                selectedCategory === category.name ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
              }`}>
                {category.name}
              </span>
              <span className={`text-xs px-2 py-1 rounded ${
                selectedCategory === category.name 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Search and Results */}
      <div className="flex-1 flex flex-col">
        {/* Search Header */}
        <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Symbol, eg. EURUSD"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto">
          {filteredSymbols.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              No symbols found matching "{searchQuery}"
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredSymbols.map((symbol) => (
                <button
                  key={symbol.symbol}
                  onClick={() => handleSymbolClick(symbol.symbol)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-800 dark:text-white min-w-[100px]">
                      {symbol.symbol}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {symbol.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SymbolSearchPanel;