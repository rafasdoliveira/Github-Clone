import React, { useState, useEffect } from 'react';
import { useSelectedUser } from '../../context/SelectedUserContext';
import getUserRepos from '../../services/services/RepoService';
import CardRepositorieHome from './CardRepositorieHome';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  language: string;
  visibility: string;
  stargazers_count: number;
}

const RepositoriesHome: React.FC = () => {
  const [repositoriesData, setRepositoriesData] = useState<Repository[]>([]);
  const { selectedUser } = useSelectedUser();

  useEffect(() => {
    const user = selectedUser || 'rafasdoliveira';

    const fetchRepositories = async () => {
      try {
        const repositories = await getUserRepos(user);
        setRepositoriesData(repositories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepositories();
  }, [selectedUser]);

  const displayedRepos = repositoriesData.slice(0, 6);

  return (
    <div className="w-full h-[450px] text-white ml-2 ">
      <div>
        <h3 className="text-base">Popular repositories</h3>
      </div>
      <div className="h-[377px] grid grid-cols-2 mt-2">
        {displayedRepos.map(repo => (
          <CardRepositorieHome
            key={repo.id}
            repo_name={repo.name}
            repo_description={repo.description}
            repo_type={repo.visibility}
            repo_language={repo.language}
            repo_stars={repo.stargazers_count}
          />
        ))}
      </div>
    </div>
  );
};

export default RepositoriesHome;
