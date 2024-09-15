import  {  useState } from 'react';
import emailjs from '@emailjs/browser';

const BecomeInvestors = () => {

  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,  // This should match the placeholder in your template
    };

    emailjs
      .send(
        "service_a3not7m",  // Replace with your service ID
        "template_xy6rz89",  // Replace with your template ID
        templateParams,
        "tYbO0EZ1XPMA3P9Od"  // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          console.log(result)
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };



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
          triogendubai@gmail.com
        </h4>
        <h4 className="text-white text-xs sm:text-base lg:text-lg font-medium opacity-45">
          +91 94433 33122 <span className="mx-2">|</span> +971 54 265 3665
        </h4>
        <h4 className="text-white text-lg font-medium  opacity-45"></h4>
      </div>

      {/* <div className="mt-10 flex items-center">
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
      </div>{" "} */}
    <div className="mt-10 flex items-center">
      <form onSubmit={sendEmail}>
        <input
          name="user_email"
          type="text"
          className="border py-2 focus:outline-[#275998] pl-[14px]"
          placeholder="Email-ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="submit"
          value="Send"
          className="px-4 text-black bg-[#f4e5c2] font-medium py-[9px] cursor-pointer"
        />
      </form>
    </div>
    </div>
  );
};

export default BecomeInvestors;
