import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/triogen.svg";
import SocialFooterIcons from "./SocialFooterIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="mt- ">
      <div className="bg-[#295f4e]  text-white ">
        <div className=" mx-auto pt-2">
          <div className="grid mx-auto ml-[40px] md:ml-4 grid-cols-2 gap-[65px] md:grid-cols-4 md:gap-6 mt-4 ">
            <div className="md:ml-8 text-sm">
              <img
                className="md:w-40 w-32 md:-ml-4 -ml-[15px] mb-5"
                src={logo}
                alt="logo"
              />
              <div className="-ml-3">
                <p className="mb-3 mr-2"> <a className="cursor-pointer text-blue-300" href="http://www.triogenexports.com" target="_blank" rel="noopener noreferrer">Triogen Exports</a>
                </p>
                <p className="mb-3 mr-1  w-48">
                triogendubai@gmail.com
                </p>
                <p className="mb-3 mr-1 w-48">Mobile : +91 94433 33122</p>
                <p className="mb-3 mr-1 w-48">Mobile : +971 54 265 3665</p>

                {/* social icon */}
                <SocialFooterIcons></SocialFooterIcons>
              </div>
            </div>

            {/* useful links */}
            <div className="mt-4 md:ml-10 lg:ml-20 ml-4">
              <h1 className=" text-base md:text-lg font-semibold mb-5">
                Our Links
              </h1>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/about-Us"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/offerings">Offerings</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>

            {/* company */}
            <div className="md:mt-4 lg:ml-10">
              <h1 className="text-base md:text-lg font-semibold mb-5">
                Our Company
              </h1>

              <ul className="text-sm">
                <li className="mb-2">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    About Company
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Our Testimonial
                  </a>
                </li>
              </ul>
            </div>

            {/* support */}
            <div className="md:mt-4 lg:ml-20 ">
              <h1 className="text-base md:text-lg font-semibold mb-5">
                Our Support
              </h1>

              <ul className="text-sm">
                <li className="mb-2">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Customer Support
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom */}
          <div className="mt- py-5 border-y-0 text-center">
            <hr className="mb-2 border-blue-200" />
            <p className="">
              &copy; Copyright 2024{" "}
              <span className="text-blue-500">Triogen Exports</span> - All
              rights reserved
            </p>
            <p className="">
              {" "}
              <FontAwesomeIcon icon={faBolt} className="text-blue-500 mr-2" />
              Powered By <span className="text-blue-500">
                Creative Lance{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
