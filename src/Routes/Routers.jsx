import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Products from "../pages/Products/Products";
import MainHome from "../pages/MainHome/MainHome";
import Investors from "../pages/Investors/Investors";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path : '/',
          element : <MainHome/>
        },
        {
          path : '/home',
          element : <Home/>
        },
        {
          path : '/about-us',
          element : <AboutUs/>
        },
        
        {
          path : '/investors',
          element : <Investors/>
        },
        {
          path : '/products',
          element : <Products/>
        },
      ]
    },
  ]);
  