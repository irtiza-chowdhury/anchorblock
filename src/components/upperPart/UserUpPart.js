import React from 'react';
import userImg from '../../assets/images/Mask group.png';
import notificationBell from '../../assets/images/notification-bell.png';
import serchImg from '../../assets/images/search.png';

export default function UserUpPart() {
  return (
    <div className="block sm:flex justify-between items-center">
      <div className="flex sm:hidden justify-end mb-[20px] lg:mt-0 items-center space-x-[40px]">
        <img className="w-[25px] h-[25px]" src={notificationBell} alt="notification-bell" />
        <div className="w-[47px] h-[47px] rounded-full cursor-pointer">
          <img className="w-full h-full cursor-pointer" src={userImg} alt="person" />
        </div>
      </div>
      <div className="relative w-[250px] md:w-[400px]  xl:w-[539px] ">
        <span className="absolute top-[20px] right-[15px] text-[#C5CBD3] font-normal cursor-pointer">
          <img src={serchImg} alt="search" />
        </span>
        <input
          className="px-[18px] h-[54px] w-full bg-[#F0F5FA] rounded-[14px] border-[#F0F5FA] border"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="hidden sm:flex justify-end mt-[20px] lg:mt-0 items-center space-x-[40px]">
        <img className="w-[25px] h-[25px]" src={notificationBell} alt="notification-bell" />
        <div className="w-[47px] h-[47px] rounded-full cursor-pointer">
          <img className="w-full h-full cursor-pointer" src={userImg} alt="person" />
        </div>
      </div>
    </div>
  );
}
