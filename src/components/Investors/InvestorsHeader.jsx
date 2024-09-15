import { Link } from "react-router-dom";
import offeringBanner from "../../assets/image bg.jpg";

const InvestorsHeader = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${offeringBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="opacity- w-full font-serif  md:h-[350px] h-[200px] lg:h-[534px] 2xl:h-[510px]
         flex flex-row  items-center"
    >
      <h3
        className="text-left   ml-12  text-[#f4e5c2]  text-2xl sm:text-3xl md:text-4xl
         lg:text-8xl font-bold my-auto px-2 md:px-0"
      >
        Become An <br /> Investors
      </h3>
      <button
        className="lg:-ml-[550px] sm:-ml-[180px] md:-ml-[200px] -ml-[150px]  lg:mt-[270px]
         md:mt-[160px] sm:mt-[130px] mt-[110px] 
         bg-green-700 text-white  rounded-[18px] px-3 py-3 
         sm:text-md text-xs md:text-md lg:text-xl font-semibold tracking-[0.081em] transition-transform duration-300 hover:scale-105"
      >
        <Link to="/investors"> Become An Investors</Link>
      </button>
    </div>
  );
};

export default InvestorsHeader;
