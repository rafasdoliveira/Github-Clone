import React from 'react';
import HeaderNav from './HeaderNav';
import LoginSearchBar from './LoginSearchBar';
import GithubIcon from '../common/GithubIcon';

const Header: React.FC = () => {
  return (
    <header className="flex h-[72px] p-4 text-white font-bold bg-headerBg">
      <div className="flex items-center justify-between p-4 w-full">
        <div className="flex items-center  w-full h-full">
          <GithubIcon />
          <div>
            <HeaderNav />
          </div>
        </div>
        <div className="">
          <LoginSearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
