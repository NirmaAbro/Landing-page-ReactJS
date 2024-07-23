import React from "react";
import { FaYoutube } from "react-icons/fa";
import logo from "../images/Storefront.svg";
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="p-8 bg-black  justify-around flex flex-col md:flex-row ">
      <div className=" flex flex-col">
        {/* 1st  */}
        <div className="flex space-x-3 text-white">
          <div className="w-10">
            <img src={logo} alt="" />
          </div>
          <div>NFT MarketPlace</div>
        </div>

        {/* 2nd  */}
        <div className="mt-6 text-white flex flex-col ">
          <h5 className="m-2">NFT MarketPlace UI created</h5>
          <h5 className="m-2">with anima for figma</h5>
          <h5 className="m-2">Join our community</h5>
        </div>

        {/* logos 3rd div  */}
        <div className="mt-6 flex text-white space-x-3">
          <div className="text-3xl p-1">
            <FaYoutube />
          </div>
          <div className="text-3xl p-1">
            <FaDiscord />
          </div>
          <div className="text-3xl p-1">
            <FaTwitter />
          </div>
          <div className="text-3xl p-1">
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* explore 4th */}
      <div className="mt-12 text-white">
        <h1 className="m-2 md:text-3xl text-xl ">Explore</h1>
        <h5 className="m-2 text-base ">Ranking</h5>
        <h5 className="m-2 text-base">Connect a wallet</h5>
      </div>

      {/* join 5th */}
      <div className="mt-12 text-white ">
        <h1 className="m-2 md:text-3xl text-xl ">Join our weekly digest</h1>
        <h5 className="m-2 text-base">Get exclusive promotion and updates</h5>
        <h5 className="m-2 text-base">Straight to your inbox</h5>
        <div className="mt-4 text-base text-white bg-white rounded-full w-full">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-purple-600 w-1/2  p-2 text-white rounded-full outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
