import React from 'react';
import appleImg from '../assets/images/apple.png';
import googleImg from '../assets/images/google.png';
import SignUpForm from '../components/form/SignUpForm';
import NavBar from '../components/NavBar/NavBar';

export default function Registration() {
  return (
    <>
      <NavBar />

      <div className="mt-[50px] w-[340px] md:w-[560px] mx-auto space-y-[20px] pb-[60px]">
        <div className="text-xl md:text-large text-[#323B4B] text-center font-bold">
          Getting started
        </div>
        <div className="text-[#8A94A6] text-center font-medium text-lg">
          Create an account to continue
        </div>
        <div className="flex justify-center space-x-[30px]">
          <div className="flex items-center space-x-[10px] h-[58px] bg-[#F0F5FA] px-[15px] md:px-[35px] py-[19px] cursor-pointer rounded-[16px]">
            <span>
              <img src={googleImg} alt="google" />
            </span>
            <span className="text-medium font-medium text-[#8A94A6]">Sign Up with Google</span>
          </div>
          <div className="flex items-center space-x-[10px] h-[58px] bg-[#F0F5FA] px-[15px] md:px-[35px] py-[19px] cursor-pointer rounded-[16px]">
            <span>
              <img src={appleImg} alt="apple" />
            </span>
            <span className="text-medium font-medium text-[#8A94A6]">Sign Up with Apple Id</span>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-[30px]">
          <div className="w-[230px] bg-[#F0F5FA] h-[2px]" />
          <div className="text-or text-[#B0B7C3] font-medium">OR</div>
          <div className="w-[230px] bg-[#F0F5FA] h-[2px]" />
        </div>

        <SignUpForm />
      </div>
    </>
  );
}
