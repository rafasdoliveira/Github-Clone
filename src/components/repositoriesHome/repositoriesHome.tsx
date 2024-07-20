import React from 'react';
import CardRepositorieHome from './CardRepositorieHome';

const REPOSITORIES = [
  {
    repo_name: 'trashreport1',
    repo_description: '',
    repo_type: 'Public',
    repo_language: 'JavaScript',
    repo_stars: '1',
  },
  {
    repo_name: 'ifce',
    repo_description: '',
    repo_type: 'Public',
    repo_language: 'C',
    repo_stars: '',
  },
  {
    repo_name: 'agility-sec',
    repo_description: '',
    repo_type: 'Public',
    repo_language: 'Java',
    repo_stars: '',
  },
  {
    repo_name: 'agility-update',
    repo_description: 'Sistema de atualização do Agility Secretaria',
    repo_type: 'Public',
    repo_language: 'Java',
    repo_stars: '',
  },
  {
    repo_name: 'batalha-naval',
    repo_description: 'Jogo de batalha naval desenvolvido na linguagem C',
    repo_type: 'Public',
    repo_language: 'JavaScript',
    repo_stars: '',
  },
  {
    repo_name: 'trashreport6',
    repo_description: '',
    repo_type: 'Public',
    repo_language: 'JavaScript',
    repo_stars: '',
  },
];

const RepositoriesHome: React.FC = () => {
  return (
    <div className="w-full h-[450px] text-white mt-6 ml-2">
      <div className="">
        <h3 className="text-base">Popular repositories</h3>
      </div>
      <div className="h-[377px] grid grid-cols-2 mt-2">
        {REPOSITORIES.map((repo, index) => (
          <CardRepositorieHome
            key={index}
            repo_name={repo.repo_name}
            repo_description={repo.repo_description}
            repo_type={repo.repo_type}
            repo_language={repo.repo_language}
            repo_stars={repo.repo_stars}
          />
        ))}
      </div>
    </div>
  );
};

export default RepositoriesHome;
