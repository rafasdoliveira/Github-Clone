import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginSearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-end gap-5 w-full">
      <button className="flex items-center justify-between p-1 border border-gray-500 rounded-md h-8 w-80 text-sm text-headerSearchFont">
        <div className="flex items-center gap-2">
          <FaSearch className="ml-2 text-gray-500" />
          <span>Search or jump to...</span>
        </div>
        <div className="border border-gray-500 text-headerSearchFont rounded-sm w-5 mr-1 opacity-45">
          /
        </div>
      </button>
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
  );
};

export default LoginSearchBar;
