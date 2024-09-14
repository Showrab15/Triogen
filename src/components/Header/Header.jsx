import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";
import BgVideoPC from "../../assets/6159959-uhd_2560_1440_24fps.mp4";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div>
        <Carousel showArrows={false} onClickItem={true} className="">
          <div className="relative w-full h-[230px] sm:h-[415px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover "
            >
              {/* <source className="hidden sm:block" src={BgVideoMobile}  type="video/mp4" /> */}
              <source
                className="block sm:hidden "
                src={BgVideoPC}
                type="video/mp4"
              />
              {/* Add additional <source> tags for other video formats if needed */}
              Your browser does not support the video tag.
              <track kind="captions" src="your-captions.vtt" label="English" />
            </video>

            <div className="absolute inset-0 flex justify-end items-center">
              <div className="font-serif flex flex-col items-center mx-auto my-auto text-white">
                <button className="bg-green-700 text-white rounded-[18px] px-4 sm:px-5 py-3 md:mt-[250px] lg:mt-[350px] mt-20 sm:mt-60 sm:text-lg text-sm tracking-[0.081em] transition-transform duration-300 hover:scale-105">
                  <Link to="/about-us"> Contact Us</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[230px] sm:h-[415px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover "
            >
              {/* <source className="hidden sm:block" src={BgVideoMobile}  type="video/mp4" /> */}
              <source
                className="block sm:hidden "
                src={BgVideoPC}
                type="video/mp4"
              />
              {/* Add additional <source> tags for other video formats if needed */}
              Your browser does not support the video tag.
              <track kind="captions" src="your-captions.vtt" label="English" />
            </video>

            <div className="absolute inset-0 flex justify-end items-center">
              <div className="font-serif flex flex-col items-center mx-auto my-auto text-white">
                <button className="bg-green-700 text-white rounded-[18px] px-4 sm:px-5 py-3 md:mt-[250px] lg:mt-[350px] mt-20 sm:mt-60 sm:text-lg text-sm tracking-[0.081em] transition-transform duration-300 hover:scale-105">
                  <Link to="/about-us"> Contact US</Link>
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="font-serif text-center p-4">
        <h1 className=" mt-4 text-white text-2xl lg:text-4xl font-bold">
          Welcome to{" "}
          <span className="text-[#3A 5F0B] text-green-700 ">Triogen</span>
        </h1>
        <h5 className="text-lg md:text-xl lg:text-2xl mt-2 text-white font-semibold">
          {" "}
          Leading Manufacturer & Exporter of 100%{" "}
          <br className="hidden md:block" />
          Natural and Organic Coco Peat and Coir Products
        </h5>
      </div>
    </>
  );
};

export default Header;
