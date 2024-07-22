import React, { useState } from 'react';
import Nav from './Nav';
import Repositories from '../repositories/Repositories';
import Overview from '../overview/Overview';

const NavContainer: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<
    'overview' | 'repositories' | 'projects' | 'packages' | 'stars'
  >('overview');

  const handleNavItemClick = (item: string) => {
    setActiveComponent(
      item as 'overview' | 'repositories' | 'projects' | 'packages' | 'stars'
    );
  };

  return (
    <div className="px-3 px-md-4 px-lg-5 min-h-[56px] bg-profileBg text-white mt-6 z-[3]">
      <div className="flex">
        <div className="w-full">
          <Nav onNavItemClick={handleNavItemClick} />
        </div>
      </div>
      <div className="mt-4 w-full">
        {activeComponent === 'overview' && <Overview />}
        {activeComponent === 'repositories' && <Repositories />}
      </div>
    </div>
  );
};

export default NavContainer;
