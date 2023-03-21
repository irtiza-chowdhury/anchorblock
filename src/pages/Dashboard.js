import React from 'react';
import SideBar from '../components/sidebar/SideBar';

export default function Dashboard() {
  return (
    <div className="flex">
      <SideBar />

      <div className="mainBody mt-[30px] ml-[30px] mb-[40px] w-[75%]  ">
        <div className="flex justify-center align-middle items-center pt-[50px] text-large font-bold">
          Dashboard
        </div>
      </div>
    </div>
  );
}
