import React from "react";
import store from "../images/Storefront.svg";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex flex-col bg-black p-4">
      {/* 1st row */}
      <div className="flex items-center mb-4">
        <img src={store} alt="Store" className="mr-4" />
        <h1 className="text-white">NFT MarketPlace</h1>
      </div>

      {/* 2nd row */}
      <div className="flex flex-col lg:flex-row lg:justify-between mt-4">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <h1 className="text-white mb-4">NFT MarketPlace UI created</h1>
          <h1 className="text-white mb-4">with anima for figma</h1>
          <h1 className="text-white mb-4">Join our community</h1>
          <div className="flex">
            <a
              href="https://www.youtube.com"
              className="text-gray-400 text-3xl p-2"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.discord.com"
              className="text-gray-400 text-3xl p-2"
            >
              <BsDiscord />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-400 text-3xl p-2"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 text-3xl p-2"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="lg:w-1/4 mb-4 lg:mb-0">
          <h1 className="text-white mb-4 text-3xl">Explore</h1>
          <h1 className="text-white mb-4">Marketplace</h1>
          <h1 className="text-white mb-4">Ranking</h1>
          <h1 className="text-white mb-4">Connect a wallet</h1>
        </div>

        {/* Join our weekly digest */}
        <div className="lg:w-1/4">
          <h1 className="text-white mb-4 text-3xl">Join our weekly digest</h1>
          <h1 className="text-white mb-4">
            Get exclusive promotion and updates
          </h1>
          <h1 className="text-white mb-4">Straight to your inbox</h1>
          <div className="flex bg-white m-3 rounded-xl">
            <input
              type="text"
              placeholder="Email Address"
              className="px-4 py-1 bg-indigo-500 rounded-xl w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-500 w-full h-1 mt-4"></div>
    </footer>
  );
}

export default Footer;
