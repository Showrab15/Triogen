import { motion } from "framer-motion";
import product1 from "../../assets/product3.jpg";
import fiberBalesProduct from "../../assets/coconut-coir-fibre-bale-2-kg-35-kg-500x500.webp";
import CoirGrowBag from "../../assets/coirgrowbagsinuse2nd.webp";
import gms from "../../assets/gms.webp";
import matweed from "../../assets/product8.jpeg";
import cocochips from "../../assets/product7.webp";
import CoirPlywood from "../../assets/coir-ply wood.jpg";
import CoirTextiles from "../../assets/Best-QUality-coit-Geo-textile-from-Sri.jpg";
import ProductHeader from "../../components/Products/ProductHeader";
import Market from "../../components/Products/Market";
const Products = () => {
  return (
    <div
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className=""
    >
      <ProductHeader />
      <div className="p-6 md:p-20">
        {/* Animation for each header */}

        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4e5c2]  flex flex-col lg:flex-row gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
        >
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Coco Coir block is a natural, eco-friendly growing medium made
            from coconut husk fibers. It expands when hydrated, improving soil
            aeration and moisture retention for healthier plants. Perfect for
            vegetables, flowers, and herbs, it promotes strong root growth while
            providing excellent drainage. Ideal for both indoor and outdoor
            gardening. Sustainable, lightweight, and easy to use!
          </div>
          <div>
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-3xl py-2 font-bold text-gray-800 hover:text-white"
            >
              Coco Coir{" "}
            </h1>
            <img
              className="w-[1900px] h-[300px]"
              src={product1}
              alt="Coco Coir Chips"
            />
          </div>
        </motion.header>

        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4e5c2]  flex flex-col lg:flex-row gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
        >
          <div className="">
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-3xl py-2 font-montserrat  font-bold text-gray-800 hover:text-white"
            >
              Coco Coir 650 GMS{" "}
            </h1>
            <img className="w-[1700px] h-[300px]" src={gms} alt="Coco Coir gms" />
          </div>
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Coco Coir block is a natural, eco-friendly growing medium made
            from coconut husk fibers. It expands when hydrated, improving soil
            aeration and moisture retention for healthier plants. Perfect for
            vegetables, flowers, and herbs, it promotes strong root growth while
            providing excellent drainage. Ideal for both indoor and outdoor
            gardening. Sustainable, lightweight, and easy to use!
          </div>
        </motion.header>

        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4e5c2] w- flex flex-col lg:flex-row gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
        >
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Coco Coir Chips are a sustainable and eco-friendly growing medium
            made from coconut husks. They provide excellent aeration, moisture
            retention, and promote healthy root growth, making them ideal for
            plants like orchids and succulents. These chips also have natural
            anti-fungal properties, reducing root diseases. Perfect for both
            indoor and outdoor use, they improve drainage while maintaining
            hydration. Long-lasting and reusable,{` they’re`} a great choice for
            organic gardening!
          </div>
          <div>
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-3xl py-2 font-bold text-gray-800 hover:text-white"
            >
              Coco Coir Chips{" "}
            </h1>
            <img
              className="w-[1500px] h-[300px]"
              src={cocochips}
              alt="Coco Coir Chips"
            />
          </div>
        </motion.header>

        {/* Repeat similar animation for other headers */}

        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4e5c2]  flex flex-col lg:flex-row gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
        >
          <div>
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-3xl py-2 font-bold text-gray-800 hover:text-white"
            >
              Coco Weed Mats{" "}
            </h1>
            <img
              className="w-[1600px] h-[300px]"
              src={matweed}
              alt="Coco Weed Mats"
            />
          </div>
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Coco Weed Mats are an eco-friendly solution to control weed growth
            in your garden! Made from 100% natural coconut fibers, these mats
            help retain moisture while suppressing unwanted weeds. They provide
            excellent aeration to the soil and are biodegradable, making them
            perfect for sustainable gardening. Easy to install and long-lasting,
            Coco Weed Mats keep your plants healthy and weed-free!
          </div>
        </motion.header>

        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4e5c2]  flex flex-col lg:flex-row gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
        >
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Coco Fibre Bales are a sustainable, eco-friendly solution for
            gardening and agriculture. Made from natural coconut husks, these
            bales provide excellent aeration and drainage for soil, promoting
            healthier root growth. They are perfect for mulching, soil
            conditioning, and erosion control. Long-lasting and biodegradable,
            coco fibre bales improve plant productivity and soil health. Ideal
            for green-thumb enthusiasts and commercial growers alike!Coco Fibre
            Bales are a sustainable, eco-friendly solution for gardening and
            agriculture. Made from natural coconut husks, these bales provide
            excellent aeration and drainage for soil, promoting healthier root
            growth. They are perfect for mulching, soil conditioning, and
            erosion control. Long-lasting and biodegradable, coco fibre bales
            improve plant productivity and soil health. Ideal for green-thumb
            enthusiasts and commercial growers alike!
          </div>
          <div>
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-3xl py-2 font-bold text-gray-800 hover:text-white"
            >
              Coco Fibre Bales{" "}
            </h1>
            <img
              className="w-[3200px] h-[300px]"
              src={fiberBalesProduct}
              alt="fiber Bales Product"
            />
          </div>
        </motion.header>

        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4e5c2]  flex flex-col lg:flex-row gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
        >
          <div>
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-3xl py-2 font-bold text-gray-800 hover:text-white"
            >
              Coir Grow Bag{" "}
            </h1>
            <img
              className="w-[1900px] h-[300px]"
              src={CoirGrowBag}
              alt="Coir Grow Bag"
            />
          </div>
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Coir Grow Bags are made from eco-friendly coconut husk fibers,
            offering a sustainable and nutrient-rich growing medium. Ideal for
            vegetables, herbs, and flowers, they ensure excellent water
            retention and aeration for healthy plant growth. Lightweight and
            easy to use, perfect for home gardening or commercial farming.
            Experience faster root development and improved yields with our
            natural, biodegradable solution!
          </div>
        </motion.header>

        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4e5c2]  flex flex-col lg:flex-row gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
        >
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Coir Plywood is a sustainable alternative to traditional plywood,
            made using natural coconut fibers and wood veneer. {`It's`} highly
            durable, resistant to termites, and moisture-resistant, making it
            perfect for both indoor and outdoor applications. Coir Plywood is
            eco-friendly, offering excellent strength and stability for
            furniture, paneling, and construction. Its unique texture adds a
            rustic charm while being an environmentally conscious choice.
          </div>
          <div>
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-3xl py-2 font-bold text-gray-800 hover:text-white"
            >
              Coir Plywood{" "}
            </h1>
            <img
              className="w-[3200px] h-[300px]"
              src={CoirPlywood}
              alt="Coir Plywood"
            />
          </div>
        </motion.header>

        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="bg-[#f4e5c2]  flex flex-col lg:flex-row gap-4 items-center shadow-md rounded-lg p-6 mb-6 mx-auto transition-colors duration-300 hover:bg-green-700 hover:text-white"
        >
          <div>
            <h1
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-3xl py-2 font-bold text-gray-800 hover:text-white"
            >
              Coir Grow Bag{" "}
            </h1>
            <img
              className="w-[1900px] h-[300px]"
              src={CoirTextiles}
              alt=" Coir Textiles "
            />
          </div>
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Coir Textiles are sustainable, eco-friendly fabrics made from
            coconut husk fibers. Known for their durability and natural
            strength, coir textiles are ideal for various applications like
            mats, rugs, geotextiles, and upholstery. They are biodegradable,
            breathable, and promote soil stabilization when used in landscaping
            projects. Perfect for those seeking eco-conscious alternatives, coir
            textiles combine functionality with sustainability.
          </div>
        </motion.header>
        {/* Add similar animation to other product headers */}
        {/* Coco Coir 650 GMS, Coco Weed Mats, Coco Fibre Bales, Coir Grow Bag */}
      </div>
      <Market />
    </div>
  );
};

export default Products;
