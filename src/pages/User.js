import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserLowPart from '../components/lowerPart/UserLowPart';
import SideBar from '../components/sidebar/SideBar';
import UserUpPart from '../components/upperPart/UserUpPart';
import { userLoggedIn } from '../features/auth/authSlice';

export default function User() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth')) || {};
    if (token?.accessToken) {
      dispatch(userLoggedIn(token?.accessToken));
    }
  }, [dispatch]);
  return (
    <div className="flex">
      <SideBar />
      <div className="mainBody mt-[60px] md:mt-[30px] ml-[5px] mobile:ml-[10px] md:ml-[30px] mb-[40px] w-[75%] 2xl:w-[80%]">
        <UserUpPart />
        <div className="text-lg md:text-xl  text-[#323B4B] my-[40px] font-semibold">Users List</div>
        <UserLowPart />
      </div>
    </div>
  );
}
