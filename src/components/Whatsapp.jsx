import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles
import './whatsapp.css'
const Whatsapp = () => {
  const whatsappNumber = "+971542653665"; // Your WhatsApp number (no `+`)
  const defaultMessage =
    "Hello, I'm interested in learning more about your cocopeat products. Can you provide details on pricing, availability, and shipping options?"; // Default message

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* WhatsApp Icon */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            defaultMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <i className=" wpicon-animation font-serif cursor-pointer 
      fixed right-[40px] bottom-[20px] md:bottom-[50px] md:right-[40px] rounded-full flex
       gap-3 justify-center items-center text-[15px] p-3 bg-[##23b 466] text-[#23b466] fab fa-whatsapp fa-3x"></i>{" "}
          {/* Font Awesome WhatsApp icon */}
        
        </a>
      </div>
    </footer>
  );
};

export default Whatsapp;
