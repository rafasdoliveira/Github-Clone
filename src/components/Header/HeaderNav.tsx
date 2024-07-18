import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const navItems = [
  { label: 'Product', showDropdown: true },
  { label: 'Solutions', showDropdown: true },
  { label: 'Resources', showDropdown: true },
  { label: 'Open Source', showDropdown: true },
  { label: 'Enterprise', showDropdown: true },
  { label: 'Pricing', showDropdown: false },
];

const HeaderNav: React.FC = () => {
  return (
    <nav className="w-full m-4 p-1">
      <ul className="flex items-center w-full">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center w-fit justify-center h-full p-1 cursor-pointer hover:text-gray-300"
          >
            <span>{item.label}</span>
            {item.showDropdown && (
              <FaChevronDown className="m-2 text-sm hover:mt-4 ease-in-out text-gray-500" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
