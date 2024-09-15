import { Helmet } from "react-helmet-async";
import AboutUs from "../../../components/AboutUs/AboutUs";
import Header from "../../../components/Header/Header";
import Products from "../../../components/Products/Products";
import Staticts from "../../../components/Staticts/Staticts";
import Testimonial from "../../../components/Testimonial/Testimonial";
// import ComingSoon from "../../ComingSoon";

const Home = () => {
    return (
        <>
        <Helmet prioritizeSeoTags>
        <title>
        Welcome to Triogen Exports | Explore Our Cocopeat Solutions




        </title>
        <meta
          property="og:title"
          content="Welcome to Triogen Exports | Explore Our Cocopeat Solutions"
        />
        <meta
          property="og:description"
          content="Welcome to the Triogen Exports home page. Dive into our range of sustainable cocopeat products and learn how we’re driving agricultural innovation with eco-friendly solutions. Discover
           our commitment to quality and sustainability as you explore our offerings designed for a greener future"
        />
        <meta
          property="og:url"
          content="https://www.triogenexports.com/home"
        />
        <link rel="canonical" href="https://www.triogenexports.com/home" />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/Xjw2hM1/triogenblack.png"
        />
      </Helmet>
        <Header/>
        <AboutUs/>
        <Staticts/>
        <Products/>
        <Testimonial/>
            {/* <ComingSoon/> */}
        </>
    );
};

export default Home;