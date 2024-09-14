import productBanner from "../../assets/aboutusBanner.jpg";
const AboutUsHeader = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${productBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="opacity-60 w-full font-serif text-center
         md:h-[350px] h-[200px] lg:h-[534px] 2xl:h-[510px] flex   items-center"
      >
        {" "}
       <div className="flex justify-start items-center mr-0 ml-8">
       <h3 className="text-left    text-opacity- text-[#f4e5c2] sm:text-5xl text-2xl lg:text-7xl font-bold my-auto px-2 ">
         Know More <br /> About Triogen
        </h3>
       </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
