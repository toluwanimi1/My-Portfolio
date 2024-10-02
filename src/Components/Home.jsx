import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import profile from "../Assest/profile.jpg";
import pdf from "../Assest/Toluwanimi Resume 2024.pdf";
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#1b082c] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-center items-center h-full ">
        <img
          src={profile}
          alt="Profile"
          className="h-[143px] w-[143px] sm:h-[175px] sm:w-[175px] rounded-full mb-6 sm:mb-0 sm:mr-8 border-4 border-[#311649] shadow-lg "
        />
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#bb97ff]">
            Toluwanimi Amudipe
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#8e6eca]">
            Software Engineer
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-white py-4 max-w-[700px]">
            Skilled at creating intricate digital experiences, and I am
            proficient in various programming languages and technologies.
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-7">
            <a
              href={pdf}
              target="_blank"
              className="bg-[#633d85] text-white py-4 px-8 rounded hover:bg-[#654880] flex flex-col items-center justify-center"
            >
              <FaFile size={30} /> <span>Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tamudip27/"
              target="_blank"
              className="bg-[#633d85] text-white py-4 px-8 rounded hover:bg-[#654880] flex flex-col items-center justify-center"
            >
              <FaLinkedin size={30} /> <span>Linkedin</span>
            </a>
            <a
              href="https://github.com/toluwanimi1"
              target="_blank"
              className="bg-[#633d85] text-white py-4 px-8 rounded hover:bg-[#654880] flex flex-col items-center justify-center"
            >
              <FaGithub size={30} /> <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
