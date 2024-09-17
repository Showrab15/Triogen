import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import client1 from "../../assets/client1.jpeg";
import client2 from "../../assets/client2.jpeg";
import client3 from "../../assets/client3.avif";
import client4 from "../../assets/client4.jpeg";
import client5 from "../../assets/client5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Testimonial.css'
const Testimonial = () => {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A5F0B] mb-8">
          Associated with Pioneers
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Trusted by industry leaders in the USA, UAE, and 14+ countries across
          the globe.
        </p>

        {/* Testimonials Grid */}
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper testimonialSwiper "
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8  gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6 ">
                <div className="mb-4">
                  <img
                    className="mx-auto w-24 h-24 rounded-full border-2 border-[#3A5F0B]"
                    src={client1}
                    alt="Client UAE"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">
                  Faizal, UAE
                </h3>
                <p className="text-gray-600">
                  {` "Triogen's expertise and quality have significantly improved
              our agricultural output. Their service is unmatched in the UAE
              market."`}
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white md:hidden lg:block shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <img
                    className="mx-auto w-24 h-24 rounded-full border-2 border-[#3A5F0B]"
                    src={client2}
                    alt="Client UAE"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">
                  Edward, USA
                </h3>
                <p className="text-gray-600">
                  {` "Triogen Coco Peat Exports have exceeded our expectations! The
                  quality is consistently excellent, with perfect moisture
                  retention for our crops. Reliable service and premium
                  product—highly recommended!"`}
                </p>
              </div>
              {/* Testimonial 3 */}

              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <img
                    className="mx-auto w-24 h-24 rounded-full border-2 border-[#3A5F0B]"
                    src={client3}
                    alt="Client AFG"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">
                  Mostofa, AFG
                </h3>
                <p className="text-gray-600">
                  {`"Triogen Cocopeat has revolutionized our export business! The high-quality cocopeat ensures superior plant growth and reliable delivery. We've seen remarkable results and satisfied clients all around the globe!"  
`}
                </p>
              </div>

              {/* Testimonial 4 */}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
              {/* Testimonial 1 */}
         

              {/* Testimonial 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <img
                    className="mx-auto w-24 h-24 rounded-full border-2 border-[#3A5F0B]"
                    src={client4}
                    alt="Client IND"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">
                  Indra, IND
                </h3>
                <p className="text-gray-600">
                  {` "Triogen Coco Peat has transformed our crop yield! The quality and consistency are unmatched,
                   making it our go-to choice for sustainable farming."`}
                </p>
              </div>
              {/* Testimonial 3 */}

              <div className="bg-white shadow-lg md:hidden lg:block rounded-lg p-6">
                <div className="mb-4">
                  <img
                    className="mx-auto w-24 h-24 rounded-full border-2 border-[#3A5F0B]"
                    src={client5}
                    alt="Client south korea"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">
                Hyun-Ae, KR
                </h3>
                <p className="text-gray-600">
                  {` "We've been sourcing cocopeat from Triogen Exports for over a year, and the quality is exceptional! Our plants thrive with better 
                  moisture retention and soil health. Reliable service and top-notch product every time!"`}
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4 ">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="5x"
                    className="mt-14 text-[#3A5F0B]"
                  />
                </div>
                <h3 className="text-3xl font-semibold text-[#3A5F0B] mb-2">
                  14+ <br /> <span>Countries</span>
                </h3>
                {/* <p className="text-gray-600">
                  {` "Triogen Cocopeat Exports has been a game-changer for our
                  business!  Their premium quality cocopeat has significantly
                  improved our plant growth and soil health. Reliable service
                  and top-notch product every time!"`}
                </p> */}
              </div>
              {/* Testimonial 4 */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
