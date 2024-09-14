import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBox, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Staticts = () => {
  // Animation controls for counting numbers
  const customersControl = useAnimation();
  const containersControl = useAnimation();
  const countriesControl = useAnimation();

  // State to hold the current value of each counter
  const [customers, setCustomers] = useState(0);
  const [containers, setContainers] = useState(0);
  const [countries, setCountries] = useState(0);

  // Start counting on mount
  useEffect(() => {
    customersControl.start({
      number: 100,
      transition: { duration: 2, ease: "easeOut" },
    });
    containersControl.start({
      number: 3000,
      transition: { duration: 2, ease: "easeOut" },
    });
    countriesControl.start({
      number: 16,
      transition: { duration: 2, ease: "easeOut" },
    });

    // Counting logic
    const interval1 = setInterval(() => {
      setCustomers((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    const interval2 = setInterval(() => {
      setContainers((prev) => (prev < 3000 ? prev + 30 : 3000));
    }, 10);

    const interval3 = setInterval(() => {
      setCountries((prev) => (prev < 16 ? prev + 1 : 16));
    }, 125);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [customersControl, containersControl, countriesControl]);

  return (
    <div className="bg-white w-full  mt-[340px] md:mt-[490px] p-10">
      
      <div className=" grid lg:grid-cols-4 items-center grid-cols-2 gap-8">
        {" "}
        <div>
          <h1 className=" text-4xl text-center font-bold text-green-700 my-8">
            Our Global Presence
          </h1>
        </div>
        {/* Customers */}
        <div className="cursor-pointer  p-4 bg  text-[#3A5F0B]  transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <FontAwesomeIcon
            icon={faUsers}
            size="2x"
            className="mb-4 items-center flex justify-center mx-auto text-[#3A5F0B]"
          />
          <motion.h3
            initial={{ number: 0 }}
            animate={customersControl}
            className="text-5xl font-bold mb-2 flex justify-center mx-auto"
          >
            {customers}+
          </motion.h3>
          <p className="text-lg items-center flex justify-center mx-auto">Customers</p>
        </div>
        {/* Containers */}
        <div className="cursor-pointer p-4 bg [# 3A5F0B] text-[#3A5F0B]  transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <FontAwesomeIcon
            icon={faBox}
            size="2x"
            className="mb-4 flex justify-center mx-auto text-[#3A5F0B]"
          />
          <motion.h3
            initial={{ number: 0 }}
            animate={containersControl}
            className="text-5xl flex justify-center mx-auto  text-center font-bold mb-2"
          >
            {containers}+
          </motion.h3>
          <p className="text-lg flex justify-center  text-center mx-auto">Containers Supplied</p>
        </div>
        {/* Countries */}
        <div className="cursor-pointer p-4 bg [# 3A5F0B] text-[#3A5F0B]  transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <FontAwesomeIcon
            icon={faGlobe}
            size="2x"
            className="mb-4 flex items-center justify-center mx-auto text-[#3A5F0B]"
          />
          <motion.h3
            initial={{ number: 0 }}
            animate={countriesControl}
            className="text-5xl  text-center flex justify-center mx-auto font-bold mb-2"
          >
            {countries}+
          </motion.h3>
          <p className="text-lg text-center flex items-center justify-center mx-auto">Countries Served</p>
        </div>
      </div>
    </div>
  );
};

export default Staticts;
