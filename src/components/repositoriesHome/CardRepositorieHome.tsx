import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

interface CardRepositorieHomeProps {
  repo_name: string;
  repo_type: string;
  repo_description?: string;
  repo_language?: string;
  repo_stars?: number;
}

const languageColors: { [key: string]: string } = {
  JavaScript: 'text-yellow-500',
  TypeScript: 'text-blue-500',
  Python: 'text-green-500',
  Ruby: 'text-red-500',
  HTML: 'text-orange-500',
  CSS: 'text-blue-400',
  PHP: 'text-purple-500',
};

const CardRepositorieHome: React.FC<CardRepositorieHomeProps> = ({
  repo_name,
  repo_type,
  repo_description,
  repo_language,
  repo_stars,
}) => {
  const languageColor = repo_language
    ? languageColors[repo_language] || 'text-gray-500'
    : 'text-gray-500';

  return (
    <div className="flex flex-col justify-between w-[440px] max-w-[440px] h-auto py-3 px-4 mb-4 border border-border rounded-lg">
      <div className="flex items-center justify-between mb-2 text-sm font-bold font-sans-bold">
        <span className="text-repoNameHome cursor-pointer hover:underline">
          {repo_name}
        </span>
        <span className="rounded-2xl border border-border">
          <span className="text-xs p-2 text-repoDescText">{repo_type}</span>
        </span>
      </div>
      {repo_description && (
        <p className="text-sm text-repoDescText mb-2">{repo_description}</p>
      )}
      <div className="flex items-center text-sm text-repoDescText ">
        {repo_language && (
          <div className="flex items-center gap-1">
            <span className={languageColor}>
              <GoDotFill className="text-sm" />
            </span>
            <span>{repo_language}</span>
          </div>
        )}
        {repo_stars !== undefined && repo_stars > 0 && (
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
