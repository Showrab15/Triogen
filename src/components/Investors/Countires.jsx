

// import clientLogo1 from "../../assets/UAEFLAG.png";
// import clientLogo2 from "../../assets/USA2.png";
// import clientLogo3 from "../../assets/INDFLAG.png";
// import clientLogo4 from "../../assets/AFGFLAG.png";

// import Marquee from "react-fast-marquee";

// const Countires = () => {
//   return (
//     <>

//       <div
//         className=" mt-20 "
//       >
//        <h1 className="text-4xl font-bold text-center py-8">Our Investors</h1>
//         <div

//           className="py-2 grid grid-cols-1 lg:grid-cols-1  "
//         >


//           <Marquee speed={40}
//             autoFill={false}

//           >
//             <img style={{ marginRight: '20px' }} className="mx-auto  cursor-pointer" src={clientLogo1} alt="myna" />
//             <img style={{ marginRight: '20px' }} className="mx-auto  cursor-pointer" src={clientLogo2} alt="chatfint" />
//             <img style={{ marginRight: '20px' }} className="mx-auto cursor-pointer" src={clientLogo3} alt="chatfint" />
//             <img style={{ marginRight: '20px' }} className="mx-auto cursor-pointer" src={clientLogo4} alt="chatfint" />
           
//           </Marquee>
//         </div>
//       </div>

//     </>

//   );
// };

// export default Countires;


 import europeFlag from "../../assets/europe.png"
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


import './Countries.css'
const Countires = () => {
  const clientLogos = [
    { src: europeFlag, alt: 'myna' },
    { src: malaysiaFlag, alt: 'chatfint' },
    { src: AFGFlag, alt: 'chatfint' },
    { src: chinaFlag, alt: 'chatfint' },
    { src: GermanyFlag, alt: 'chatfint' },
    { src: INDFlag, alt: 'chatfint' },
    { src: singaporeFlag, alt: 'chatfint' },
    { src: USAFlag, alt: 'chatfint' },
    { src: UAEFlag, alt: 'chatfint' },
    { src: spainFlag, alt: 'chatfint' },
    { src: southCoreaFlag, alt: 'chatfint' },
    { src: SAFlag, alt: 'chatfint' },
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
            style={{ marginRight: '5px' }} // 5px gap between images
          />
        ))}
        {clientLogos.map((logo, index) => (
          <img
            key={`${index}-clone`}
            src={logo.src}
            alt={logo.alt}
            className="mx-1 cursor-pointer"
            style={{ marginRight: '5px' }} // 5px gap between images
          />
        ))}
      </div>
    </div>
  );
};

export default Countires;
