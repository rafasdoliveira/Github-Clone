export interface User {
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
