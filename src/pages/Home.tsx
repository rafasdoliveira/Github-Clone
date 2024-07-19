import React from 'react';
import Header from '../components/header/Header';
import NavContainer from '../components/nav/NavContainer';
import Profile from '../components/profile/profile';

const Home: React.FC = () => {
  return (
    <div className="bg-profileBg">
      <Header />
      <main className="">
        <NavContainer />
        <div className="z-10 translate-x-28 -translate-y-8">
          <Profile />
        </div>
      </main>
    </div>
  );
};

export default Home;
