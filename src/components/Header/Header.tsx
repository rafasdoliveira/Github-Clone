import React from 'react';
import GithubLogo from '../../assets/githubLogoWhite.svg';
import HeaderNav from './HeaderNav';
import HeaderButton from './HeaderButton';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex h-[72px] p-4 text-white font-bold bg-headerBg">
      <div className="flex items-center justify-between p-4 w-full">
        <div className="flex items-center  w-full h-full">
          <div className="w-8">
            <img src={GithubLogo} alt="Logo Github" />
          </div>
          <div>
            <HeaderNav />
          </div>
        </div>
        <div className="flex items-center justify-end gap-5 w-full">
          <HeaderButton />
          <div className="flex items-center justify-between w-36 text-sm">
            <div className="hover:text-gray-300">
              <Link to="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fjeosafaferreira">
                Sign in
              </Link>
            </div>
            <div className="flex justify-center border pt-[5px] pr-[12px] pb-[4px] pl-[12px] rounded-md cursor-pointer hover:border-gray-300 hover:text-gray-300">
              <Link to="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E&source=header">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
