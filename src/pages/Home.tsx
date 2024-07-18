import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const Home: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
