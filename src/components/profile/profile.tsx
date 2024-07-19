import React from 'react';
import Jeosafa from '../../assets/jeosafa.jpeg';
import Arctic from '../../assets/arctic.png';
import PullShark from '../../assets/pull-shark.png';
import Yolo from '../../assets/yolo.png';
import Quickdraw from '../../assets/quickdraw.png';
import { LuUsers2, LuDot } from 'react-icons/lu';
import { FaRegStar } from 'react-icons/fa';

const Profile: React.FC = () => {
  return (
    <div className="text-white h-[725px] w-[296px]">
      <div className="w-[296px] ">
        <img className="rounded-full" src={Jeosafa} alt="" />
        <div className="mt-4">
          <h1 className="font-sans-bold font-bold text-2xl">
            Jeosafá Ferreira
          </h1>
          <span className="text-userText text-xl">jeosafaferreira</span>
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
                <span>2</span>
                <span>followers</span>
              </div>
            </div>
            <LuDot className="text-userText" />
            <div className="flex gap-1 items-center hover:text-followHover">
              <span>2</span>
              <span>following</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-border">
            <h3 className="font-sans-bold font-bold text-base hover:text-followHover">
              Achievements
            </h3>
            <div className="flex mt-2">
              <span>
                <img className="w-16" src={PullShark} alt="" />
              </span>
              <span>
                <img className="w-16" src={Yolo} alt="" />
              </span>
              <span>
                <img className="w-16" src={Quickdraw} alt="" />
              </span>
              <span>
                <img className="w-16" src={Arctic} alt="" />
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-6 py-4 border-t border-border">
            <h3 className="font-sans-bold font-bold text-base">Highlights</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center justify-center">
                <FaRegStar className="text-userText" />
              </div>
              <div className="p-1 font-sans-bold font-bold text-xs text-proText rounded-xl border border-proText ">
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
