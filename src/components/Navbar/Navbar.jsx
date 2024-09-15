import logo from "../../assets/triogen.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className=" bg-[#295f4e]  ">
      <div className="flex items-center flex-row justify-between   py-5 relative w-full max-w-[1322px] mx-auto">
        <Link to="/">
          <img
            src={logo}
            className="w-48 h-10 lg:w-80 lg:h-20"
            alt="triogen logo"
          />
        </Link>
        <nav>
          <ul className=" mr-20  hidden md:flex items-center justify-center space-x-9 text-lg text-[#f4e5c2] font-medium relative ">
            <li>
              <NavLink
                to="/home"
                aria-label="Home"
                title="Home"
                className="hover:text-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                aria-label="products"
                title="products"
                className="hover:text-white"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/investors"
                aria-label="investors"
                title="investors"
                className="hover:text-white"
              >
                Investors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-Us"
                aria-label="about"
                title="about"
                className="hover:text-white"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
       

        {/*----------------------- Mobile Menu -------------------------*/}
        <div className="md:hidden">
          {/* Mobile Menu Toggle Button */}
          <button id="menuButton" onClick={handleMenuToggle}>
            {menuOpen ? (
              <svg
                className="w-8 text-white font-bold mr-6 my-auto "
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            ) : (
              <svg
                className="w-8 mr-6 my-auto text-gray-700"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            )}
          </button>
          <div
            id="menuList"
            style={{
              left: menuOpen ? "0px" : "-230px",
              top: menuOpen ? "80px" : "80px",
              transitionDuration: "1000ms",
            }}
            className={` absolute  h-[410px] sm:h-[600px] w-full   z-50 p-8 ${
              menuOpen ? "bg-gray-700 mb-20 menuOpen" : ""
            }`}
          >
            <ul className="flex flex-col gap-4 text-left font-medium  leading-6 text-[16px] text-white">
              <li>
                <NavLink
                  to="/home"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  aria-label="products"
                  title="products"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked
                >
                  products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/investors"
                  aria-label="investors"
                  title="investors"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked
                >
                 Investors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about-Us"
                  aria-label="about"
                  title="about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked
                >
                  About Us
                </NavLink>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
