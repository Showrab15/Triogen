import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import OurTeam from "../../components/AboutUs/OurTeam";
import AboutUsHeader from "../../components/AboutUs/AboutUsHeader";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const [isHoveringMission, setIsHoveringMission] = useState(false);
  const [isHoveringVision, setIsHoveringVision] = useState(false);

  // Animation controls to stop the floating on hover
  const missionControls = useAnimation();
  const visionControls = useAnimation();

  const floatingAnimation = {
    y: [0, -20, 0], // Floating effect (up-down movement)
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>
          About Us || Pioneering Sustainable Cocopeat Solutions - Triogen
          Exports
        </title>
        <meta
          property="og:title"
          content=" About Us || Pioneering Sustainable Cocopeat Solutions - Triogen
          Exports"
        />
        <meta
          property="og:description"
          content="At Triogen Exports, we are committed to innovating eco-friendly cocopeat solutions that foster sustainable agricultural practices. With a global presence across 14+ countries, we take pride in delivering high-quality, environmentally-conscious products.
           Learn more about our mission, values, and the vision that drives us towards a greener future"
        />
        <meta
          property="og:url"
          content="https://www.triogenexports.com/about-us"
        />
        <link rel="canonical" href="https://www.triogenexports.com/about-us" />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/Xjw2hM1/triogenblack.png"
        />
      </Helmet>
      <AboutUsHeader />
      <div className="flex lg:flex-row flex-col  justify-center items-center gap-2  lg:gap-10 p-20 relative mb-24">
        {/* Mission Circle */}
        <motion.div
          animate={!isHoveringMission ? floatingAnimation : { y: 0 }}
          onMouseEnter={() => {
            setIsHoveringMission(true);
            missionControls.start({ scale: 1 });
          }}
          onMouseLeave={() => {
            setIsHoveringMission(false);
            missionControls.start(floatingAnimation);
          }}
          className="md:right-0    relative md:w-96 md:h-96 w-72 h-72 rounded-full
           bg-green-700 hover:bg-[#f4e5c2] hover:text-green-700 bg-gradi ent-to-r fro m-green-400
            to-bl ue-500 flex justify-center items-center text-white font-bold text-2xl text-center shadow-lg cursor-pointer"
        >
          {/* Mission Text */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHoveringMission ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            Mission
          </motion.div>

          {/* Hover Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHoveringMission ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute text-center px-6"
          >
            Promoting sustainable and efficient farming practices globally
          </motion.div>
        </motion.div>

        {/* Vision Circle - Positioned Bottom Right */}
        <motion.div
          animate={!isHoveringVision ? floatingAnimation : { y: 0 }}
          onMouseEnter={() => {
            setIsHoveringVision(true);
            visionControls.start({ scale: 1 });
          }}
          onMouseLeave={() => {
            setIsHoveringVision(false);
            visionControls.start(floatingAnimation);
          }}
          className=" right-5 relative md:w-96 md:h-96 w-72 h-72  bg-[#f4e5c2] hover:bg-green-700
            hover:text-[#f4e5c2]  rounded-full  flex justify-center items-center
             text-green-700 font-bold text-2xl text-center shadow-lg cursor-pointer absolute bottom-[-150px] md:right-[-100px]"
        >
          {/* Vision Text */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHoveringVision ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            Vision
          </motion.div>

          {/* Hover Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHoveringVision ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute text-center px-6"
          >
            Innovating for a greener, sustainable future in all climates.
          </motion.div>
        </motion.div>
      </div>
      <OurTeam />
    </>
  );
};

export default AboutUs;
