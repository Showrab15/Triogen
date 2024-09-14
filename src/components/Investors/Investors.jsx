import offeringBanner from "../../assets/image bg.jpg";
import businesscycle from "../../assets/businesscycle.jpg";
import Countires from "./Countires";
import Insights from "./Insights";
import BecomeInvestors from "./BecomeInvestors";
const Investors = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${offeringBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="opacity- w-full font-serif  md:h-[350px] h-[200px] lg:h-[534px] 2xl:h-[510px] flex   items-center"
      >
        <h3 className="text-left  ml-12 text-opacity- text-[#f4e5c2]  text-2xl sm:text-5xl lg:text-8xl font-bold my-auto px-2 md:px-0">
          Become An <br /> Investors
        </h3>
      </div>

      <div className="min-h-screen  py-10 p-6 md:px-20">
        {/* Header Section */}
        <header className="bg-[#f4e5c2] flex lg:flex-row flex-col gap-4 items-center shadow-md rounded-lg 
        p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white">
          <div>
            <h1 className="text-3xl py-2 font-bold text-gray-800 hover:text-white">
              Business Cycle{" "}
            </h1>
            <img className="w-[1900px] h-[300px]" src={businesscycle} alt="" />
          </div>
          <div>
            The business cycle starts with customer acquisition, followed by
            order confirmation to finalize details. The company then purchases
            blocks and proceeds with packing and loading for shipment. During
            transport, goods are sent to the customer, with all necessary
            documentation prepared. Upon arrival, the customer receives the
            goods and inspects them, while post-sale support ensures ongoing
            satisfaction.
          </div>
        </header>

        {/* Main Content Section */}
        <main>
          {/* Large Content Box */}
          <Countires />
          <Insights />
          {/* Three Small Content Boxes */}
          <BecomeInvestors />
        </main>
      </div>

    </div>
  );
};

export default Investors;
