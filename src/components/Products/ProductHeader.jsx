import productBanner from "../../assets/productsBannner.jpg";
const ProductHeader = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${productBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="opacity-6 0 w-full text-center md:h-[350px] h-[200px] lg:h-[524px] 2xl:h-[510px] flex   items-center"
      >
        {" "}
       <div className="flex justify-center items-center mx-auto">
       <h3 style={{ fontFamily: "Montserrat" }} className="text-center drop-shadow-md   text-opacity- text-[#f4e5c2] sm:text-5xl text-2xl lg:text-7xl font-bold my-auto px-2 ">
          Our Products
        </h3>
       </div>
      </div>
    </div>
  );
};

export default ProductHeader;
