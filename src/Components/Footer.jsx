import React from 'react';
import Icon from '../assets/icon.png';
import Linkedin from '../assets/linkedin.png';
import Facebook from '../assets/facebook.png';
import Discord from '../assets/discord.png';
import Instagram from '../assets/instagram.png';

const Footer = () => {
  return (
    <div className="w-full py-6 px-8 md:px-16 lg:px-32 border-t drop-shadow-[#0000001A]">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex gap-4 items-center">
            <img src={Icon} alt="icon" className="w-12 lg:w-[70px]" />
            <h3 className="font-bold text-xl lg:text-2xl bg-custom-gradient text-transparent bg-clip-text">
              Clouditecture
            </h3>
          </div>
          <p className="mt-4 text-sm lg:text-base font-light">
            Transforming vision into cloud reality
          </p>
          <div className="mt-6">
            <ul className="flex gap-4 items-center">
              <li>
                <a href="#">
                  <img src={Linkedin} alt="linkedin"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Instagram} alt="instagram"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Discord} alt="discord"/>
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-xs lg:text-sm font-normal">
            &#64; 2024 Clouditecture, Inc. All rights reserved.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-base lg:text-lg font-semibold">Location</h2>
          <p className="mt-2 text-sm lg:text-base font-light">
            PTCL Training center,<br />
            University Rd, near BISE,<br />
            Canal Town Peshawar,<br />
            Khyber Pakhtunkhwa<br />
            25000
          </p>
        </div>

        {/* Right Section */}
        <div >
          <h2 className="text-base lg:text-lg font-semibold">Legal</h2>
          <p className="mt-2 text-sm lg:text-base font-light">
            Terms of Service <br />
            Privacy Policy <br />
            <span className="block mt-4">Clouditecture@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;