import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/about-us',
          element : <AboutUs/>
        },
        {
          path : '/contact-us',
          element : <ContactUs/>
        }
      ]
    },
  ]);
  