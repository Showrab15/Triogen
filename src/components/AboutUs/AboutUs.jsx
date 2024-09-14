import aboutUsbanner from "../../assets/abt us imagge.png";
const AboutUs = () => {
  return (
    <div className="font-serif relative bg-cover bg-center  mt-10">
      <div
        className="h-[300px] md:h-[450px] absolute inset-0  opacity-80 shadow-transparent bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutUsbanner})` }}
      ></div>
      <div className="px-10  md:text-left text-center absolute inset-0  md:ml-[60px]  md:mt-[135px] mt-[30px] ">
        <h1 className="text-white text-2xl lg:text-4xl font-bold ">
          <span className="text-green-300  ">Triogen</span> Export
        </h1>
        <p className="mt-4  text-[12px] sm:text-[14px] lg:text-[18px] font-medium text-white ">
          This is one of the subsidiary companies of Coco Planet, established in{" "}
          <br className="hidden md:block" />
          the UAE by three partners: ⁠Triogen started in 2023 Mr. Karthik
          Prabhu, <br className="hidden md:block" /> Mr. Senthil Vendhan, and
          Mohammed Faizhanudin. The business mirrors{" "}
          <br className="hidden md:block" /> Coco
          {`Planet's`} focus, specializing in cocopeat products, with a
          dedicated <br className="hidden md:block" /> emphasis on the UAE
          market.
        </p>

        <button className="mt-6 bg-[#252c30] text-[#f4e5c2] font-semibold py-3 px-6 rounded-full relative group">
          For More Details
          <span className="absolute left-48 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-green-500">
            ➜
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
