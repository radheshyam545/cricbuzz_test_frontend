// src/components/Footer.js
import React from 'react';
import { FaAndroid, FaApple, FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';
import logo from "/logo.png"; // Ensure the path is correct

const Footer = () => {
  return (
    <div className='max-w-[1185px] mx-auto '>
    <div className=" text-white py-8 flex justify-start" style={{ width: '100%' }}>
      <div className="flex w-[55%] ">
        <div className="flex justify-center pl-[130px]  ">
          <img src={"https://static.cricbuzz.com/images/cb_logo.svg"} alt="Cricbuzz Logo" className="h-10" />
        </div>
        <div className="flex flex-col space-y-4 pl-[40px]">
          <p className="font-bold text-[16px] mb-3">MOBILE SITE & APPS</p>
          <a href="http://m.cricbuzz.com" className="flex items-center space-x-2">
          <FaAndroid className="text-xl" />
           <span> m.cricbuzz.com </span>
          </a>
          <a href="http://m.cricbuzz.com" className="flex items-center space-x-2">
            <FaAndroid className="text-xl" />
            <span>Android</span>
          </a>
          <a href="http://m.cricbuzz.com" className="flex items-center space-x-2">
            <FaApple className="text-xl" />
            <span>iOS</span>
          </a>
        </div>
      </div>
      <div className="flex w-[66%] space-x-[85px] px-10">
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-[16px] mb-3">FOLLOW US ON</p>
          <div className="flex items-center space-x-2 py-2">
            <FaFacebookF />
            <span>Facebook</span>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <FaTwitter />
            <span>Twitter</span>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <FaYoutube />
            <span>YouTube</span>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <FaPinterest />
            <span>Pinterest</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="font-bold mb-3">COMPANY</p>
          <a href="/careers" className='py-[5px]'>Careers</a>
          <a href="/advertise" className='py-[5px]'>Advertise</a>
          <a href="/privacy" className='py-[5px]'>Privacy Policy</a>
          <a href="/terms" className='py-[5px] '>Terms of Use</a>
          <a href="/terms" className='py-[5px] '>Cricbuzz TV Ads</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
