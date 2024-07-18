import React from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from '../../assets/githubLogoWhite.svg';

const GithubIcon: React.FC = () => {
  return (
    <div className="w-8">
      <Link to="https://github.com/">
        <img src={GithubLogo} alt="Logo Github" />
      </Link>
    </div>
  );
};

export default GithubIcon;
