import React from 'react';
import { FaRegStar } from 'react-icons/fa';

interface CardRepositorieHomeProps {
  repo_name: string;
  repo_type: string;
  repo_description?: string;
  repo_language?: string;
  repo_stars?: string;
}

const CardRepositorieHome: React.FC<CardRepositorieHomeProps> = ({
  repo_name,
  repo_type,
  repo_description,
  repo_language,
  repo_stars,
}) => {
  return (
    <div className="flex flex-col justify-between w-[440px] max-w-[440px] h-[97px] h-max-[115px] py-3 px-4 mr-2  border border-border rounded-lg">
      <div className="flex items-center justify-between mb-2 text-sm font-bold font-sans-bold">
        <span className="text-repoNameHome cursor-pointer hover:underline">
          {repo_name}
        </span>
        <span className="rounded-2xl border border-border">
          <span className="text-xs p-2 text-repoTypeHome">{repo_type}</span>
        </span>
      </div>
      {repo_description && (
        <p className="text-sm text-repoDescText mb-2">{repo_description}</p>
      )}
      <div className="flex items-center text-sm text-repoDescText ">
        {repo_language && <span>{repo_language}</span>}
        {repo_stars && (
          <div className="flex items-center ml-3">
            <FaRegStar className="mr-1 text-repoDescText" />
            <span>{repo_stars}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRepositorieHome;
