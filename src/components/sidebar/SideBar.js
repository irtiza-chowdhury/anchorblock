/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import invoiceImg from '../../assets/images/invoice.png';
import logoimg from '../../assets/images/logo.png';
import menuImg from '../../assets/images/menu 1.png';
import userImg from '../../assets/images/user.png';

export default function SideBar() {
  return (
    <div className="sidebar w-[70px] mobile:w-[100px] md:w-[249px]  border-r-[#EDEFF1] border border-solid px-[5px]  md:px-[10px] lg:px-[16px] min-h-screen space-y-[20px]">
      <div className="mt-[60px] md:mt-[30px] pl-[17px]">
        <img className="hidden sm:block" src={logoimg} alt="logo" />
        <span className="block sm:hidden text-medium font-bold text-[#4E5D78]">Stack</span>
      </div>
      <div className="text-small text-[#B0B7C3] pl-[17px]">Pages</div>
      <ul className="space-y-[10px]">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `cursor-pointer  pageNav ${isActive && 'nav-active'}`}
          >
            <img className="w-[16px] h-[16px]" src={menuImg} alt="menu" />
            <span className="text-[#A7AFBC] hidden md:block md:text-base font-medium">
              Dashboard
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) => `cursor-pointer pageNav ${isActive && 'nav-active'}`}
          >
            <img className="w-[16px] h-[16px]" src={userImg} alt="user" />
            <span className="text-[#A7AFBC] hidden md:block md:text-basee font-medium">Users</span>
          </NavLink>
        </li>
        <li>
          <div className="pageNav">
            <img className="w-[16px] h-[16px]" src={invoiceImg} alt="invoice" />
            <span className="text-[#A7AFBC] hidden md:block md:text-base font-medium">Sales</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
