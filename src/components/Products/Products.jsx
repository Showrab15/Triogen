import { Link } from "react-router-dom";
import "./products.css";
const Products = () => {
  return (
    <>
      <div className=" text-center  bg-[#3A5F0B]  py-24 ">
        {/* Background Text */}
        <div className="  relative text-center ">
          <h1 className="opacity-40 text-[60px] lg:text-[120px] font-bold text-gray-700 uppercase tracking-wide absolute inset-0 flex justify-center items-center z-0 select-none">
            Triogen
          </h1>

          {/* Overlay Text */}
          <h2 className="relative text-2xl lg:text-5xl font-semibold text-[#f4e5c2]  z-10">
            Our Products
          </h2>
        </div>

        <section className="mt-14 cards   px-20  mx-auto gap-10 md:gap-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* sixth box */}
          <div className="cart w-full  cursor-pointer  card--10 ">
            <div className="card__img card__img--10"></div>
            <div className="card__img--hover card__img--hover-10"></div>
            <div className="card__info">
              <h2 className="text-green-700 hover-white uppercase text-[10px] md:text-[18px] font-semibold">
                Coco Coir 5 KG{" "}
              </h2>
            </div>
          </div>

          <div className="cart w-full  cursor-pointer  card--9 ">
            <div className="card__img card__img--10"></div>
            <div className="card__img--hover card__img--hover-9"></div>
            <div className="card__info">
              <h2 className="text-green-700 hover-white uppercase text-[10px] md:text-[18px] font-semibold">
                Coco Coir Chips
              </h2>
            </div>
          </div>

       <div className="cart w-full  cursor-pointer  card--8 ">
            <div className="card__img card__img--8"></div>
            <div className="card__img--hover card__img--hover-8"></div>
            <div className="card__info">
              <h2 className="text-green-700 hover-white uppercase text-[10px] md:text-[18px] font-semibold">
                Coco Weed Mats
              </h2>
            </div>
          </div>
        </section>

        <button className="mt-6 bg-[#252c30] text-[#f4e5c2] font-semibold py-3 px-6 rounded-full relative group">
          <Link to="/products"> View More</Link>
          <span className="absolute left-48 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-green-500">
            ➜
          </span>
        </button>
      </div>
    </>
  );
};

export default Products;
