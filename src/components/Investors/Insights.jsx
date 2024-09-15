import insights from "../../assets/insights.jpg";
import Riskandstragety from "../../assets/Riskandstragety.jpg";
const Insights = () => {
  return (
    <div className="p-1 0 mx-auto  md:p-0 grid lg:grid-cols-2 gap-12 mt-20">
      <header
        className="hover:bg-[#f4e5c2] hover:animate-pulse cursor-pointer sm:w-[500px]  
       gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 "
      >
        <img
          className="w-[400px] pt-8 h-[300px] mx-auto"
          src={insights}
          alt="insights"
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-800 ml-6 mt-4">
            ROI{" "}
          </h1>
          <h5 className="ml-6">
            {" "}
            Projected ROI: 2% to 3% per month (with a 6-month lock-in period)
            Returns scale with investment level.
          </h5>
        </div>
      </header>

      <header className="hover:bg-[#f4e5c2] hover:animate-pulse cursor-pointer  sm:w-[500px]   gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 ">
        <img
          className="w-[400px] pt-8 h-[300px] mx-auto"
          src={Riskandstragety}
          alt=""
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-800 ml-6 mt-4">
            Investors Insights{" "}
          </h1>
          <h5 className="ml-6">
            {" "}
             Risk Management: Zero % fully insured shipments from export to delivery.
            Investments guaranteed against any cause. Exit Strategy: Timely
            pay-out(with a minimum notice of 45 days).
          </h5>
        </div>
      </header>
    </div>
  );
};

export default Insights;
