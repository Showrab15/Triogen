import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routers.jsx";
import { RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <SpeedInsights />
    <Analytics />
    <div
      style={{ fontFamily: "Montserrat" }}
      className="overflow-x-hidden font-sw  max-w-screen-2xl mx-auto bg-gray-700 bg-[#E5D 9B6]"
    >
      <RouterProvider router={router} />
    </div>
    </HelmetProvider>
   
  </StrictMode>
);
