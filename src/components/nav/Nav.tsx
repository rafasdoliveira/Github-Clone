import React from 'react';
import { Link } from 'react-router-dom';
import { LuBookOpen } from 'react-icons/lu';
import { FaRegStar } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';
import { PiBookBookmark } from 'react-icons/pi';
import { MdWeb } from 'react-icons/md';

const navItems = [
  {
    to: '',
    icon: <LuBookOpen className="text-lg text-gray-500" />,
    label: 'Overview',
  },
  {
    to: '',
    icon: <PiBookBookmark className="text-lg text-gray-500" />,
    label: 'Repositories',
  },
  {
    to: '',
    icon: <MdWeb className="text-lg text-gray-500" />,
    label: 'Projects',
  },
  {
    to: '',
    icon: <GoPackage className="text-lg text-gray-500" />,
    label: 'Packages',
  },
  {
    to: '',
    icon: <FaRegStar className="text-lg text-gray-500" />,
    label: 'Stars',
  },
];

const Nav: React.FC = () => {
  return (
    <nav className="gap-5 flex items-end mb-3 ">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer hover:bg-mainNavHover hover:rounded-md duration-200 ease-in-out"
        >
          <Link
            to={item.to}
            className="flex items-center gap-2 p-2 text-sm cursor-pointer"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
