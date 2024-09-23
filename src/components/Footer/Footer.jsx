import { Link } from "react-router-dom";
import "./Footer.css";
import SocialFooterIcons from "./SocialFooterIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import {
  FaAngleRight,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#295f4e] text-white px-24 pt-10  ">
        <div>
          <div className="-ml-10 sm:-ml-0 grid mx-auto grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3  lg:gap-20  ">
            <div>
              <h3 className="text-green-500 font-bold lg:text-3xl  md:txt-2xl sm:sm:text-xl text-lg">
                Locate US
              </h3>
              <div>
                <p className="my-4 text-base font-medium w-80">
                  {" "}
                  <span className="text-green-500 font-bold text-md">
                    Address
                  </span>{" "}
                  : Al Farah plaza Office # 901 Al nahda 2 Behind NMC Hospital
                  Dubai
                </p>

                <p className="mt-8 gap-4 flex font-semibold">
                  <span className="text-green-500 text-lg">
                    <FaPhoneAlt />{" "}
                  </span>{" "}
                  +91 94433 33122 (IND)
                </p>
                <p className="my-4 gap-4 flex  font-semibold">
                  <span className="text-green-500 text-xl">
                    <FaWhatsapp />
                  </span>{" "}
                  971 54 265 3665 (UAE)
                </p>
                <p className="my-4 gap-4 flex  font-semibold">
                  <span className="text-green-500 text-xl">
                    <FaEnvelope />
                  </span>{" "}
                  triogendubai@gmail.com
                </p>

                {/* social icon */}
                {/* <SocialFooterIcons></SocialFooterIcons> */}
              </div>
            </div>

            {/* useful links */}

            <div className="lg:ml-20 md:ml-10">
              <h3 className="text-green-500 font-bold lg:text-3xl  md:txt-2xl sm:sm:text-xl text-lg">
                Explore
              </h3>
              <div className="flex gap-20">
                <ul className="my-4 space-y-3 font-medium">
                  <li className="hover:text-green-500 cursor-pointer flex gap-2 items-center">
                    {" "}
                    <FaAngleRight className="text-green-500 cursor-pointer" />
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="hover:text-green-500 cursor-pointer flex gap-2 items-center">
                    {" "}
                    <FaAngleRight className="text-green-500 cursor-pointer" />
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="hover:text-green-500 cursor-pointer flex gap-2 items-center">
                    {" "}
                    <FaAngleRight className="text-green-500 cursor-pointer" />
                    <Link to="/investors">Investors</Link>
                  </li>
                </ul>
                <ul className="my-4 space-y-3 font-medium">
                  <li className="hover:text-green-500 cursor-pointer flex gap-2 items-center">
                    {" "}
                    <FaAngleRight className="text-green-500 cursor-pointer" />
                    <Link to="/about-us"> About Us</Link>
                  </li>
                  <li className="w-40 hover:text-green-500 cursor-pointer flex gap-2 items-center">
                    {" "}
                    <FaAngleRight className="text-green-500 cursor-pointer" />
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:ml-24">
              <h3 className="text-green-500 font-bold lg:text-3xl  md:txt-2xl sm:sm:text-xl text-lg">
                Socials
              </h3>
              {/* social icon */}
              <SocialFooterIcons></SocialFooterIcons>
            </div>
          </div>

          {/* bottom */}
          <div className=" py-5 border-y-0 text-center">
            <hr className="my-2 border-blue-200" />
            <p className="mt-4 ">
              &copy; Copyright 2024{" "}
              <span className="text-green-500">Triogen Exports</span> - All
              rights reserved
            </p>
            <p className="w-[1000px] text-center mx-auto">
              {" "}
              <FontAwesomeIcon icon={faBolt} className="text-green-500 mr-2" />
              Powered By <span className="text-green-500">
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
