import React from 'react';
import Nav from './Nav';

const NavContainer: React.FC = () => {
  return (
    <div className="px-3 px-md-4 px-lg-5 h-14 border-b border-border text-white mt-6 z-[3]">
      <div className="flex justify-between h-full">
        <div className="h-full"></div>
        <div className="w-8/12 flex h-full">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default NavContainer;
