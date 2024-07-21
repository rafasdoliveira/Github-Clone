import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

interface RepositoriesListProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string | null;
  language: string;
  visibility: string;
  stargazers_count: number;
}

const languageColors: { [key: string]: string } = {
  JavaScript: 'text-yellow-500',
  TypeScript: 'text-blue-500',
  Python: 'text-green-500',
  Ruby: 'text-red-500',
};

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  name,
  html_url,
  description,
  updated_at,
  language,
  visibility,
  stargazers_count,
}) => {
  const languageColor = language
    ? languageColors[language] || 'text-gray-500'
    : 'text-gray-500';

  return (
    <ul className="mt-4 border-b py-3 border-border h-full  max-h-[180px]">
      <li>
        <div className="flex gap-3">
          <Link to={html_url}>
            <span className="text-repoNameHome font-sans-bold font-bold cursor-pointer hover:underline">
              {name}
            </span>
          </Link>
          <span className="flex items-center px-[8px] text-xs rounded-xl border border-border">
            <span className="text-repoDescText font-sans-bold font-bold">
              {visibility}
            </span>
          </span>
        </div>
        <div className="max-w-[500px] mt-2 text-xs text-repoDescText">
          <span>{description}</span>
        </div>
        <div className="flex gap-6 mt-4 text-xs text-repoDescText">
          {language && (
            <div className="flex items-center gap-1">
              <span className={languageColor}>
                <GoDotFill className="text-sm" />
              </span>
              <span>{language}</span>
            </div>
          )}
          {stargazers_count > 0 && (
            <div className="flex items-center ml-3">
              <FaRegStar className="mr-1 text-repoDescText" />
              <span>{stargazers_count}</span>
            </div>
          )}
          <span>Updated on {updated_at}</span>
        </div>
      </li>
    </ul>
  );
};

export default RepositoriesList;
