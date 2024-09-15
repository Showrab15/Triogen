import { Helmet } from "react-helmet";
import AboutUs from "../../components/AboutUs/AboutUs";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Staticts from "../../components/Staticts/Staticts";
import Testimonial from "../../components/Testimonial/Testimonial";


const MainHome = () => {
    return (
        <>
         <Helmet>
        <title>
          Triogen Exports | Innovating for a greener, sustainable future in all
          climates
        </title>
        <meta
          property="og:title"
          content="Triogen Exports | Innovating for a greener, sustainable future in all climates"
        />
        <meta
          property="og:description"
          content="Triogen is a coir manufacturing & trading company, pioneering innovative deals eco-friendly 
          coir based products to provide eco-friendly solutions and efficient agricultural practices."
        />
        <meta property="og:url" content="https://www.triogenexports.com/" />
        <link rel="canonical" href="https://www.triogenexports.com/" />
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

export default MainHome;