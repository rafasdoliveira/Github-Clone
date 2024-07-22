import React, { useEffect, useState } from 'react';
import getUser from '../../services/services/UserService';
import Arctic from '../../assets/arctic.png';
import PullShark from '../../assets/pull-shark.png';
import Yolo from '../../assets/yolo.png';
import Quickdraw from '../../assets/quickdraw.png';
import { LuUsers2, LuDot } from 'react-icons/lu';
import { FaRegStar } from 'react-icons/fa';
import { IoBusinessOutline } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useSelectedUser } from '../../context/SelectedUserContext';

interface ProfileProps {
  avatar?: string;
  name: string;
  username: string;
  bio?: string;
  followers?: string;
  following?: string;
  company?: string;
  location?: string;
  email?: string;
}

const Profile: React.FC<ProfileProps> = ({
  avatar,
  name,
  username,
  bio,
  followers,
  following,
  company,
  location,
  email,
}) => {
  const [userData, setUserData] = useState<ProfileProps | null>(null);
  const { selectedUser } = useSelectedUser();

  useEffect(() => {
    const fetchUser = async () => {
      const user = selectedUser || 'rafasdoliveira';

      try {
        const userData = sessionStorage.getItem(user);
        console.log(userData);
        const fetchedUser = await getUser(user);
        const mappedUser: ProfileProps = {
          avatar: fetchedUser.avatar_url,
          name: fetchedUser.name || '',
          username: fetchedUser.login,
          bio: fetchedUser.bio,
          followers: fetchedUser.followers
            ? fetchedUser.followers.toString()
            : '0',
          following: fetchedUser.following
            ? fetchedUser.following.toString()
            : '0',
          company: fetchedUser.company,
          location: fetchedUser.location,
          email: fetchedUser.email,
        };

        setUserData(mappedUser);
      } catch (error) {
        console.error('Erro ao carregar usuário inicial', error);
      }
    };

    fetchUser();
  }, [selectedUser]);

  const profile = userData || {
    avatar,
    name,
    username,
    bio,
    followers,
    following,
    company,
    location,
    email,
  };

  return (
    <div className="text-white w-[296px] h-full">
      <div className="w-[296px]">
        <img
          className="rounded-full"
          src={
            profile.avatar ||
            'https://avatars.githubusercontent.com/u/170582363?v=4'
          }
          alt={profile.name}
        />
        <div className="mt-4">
          <h1 className="font-sans-bold font-bold text-2xl">{profile.name}</h1>
          <span className="text-userText text-xl">{profile.username}</span>
          {profile.bio && (
            <div className="mt-3 text-base text-profileDetails">
              {profile.bio}
            </div>
          )}
          <div className="flex justify-center w-full mt-4 bg-followButton border border-followButtonBorder rounded-md cursor-pointer hover:bg-followButtonHover duration-300 ease-in-out">
            <button className="w-full h-8 text-sm font-bold text-followButtonText">
              Follow
            </button>
          </div>
          <div className="flex items-center mt-4 gap-1 text-sm text-userText">
            <div className="flex gap-2 items-center hover:text-followHover">
              <span>
                <LuUsers2 />
              </span>
              <div className="flex gap-1">
                <span>{profile.followers}</span>
                <span>followers</span>
              </div>
            </div>
            <LuDot className="text-userText" />
            <div className="flex gap-1 items-center hover:text-followHover">
              <span>{profile.following}</span>
              <span>following</span>
            </div>
          </div>
          {profile.company && (
            <div className="mt-6 text-sm">
              <div className="mb-1 flex items-center gap-2">
                <span>
                  <IoBusinessOutline />
                </span>
                <span>{profile.company}</span>
              </div>
              {profile.location && (
                <div className="mb-1 flex items-center gap-2">
                  <span>
                    <FaLocationDot />
                  </span>
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.email && (
                <div className="mb-1 flex items-center gap-2">
                  <span>{<MdOutlineMailOutline />}</span>
                  <span>{profile.email}</span>
                </div>
              )}
            </div>
          )}
          <div className="mt-6 pt-4 border-t border-border">
            <h3 className="font-sans-bold font-bold text-base hover:text-followHover">
              Achievements
            </h3>
            <div className="flex mt-2">
              <span>
                <img className="w-16" src={PullShark} alt="Pull Shark" />
              </span>
              <span>
                <img className="w-16" src={Yolo} alt="Yolo" />
              </span>
              <span>
                <img className="w-16" src={Quickdraw} alt="Quickdraw" />
              </span>
              <span>
                <img className="w-16" src={Arctic} alt="Arctic" />
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-6 py-4 border-t border-border">
            <h3 className="font-sans-bold font-bold text-base">Highlights</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center justify-center">
                <FaRegStar className="text-userText" />
              </div>
              <div className="p-1 font-sans-bold font-bold text-xs text-proText rounded-xl border border-proText">
                PRO
              </div>
            </div>
            <div className="mt-1">
              <span className="text-sm text-userText">Block or Report</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
