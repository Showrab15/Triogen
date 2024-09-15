import AboutUs from "../../components/AboutUs/AboutUs";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Staticts from "../../components/Staticts/Staticts";
import Testimonial from "../../components/Testimonial/Testimonial";


const MainHome = () => {
    return (
        <>
       
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