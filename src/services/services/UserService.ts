import axiosInstance from '../api/baseURL';

interface User {
  email: string;
  company: string | undefined;
  following: number;
  bio: string;
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  followers?: number;
  location?: string;
  public_repos?: number;
}

const getUser = async (username: string): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${username}`);
  return response.data;
};

export default getUser;
