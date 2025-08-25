import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Ask me anything..."
        className="w-full px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBar;