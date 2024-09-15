import europeFlag from "../../assets/europe.png";
import malaysiaFlag from "../../assets/malaysia.png";
import AFGFlag from "../../assets/Afganisthan.png";
import chinaFlag from "../../assets/china.png";
import GermanyFlag from "../../assets/Germany.png";
import INDFlag from "../../assets/INDIA.png";
import singaporeFlag from "../../assets/singapore.png";
import USAFlag from "../../assets/USA.png";
import UAEFlag from "../../assets/UAE.png";
import spainFlag from "../../assets/spain.png";
import southCoreaFlag from "../../assets/south korea .png";
import SAFlag from "../../assets/south africa.png";

import "./Countries.css";
const Countires = () => {
  const clientLogos = [
    { src: europeFlag, alt: "europeFlag" },
    { src: malaysiaFlag, alt: "malaysiaFlag" },
    { src: AFGFlag, alt: "AFGFlag" },
    { src: chinaFlag, alt: "chinaFlag" },
    { src: GermanyFlag, alt: "GermanyFlag" },
    { src: INDFlag, alt: "INDFlag" },
    { src: singaporeFlag, alt: "singaporeFlag" },
    { src: USAFlag, alt: "USAFlag" },
    { src: UAEFlag, alt: "UAEFlag" },
    { src: spainFlag, alt: "spainFlag" },
    { src: southCoreaFlag, alt: "southCoreaFlag" },
    { src: SAFlag, alt: "SAFlag" },
  ];

  return (
    <div className="relative overflow-hidden w-full ">
      <h1 className="text-4xl font-bold text-center py-8">Our Investors</h1>

      <div className="scrolling-wrapper flex items-center">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="mx-1 cursor-pointer"
            style={{ marginRight: "5px" }} // 5px gap between images
          />
        ))}
        {clientLogos.map((logo, index) => (
          <img
            key={`${index}-clone`}
            src={logo.src}
            alt={logo.alt}
            className="mx-1 cursor-pointer"
            style={{ marginRight: "5px" }} // 5px gap between images
          />
        ))}
      </div>
    </div>
  );
};

export default Countires;
