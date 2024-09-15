import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { DotLoader } from "react-spinners";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#10a15b");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-brown-50">
          <div className="relative flex items-center justify-center">
            <DotLoader
              color={color}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />{" "}
            {/* <div className="absolute text-brown-700 font-bold text-lg mt-40 animate-pulse">
              Loading...
            </div> */}
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
          <SpeedInsights />
          <Analytics />
        </>
      )}
    </>
  );
};

export default MainLayout;
