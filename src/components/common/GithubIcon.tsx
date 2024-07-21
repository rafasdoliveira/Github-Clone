import React from 'react';
import { useNavigate } from 'react-router-dom';
import GithubLogo from '../../assets/githubLogoWhite.svg';

const GithubIcon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-8 cursor-pointer" onClick={() => navigate('/')}>
      <img src={GithubLogo} alt="Logo Github" />
    </div>
  );
};

export default GithubIcon;
