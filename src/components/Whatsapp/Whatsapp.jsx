import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles

import "./Whatsapp.css";
const Whatsapp = () => {
  const whatsappNumber = "+971542653665"; // Your WhatsApp number (no `+`)
  const defaultMessage =
    "Hello.. I’m looking for coir products and came across your company. Could you share details on your range, including specs, pricing, availability and shipping options? Thanks!"; // Default message

  return (
      <div className="wpicon-animation   text-[15px] font-medium font-serif cursor-pointer 
      fixed right-[20px] bottom-[70px] md:bottom-[25px] md:right-[80px] rounded-md flex
       gap-3 justify-center items-center p-2 ">
          <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            defaultMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <i
            className="text-[#23b466] fab fa-whatsapp fa-3x"
          ></i>{" "}
          {/* Font Awesome WhatsApp icon */} </a>  
        {/* WhatsApp Icon */}
        {/* <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            defaultMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <i
            className=" wpicon-animation font-serif cursor-pointer 
      fixed right-[40px] bottom-[100px] md:bottom-[50px] md:right-[40px] rounded-full flex
       gap-3 justify-center items-center text-[15px] p-3 bg-[##23b 466] text-[#23b466] fab fa-whatsapp fa-3x"
          ></i>{" "}
          {/* Font Awesome WhatsApp icon */}
        {/* </a>  */}

      </div>
  );
};

export default Whatsapp;
