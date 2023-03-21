import React from 'react';
import logoImage from '../../assets/images/logo.png';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center mt-[60px] md:mt-[30px] mx-[20px]">
      <div>
        <img src={logoImage} alt="logo" />
      </div>

      <div>
        <select
          className="bg-[#F0F5FA] text-[#B0B7C3] rounded-[16px] cursor-pointer font-medium text-small px-[18px] py-[14px]"
          name="language"
        >
          <option value="english">English Us</option>
          <option value="bangla">Bangla</option>
        </select>
      </div>
    </nav>
  );
}
