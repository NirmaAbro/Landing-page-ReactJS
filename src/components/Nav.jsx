import React, { useState } from "react";
import { MdOutlineStorefront } from "react-icons/md";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6 bg-[#2B2B2B]">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <MdOutlineStorefront className="w-10 h-10 mr-2" />
          <h2 className="font-semibold">NFT Marketplace</h2>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 w-5 text-white ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-5 w-5 text-white ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="/marketplace"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-bold"
            >
              Marketplace
            </a>
            <a
              href="/rankings"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-semibold"
            >
              Rankings
            </a>
            <a
              href="/wallet"
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-semibold"
            >
              Connect a wallet
            </a>
          </div>
          <div>
            <button className="inline-flex items-center bg-[#A259FF] border-0 py-2 px-5 m-2 text-white rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
