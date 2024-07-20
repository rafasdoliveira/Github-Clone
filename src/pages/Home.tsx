import React from 'react';
import Header from '../components/header/Header';
import NavContainer from '../components/nav/NavContainer';
import Profile from '../components/profile/profile';
import RepositoriesHome from '../components/repositoriesHome/RepositoriesHome';

const Home: React.FC = () => {
  return (
    <div className="bg-profileBg">
      <Header />
      <main className="">
        <NavContainer />
        <div className="flex">
          <div className="z-10 translate-x-28 -translate-y-8">
            <Profile />
          </div>
          <div className="border-2 translate-x-36  w-full">
            <RepositoriesHome />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
