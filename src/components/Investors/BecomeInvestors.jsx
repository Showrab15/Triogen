const BecomeInvestors = () => {
  return (
    <div className="grid  grid-cols-2 lg:grid-cols-3 gap-18 mt-20 bg-green-700 p-10 rounded-md">
      <div>
        <h3 className="text-xl sm:2xl lg:text-4xl font-bold text-white">
          Become An <br /> Investors
        </h3>
      </div>
      <div>
        <h2 className="text-base sm:text-xl lg:text-2xl  font-bold text-white">
          {" "}
          Contact Us
        </h2>
        <h4 className="text-white text-xs sm:text-base lg:text-lg font-medium opacity-45 ">
          triogeninternational@gmail.com
        </h4>
        <h4 className="text-white text-xs sm:text-base lg:text-lg font-medium opacity-45">
          +91 94433 33122 <span className="mx-2">|</span> +971 54 265 3665
        </h4>
        <h4 className="text-white text-lg font-medium  opacity-45"></h4>
      </div>
      <div className="mt-10 flex items-center">
        <input
          name="user_email"
          type="text"
          className="border py-2 focus:outline-[#275998]    pl-[14px]"
          placeholder="Email-ID"
        />
        <input
          type="submit"
          value="Send"
          className=" px-4  text-black bg-[#f4e5c2]  font-medium py-[9px] cursor-pointer"
        />
      </div>{" "}
    </div>
  );
};

export default BecomeInvestors;
