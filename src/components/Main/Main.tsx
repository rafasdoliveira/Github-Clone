import React from 'react';
import MainNav from './MainNav';

const Main: React.FC = () => {
  return (
    <div className="px-3 px-md-4 px-lg-5 h-14 text-white mt-6 z-[3]">
      <div className="flex justify-between border-b border-border h-full">
        <div className="w-2/6 h-full"></div>
        <div className="w-5/6 flex h-full">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Main;
