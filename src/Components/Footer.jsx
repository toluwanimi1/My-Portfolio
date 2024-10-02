import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="h-full bg-[#1b082c] py-10 flex flex-col items-center">
      <hr className="border-gray-300 mb-2 w-full" /> {/* Adjusted margin */}
      <div className="flex items-center mt-4">
        <p className="text-lg md:text-xl text-white mr-4"> {/* Responsive text size */}
          &copy; 2024 Toluwanimi Amudipe.
        </p>
        <button className="bg-[#633d85] hover:bg-[#654880] text-white rounded px-3 py-1 md:px-4 md:py-2 flex items-center"> {/* Responsive button padding */}
          <Link
            to="Home"
            smooth={true}
            offset={50}
            duration={500}
            className="flex items-center"
          >
            Back to top
            <span className="ml-2 md:ml-3"> {/* Adjusted left margin for icon */}
              <HiOutlineArrowNarrowUp />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Footer;
