import React from 'react';
import Header from '../components/header/Header';
import NavContainer from '../components/nav/NavContainer';
import Profile from '../components/profile/Profile';
import RepositoriesHome from '../components/repositoriesHome/RepositoriesHome';

const userProfile = {
  avatar: 'https://avatars.githubusercontent.com/u/170582363?v=4',
  name: 'John Doe',
  username: 'johndoe',
  bio: 'Full Stack Developer',
  followers: '150',
  following: '100',
  company: 'Tech Company',
  location: 'San Francisco, CA',
  email: 'johndoe@example.com',
  achievements: [
    { src: 'https://example.com/pull-shark.png', alt: 'Pull Shark' },
    { src: 'https://example.com/yolo.png', alt: 'Yolo' },
    { src: 'https://example.com/quickdraw.png', alt: 'Quickdraw' },
    { src: 'https://example.com/arctic.png', alt: 'Arctic' },
  ],
};

const Home: React.FC = () => {
  return (
    <div className="bg-profileBg min-h-screen">
      <Header />
      <main className="flex flex-col">
        <NavContainer />
        <div className="flex flex-1">
          <div className="z-10 translate-x-28 -translate-y-8">
            <Profile {...userProfile} />
          </div>
          <div className="translate-x-36">
            <RepositoriesHome />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
