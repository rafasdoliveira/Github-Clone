import axiosInstance from '../api/baseURL';

interface Repositories {
  id: number;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
  language: string;
  visibility: string;
  stargazers_count: number;
}

const getUserRepos = async (username: string): Promise<Repositories[]> => {
  const response = await axiosInstance.get<Repositories[]>(
    `/users/${username}/repos`
  );
  return response.data;
};

export default getUserRepos;
