import React from "react";
import Java from "../Assest/java.png";
import Angular from "../Assest/angular.png";
import Github from "../Assest/github.png";
import Html from "../Assest/html.png";
import Nodejs from "../Assest/node.png";
import Php from "../Assest/php.png";
import Python from "../Assest/python.png";
import Reacicon from "../Assest/react.png";
import Bootstrap from "../Assest/Bootstrap.png";
import Mysql from "../Assest/mysql.png";
import CSS from "../Assest/css.png";
import JS from "../Assest/js.png";
const Experience = () => {
  return (
    <div name="Experience" className=" bg-[#1b082c] text-white pb-20">
      {/* Container */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className="text-center">
          <p className="text-3xl sm:text-4xl font-bold inline-block border-b-4 border-purple-800 text-white">
            EXPERIENCE
          </p>
          <p className="py-4 text-lg sm:text-2xl text-white">
            Technologies I am acquainted with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">JAVA</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Angular} alt="Angular icon" />
            <p className="my-4">ANGULAR</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="Html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nodejs} alt="Nodejs icon" />
            <p className="my-4">NODEJS</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Php} alt="Php icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reacicon} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Bootstrap}
              alt="Bootstrap icon"
            />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="rounded-md shadow-md shadow-[#2c0b48] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mysql} alt="Mysql icon" />
            <p className="my-4">MYSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
