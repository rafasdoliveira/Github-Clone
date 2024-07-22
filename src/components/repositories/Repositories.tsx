import React, { useEffect, useState } from 'react';
import RepositoriesFilter from './RepositoriesFilter';
import RepositoriesList from './RepositoriesList';
import getUserRepos from '../../services/services/RepoService';
import { DateFormatter } from '../../utils/Formatter';
import { useSelectedUser } from '../../context/SelectedUserContext';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string | null;
  language: string;
  visibility: string;
  stargazers_count: number;
}

const Repositories: React.FC = () => {
  const [repositoriesData, setRepositoriesData] = useState<Repository[]>([]);
  const { selectedUser } = useSelectedUser();

  useEffect(() => {
    const user = selectedUser || 'rafasdoliveira';
    const fetchRepositories = async () => {
      try {
        const repositories = await getUserRepos(user);
        const repositoryFormatter = repositories.map(item => {
          const formattedDate = DateFormatter(item.updated_at);
          return {
            ...item,
            updated_at: formattedDate,
          };
        });

        setRepositoriesData(repositoryFormatter);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="w-full h-full text-white mt-6 ml-2">
      <div className="">
        <RepositoriesFilter />
      </div>
      <div className="h-full h-max-[4000px] overflow-auto">
        {repositoriesData.map(repo => (
          <RepositoriesList
            id={repo.id}
            key={repo.id}
            name={repo.name}
            html_url={repo.html_url}
            visibility={repo.visibility}
            description={repo.description}
            updated_at={repo.updated_at}
            language={repo.language}
            stargazers_count={repo.stargazers_count}
          />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
