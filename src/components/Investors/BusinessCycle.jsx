import businesscycle from "../../assets/businesscycle.jpg";

const BusinessCycle = () => {
  return (
    <header
      className="bg-[#f4e5c2] flex lg:flex-row flex-col gap-4 items-center shadow-md rounded-lg 
      p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
    >
      <div>
        <h1 className="text-3xl py-2 font-bold text-gray-800 hover:text-white">
          Business Cycle{" "}
        </h1>
        <img
          className="w-[1900px] h-[300px]"
          src={businesscycle}
          alt="businesscycle"
        />
      </div>
      <div>
        The business cycle starts with customer acquisition, followed by order
        confirmation to finalize details. The company then purchases blocks and
        proceeds with packing and loading for shipment. During transport, goods
        are sent to the customer, with all necessary documentation prepared.
        Upon arrival, the customer receives the goods and inspects them, while
        post-sale support ensures ongoing satisfaction.
      </div>
    </header>
  );
};

export default BusinessCycle;
