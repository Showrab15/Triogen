import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";
 import "swiper/css/pagination";
 import "swiper/css/navigation";
 import { Pagination, Navigation } from "swiper/modules";

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

    <div className="grid grid-cols-1 md:grid-cols-3 p-8  gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <img
                className="mx-auto w-16 h-16 rounded-full border-2 border-[#3A5F0B]"
                src="https://via.placeholder.com/150"
                alt="Client UAE"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">UAE</h3>
            <p className="text-gray-600">
             {` "Triogen's expertise and quality have significantly improved
              our agricultural output. Their service is unmatched in the UAE
              market."`}
            </p>
          </div>
        

         


          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <img
                className="mx-auto w-16 h-16 rounded-full border-2 border-[#3A5F0B]"
                src="https://via.placeholder.com/150"
                alt="Client UAE"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">UAE</h3>
            <p className="text-gray-600">
             {` "Triogen's expertise and quality have significantly improved
              our agricultural output. Their service is unmatched in the UAE
              market."`}
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <FontAwesomeIcon
                icon={faGlobe}
                size="3x"
                className="mb-4 text-[#3A5F0B]"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">
              14+ Countries
            </h3>
            <p className="text-gray-600">
             {` "We operate across 14+ countries, and Triogen's products have
              consistently met our global standards. A reliable partner in every
              region."`}
            </p>
          </div>

        </div>
        </SwiperSlide>
      </Swiper>
      
      </div>
    </section>
  );
};

export default Testimonial;




// import "./Testimonial.css";
// import person1 from "../../assets/person1.png";

// import star from "../../assets/download.svg";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";

// const Testimonial = () => {



//   return (
//     <div className="mt-6 mx-auto">

//       <div className="   bg-[#fff] mx-auto">
//         <h3 className="text-[#050038] md:text-[25px] lg:text-[30px] text-[15px] text-center pt-8 font-bold font-serif  leading-[30px] md:leading-[56px]    ">
//           <span className="text-[#3595FC] ">Discover</span> the experiences of our valued clients{" "}
//           <br className="lg:block hidden" /> through their  <span className="text-[#3595FC] ">testimonials</span>
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto justify-center" >
//           <Swiper
//             slidesPerView={1}
//             loop={true}
//             pagination={{
//               clickable: true,
//             }}
//             navigation={true}
//             modules={[Pagination, Navigation]}
//             className="mySwiper testimonialSwiper mx-auto gird grid-cols-3"
//           >

//             <SwiperSlide>
//             <div className="bg-white shadow-lg rounded-lg p-6 mx-auto">
//              <div className="mb-4">
//                <img
//                  className="mx-auto w-16 h-16 rounded-full border-2 border-[#3A5F0B]"
//                  src="https://via.placeholder.com/150"
//                  alt="Client UAE"
//                />
//              </div>
//              <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">UAE</h3>
//              <p className="text-gray-600">
//               {` "Triogen's expertise and quality have significantly improved
//                our agricultural output. Their service is unmatched in the UAE
//                market."`}
//              </p>
//            </div>


//             </SwiperSlide>

//             {/* second slider */}
//             <SwiperSlide>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//              <div className="mb-4">
//                <img
//                  className="mx-auto w-16 h-16 rounded-full border-2 border-[#3A5F0B]"
//                  src="https://via.placeholder.com/150"
//                  alt="Client UAE"
//                />
//              </div>
//              <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">UAE</h3>
//              <p className="text-gray-600">
//               {` "Triogen's expertise and quality have significantly improved
//                our agricultural output. Their service is unmatched in the UAE
//                market."`}
//              </p>
//            </div>
//             </SwiperSlide>

//             {/* third */}
//             <SwiperSlide>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//              <div className="mb-4">
//                <img
//                  className="mx-auto w-16 h-16 rounded-full border-2 border-[#3A5F0B]"
//                  src="https://via.placeholder.com/150"
//                  alt="Client UAE"
//                />
//              </div>
//              <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">UAE</h3>
//              <p className="text-gray-600">
//               {` "Triogen's expertise and quality have significantly improved
//                our agricultural output. Their service is unmatched in the UAE
//                market."`}
//              </p>
//            </div>
//             </SwiperSlide>

//             {/* // fourth */}
//             <SwiperSlide>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//              <div className="mb-4">
//                <img
//                  className="mx-auto w-16 h-16 rounded-full border-2 border-[#3A5F0B]"
//                  src="https://via.placeholder.com/150"
//                  alt="Client UAE"
//                />
//              </div>
//              <h3 className="text-xl font-semibold text-[#3A5F0B] mb-2">UAE</h3>
//              <p className="text-gray-600">
//               {` "Triogen's expertise and quality have significantly improved
//                our agricultural output. Their service is unmatched in the UAE
//                market."`}
//              </p>
//            </div>
//             </SwiperSlide>

       
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
