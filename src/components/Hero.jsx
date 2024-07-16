import React from "react";
import largeImg from "../images/midpic.png";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  MdPassword,
  MdVisibility,
  MdVisibilityOff,
  MdAttachEmail,
} from "react-icons/md";

function Hero() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <section className="bg-[#2B2B2B]">
        <div className="grid max-w-screen-xl px-4 order-2 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Create Account.
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">
              Welcome! Enter your details and start creating, collecting, and
              selling NFTs.
            </p>
            <div className="flex flex-col gap-2 ">
              <div className="w-full flex bg-white rounded-full">
                <CgProfile className="text-gray-600 text-xl m-2 " />
                <input
                  type="text"
                  placeholder="Username"
                  className="py-2 px-4 rounded-full w-full outline-none"
                />
              </div>
              {/* for email  */}
              <div className="w-full flex bg-white rounded-full">
                <MdAttachEmail className="text-gray-600  text-xl m-2 " />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="py-2 px-4 rounded-full outline-none"
                />
              </div>
              {/* for password  */}
              <div className="w-full flex bg-white rounded-full items-center">
                <RiLockPasswordFill className="text-gray-600 text-xl m-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="py-2 px-4 rounded-full outline-none flex-grow"
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <MdVisibility className="text-gray-600 text-xl m-2" />
                  ) : (
                    <MdVisibilityOff className="text-gray-600 text-xl m-2" />
                  )}
                </div>
              </div>

              {/* for confirmed password  */}
              <div className="w-full flex bg-white rounded-full items-center">
                <MdPassword className="text-gray-600 text-xl m-2" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="py-2 px-4 rounded-full outline-none flex-grow"
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <MdVisibility className="text-gray-600 text-xl m-2" />
                  ) : (
                    <MdVisibilityOff className="text-gray-600 text-xl m-2" />
                  )}
                </div>
              </div>

              <button
                onClick={() => alert("Account Created!")}
                className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full bg-[#A259FF]"
              >
                Create Account
              </button>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex lg:ml-0 order-1">
            <img src={largeImg} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
