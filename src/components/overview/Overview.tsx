import React from 'react';
import RepositoriesHome from '../repositoriesHome/RepositoriesHome';
import Contributions from '../contributions/Contributions';

const Overview: React.FC = () => {
  return (
    <div className=" bg-profileBg">
      <div className="">
        <RepositoriesHome />
      </div>
      <div className="">
        <Contributions totalContributions="36" />
      </div>
    </div>
  );
};

export default Overview;
