import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import atThe from '../../assets/images/at-the.png';
import Eye from '../../assets/images/eye.png';
import Lock from '../../assets/images/lock.png';
import Face from '../../assets/images/smile.png';
import { useUserRegisterMutation } from '../../features/auth/authApi';
import { userLoggedIn } from '../../features/auth/authSlice';
import ErrorMessage from '../ui/ErrorMessage';
import ThreeDot from '../ui/loaders/ThreeDot';

export default function SignUpForm() {
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordType, setPasswordType] = useState(false);

  const [userRegister, { data: registerData, isLoading, isError }] = useUserRegisterMutation();

  const navigate = useNavigate();

  const handlePasswordTypeChange = () => {
    setPasswordType(!passwordType);
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(4, 'Too Short!').max(70, 'Too Long!').required('Required'),
    password: Yup.string().min(6, 'Too Short!').max(70, 'Too Long!').required('Required'),
    email: Yup.string().email('Please enter a valid Mail').required('Required'),
    checkbox: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
  });

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      checkbox: false,
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (val) => {
      userRegister({
        email: val.email,
        password: val.password,
      });
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth'));
    dispatch(userLoggedIn(token?.accessToken));
    setPasswordValue(values?.password);
    if (registerData?.id) {
      navigate('/signin');
    }
  }, [dispatch, navigate, registerData?.id, values?.password]);

  function getLengthofPassword(value) {
    const totalLength = [];
    const len = value?.length;

    const newValue = Math.floor(len / 2);

    for (let i = 0; i < 6; i += 1) {
      if (newValue - 1 < i) {
        totalLength.push(<span className="bg-[#F3F3F3] rounded-[2px] w-[68px] h-[4px]" />);
      } else {
        totalLength.push(<span className="bg-[#38CB89] rounded-[2px] w-[68px] h-[4px]" />);
      }
    }
    return totalLength;
  }

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
          <span className="absolute top-[20px] left-[10px] text-[#C5CBD3] font-normal cursor-pointer">
            <img src={Face} alt="smile" />
          </span>
          <input
            name="name"
            className={`px-[40px] py-[20px] h-[58px] w-full rounded-[16px]  border ${
              errors.name && touched.name ? 'border-[#FF5630]' : 'border-[#F3F3F3]'
            }`}
            placeholder="Your Name"
            onChange={handleChange}
          />
          {errors.name && touched.name ? (
            <div className="text-base mt-[10px] text-[#FF5630] font-medium">{errors.name} </div>
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
            placeholder="Create Password"
            onChange={handleChange}
          />
          {errors.password && touched.password ? (
            <div className="text-base mt-[10px] text-[#FF5630] font-medium">{errors.password}</div>
          ) : null}

          <div className="flex mt-[10px] space-x-[20px]">{getLengthofPassword(passwordValue)}</div>
        </div>
        <div className="space-x-[20px]">
          <label>
            <input
              name="checkbox"
              className={`bg-[#EDEFF1] rounded-[8px] cursor-pointer border ${
                errors.checkbox && touched.checkbox ? 'border-[#FF5630]' : 'border-[#F3F3F3]'
              }`}
              type="checkbox"
              onChange={handleChange}
            />

            <span className="text-medium text-[#B0B7C3] font-medium ml-[10px]">
              I agree to the Terms & Conditions
            </span>
          </label>
          {errors.checkbox && touched.checkbox ? (
            <div className="text-base mt-[10px] text-[#FF5630] font-medium">{errors.checkbox}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#377DFF] mt-[35px] flex justify-center items-center border-solid border border-[#377DFF] w-full py-[20px] text-[#FFFFFF] font-medium text-medium rounded-[16px] cursor-pointer"
        >
          {isLoading ? <ThreeDot /> : 'Sign Up'}
        </button>
      </form>

      {!isLoading && isError ? (
        <ErrorMessage message="Only defined users succeed registration" />
      ) : null}

      <div className="text-center pt-[35px] text-[#B0B7C3] text-medium font-medium">
        Already have an account?
        <Link className="text-[#377DFF] cursor-pointer ml-[10px]" to="/signin">
          Sign In
        </Link>
      </div>
    </>
  );
}
