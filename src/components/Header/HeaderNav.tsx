import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const HeaderNav: React.FC = () => {
  return (
    <nav className="w-full m-4 p-1">
      <ul className="flex items-center w-full">
        <li className="flex items-center w-fit justify-center h-full p-1 cursor-pointer hover:text-gray-300">
          <span>Product</span>
          <FaChevronDown className="m-2 text-sm hover:mt-4 transition-700 ease-in-out text-gray-500" />
        </li>
        <li className="flex items-center w-fit justify-center h-full p-1 cursor-pointer hover:text-gray-300">
          <span>Solutions</span>
          <FaChevronDown className="m-2 text-sm hover:mt-4 transition-700 ease-in-out text-gray-500" />
        </li>
        <li className="flex items-center w-fit justify-center h-full p-1 cursor-pointer hover:text-gray-300">
          <span>Resources</span>
          <FaChevronDown className="m-2 text-sm hover:mt-4 transition-700 ease-in-out text-gray-500" />
        </li>
        <li className="flex items-center w-fit justify-center h-full p-1 cursor-pointer hover:text-gray-300">
          <span>Open Source</span>
          <FaChevronDown className="m-2 text-sm hover:mt-4 transition-700 ease-in-out text-gray-500" />
        </li>
        <li className="flex items-center w-fit justify-center h-full p-1 cursor-pointer hover:text-gray-300">
          <span>Enterprise</span>
          <FaChevronDown className="m-2 text-sm hover:mt-4 transition-700 ease-in-out text-gray-500" />
        </li>
        <li className="flex items-center w-fit justify-center h-full p-1 cursor-pointer hover:text-gray-300">
          <span>Pricing</span>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
