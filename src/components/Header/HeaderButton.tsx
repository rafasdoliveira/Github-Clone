import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HeaderButton: React.FC = () => {
  return (
    <button className="flex items-center justify-between p-1 border border-gray-500 rounded-md h-8 w-80 text-sm text-headerSearchFont">
      <div className="flex items-center gap-2">
        <FaSearch className="ml-2 text-gray-500" />
        <span>Search or jump to...</span>
      </div>
      <div className="border border-gray-500 text-headerSearchFont rounded-sm w-5 mr-1 opacity-45">
        /
      </div>
    </button>
  );
};

export default HeaderButton;
