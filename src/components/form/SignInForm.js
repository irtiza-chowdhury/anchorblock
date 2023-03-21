/* eslint-disable eqeqeq */
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import atThe from '../../assets/images/at-the.png';
import Eye from '../../assets/images/eye.png';
import Lock from '../../assets/images/lock.png';
import { useUserLoginMutation } from '../../features/auth/authApi';
import { userLoggedIn } from '../../features/auth/authSlice';

import ErrorMessage from '../ui/ErrorMessage';
import ThreeDot from '../ui/loaders/ThreeDot';

export default function SignInForm() {
  const [passwordType, setPasswordType] = useState(false);

  const [userLogin, { data: loginInfo, isLoading, isError }] = useUserLoginMutation();

  const handlePasswordTypeChange = () => {
    setPasswordType(!passwordType);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth'));

    if (!isLoading && !isError && token?.accessToken == loginInfo?.token) {
      navigate('/user');
      dispatch(userLoggedIn(token?.accessToken));
    }
  }, [dispatch, isError, isLoading, loginInfo?.token, navigate]);

  const SignupSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Too Short!').max(70, 'Too Long!').required('Required'),
    email: Yup.string().email('Please enter a valid Mail').required('Required'),
  });

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      checkbox: false,
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (val) => {
      userLogin({
        email: val.email,
        password: val.password,
      });
    },
  });

  return (
    <>
      <form className="space-y-[20px] " onSubmit={handleSubmit}>
        <div className="relative">
          <span className="absolute top-[20px] left-[10px] text-[#C5CBD3] font-normal cursor-pointer">
            <img src={atThe} alt="email" />
          </span>
          <input
            type="email"
            name="email"
            className={`px-[40px] py-[20px] h-[58px] w-full rounded-[16px]  border ${
              errors.email && touched.email ? 'border-[#FF5630]' : 'border-[#F3F3F3]'
            }`}
            placeholder="Your Email"
            onChange={handleChange}
          />
          {errors.email && touched.email ? (
            <div className="text-base mt-[10px] text-[#FF5630] font-medium">{errors.email}</div>
          ) : null}
        </div>

        <div className="relative">
          <span className="absolute top-[22px] left-[10px] text-[#C5CBD3] font-normal cursor-pointer">
            <img src={Lock} alt="password" />
          </span>
          <span
            className="absolute top-[22px] right-[10px] text-[#C5CBD3] font-normal cursor-pointer"
            onClick={handlePasswordTypeChange}
          >
            <img src={Eye} alt="eye" />
          </span>
          <input
            type={passwordType ? 'text' : 'password'}
            value={values.password}
            label="password"
            name="password"
            className={`px-[40px] py-[20px] h-[58px] w-full rounded-[16px]  border ${
              errors.password && touched.password ? 'border-[#FF5630]' : 'border-[#F3F3F3]'
            }`}
            placeholder="Your Password"
            onChange={handleChange}
          />
          {errors.password && touched.password ? (
            <div className="text-base mt-[10px] text-[#FF5630] font-medium">{errors.password}</div>
          ) : null}
        </div>
        <div className="space-x-[20px]">
          <label>
            <input
              name="checkbox"
              className="bg-[#EDEFF1] rounded-[8px] cursor-pointer border"
              type="checkbox"
              onChange={handleChange}
            />

            <span className="text-medium text-[#B0B7C3] font-medium ml-[10px]">Remember me</span>
          </label>
          {errors.checkbox && touched.checkbox ? (
            <div className="text-base mt-[10px] text-[#FF5630] font-medium">{errors.checkbox}</div>
          ) : null}
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="bg-[#377DFF] mt-[35px] border-solid border flex justify-center items-center border-[#377DFF] w-full py-[20px] text-[#FFFFFF] font-medium text-medium rounded-[16px] cursor-pointer"
        >
          {isLoading ? <ThreeDot /> : 'Sign In'}
        </button>
      </form>

      {!isLoading && isError ? <ErrorMessage message="Please sign up before Sign in" /> : null}

      <div className="text-center pt-[35px] text-[#B0B7C3] text-medium font-medium">
        Don't have an account?
        <Link className="text-[#377DFF] cursor-pointer ml-[10px]" to="/">
          Sign Up
        </Link>
      </div>
    </>
  );
}
