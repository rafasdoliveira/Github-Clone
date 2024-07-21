import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowSortedDown } from 'react-icons/ti';
import { PiBookBookmark } from 'react-icons/pi';

const RepositoriesFilter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="border-b border-border">
      <div className="flex items-center justify-between mb-4">
        <div className="w-full mr-2">
          <input
            type="text"
            placeholder="Find a repository..."
            className=" w-full h-8 px-3 py-3 outline-none bg-transparent flex items-center gap-2 border-2 border-border rounded-md text-sm focus:border-2 focus:border-repoNameHome duration-200"
          />
        </div>
        <div className="flex justify-between gap-1 text-profileDetails">
          <div className="flex items-center h-8 gap-1 border-2 border-border rounded-md px-3 bg-followButton cursor-pointer">
            <span>Type</span>
            <span>
              <TiArrowSortedDown />
            </span>
          </div>
          <div className="flex items-center h-8 gap-1 border-2 border-border rounded-md px-3 bg-followButton cursor-pointer">
            <span>Language</span>
            <span>
              <TiArrowSortedDown />
            </span>
          </div>
          <div className="flex items-center h-8 gap-1 border-2 border-border rounded-md px-3 bg-followButton cursor-pointer">
            <span>Sort</span>
            <span>
              <TiArrowSortedDown />
            </span>
          </div>
          <div
            className="flex items-center h-8 gap-1  rounded-md px-3 bg-newRepoButton cursor-pointer"
            onClick={() => navigate('/newrepository')}
          >
            <span>
              <PiBookBookmark />
            </span>
            <button>New</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoriesFilter;
