import React from 'react';
import { LuBookOpen } from 'react-icons/lu';
import { FaRegStar } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';
import { PiBookBookmark } from 'react-icons/pi';
import { MdWeb } from 'react-icons/md';

interface NavProps {
  onNavItemClick: (item: string) => void;
}

const navItems = [
  {
    key: 'overview',
    icon: <LuBookOpen className="text-lg text-gray-500" />,
    label: 'Overview',
  },
  {
    key: 'repositories',
    icon: <PiBookBookmark className="text-lg text-gray-500" />,
    label: 'Repositories',
  },
  {
    key: 'projects',
    icon: <MdWeb className="text-lg text-gray-500" />,
    label: 'Projects',
  },
  {
    key: 'packages',
    icon: <GoPackage className="text-lg text-gray-500" />,
    label: 'Packages',
  },
  {
    key: 'stars',
    icon: <FaRegStar className="text-lg text-gray-500" />,
    label: 'Stars',
  },
];

const Nav: React.FC<NavProps> = ({ onNavItemClick }) => {
  return (
    <nav className="gap-5 flex items-end mb-3">
      {navItems.map(item => (
        <div
          key={item.key}
          className="cursor-pointer hover:bg-mainNavHover hover:rounded-md duration-200 ease-in-out"
          onClick={() => onNavItemClick(item.key)}
        >
          <div className="flex items-center gap-2 p-2 text-sm cursor-pointer">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
