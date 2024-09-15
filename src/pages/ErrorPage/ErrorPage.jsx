// import { Link } from 'react-router-dom';
// import './errorpage.css'
// const ErrorPage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center gap-4 font-serif min-h-screen my-auto">
     
//       {/* You can add more content or links here */}
//       <div  className="error">

//       <p className="p">4</p>
//     <span className="dracula">      
//       <div className="con">
//         <div className="hair"></div>
//         <div className="hair-r"></div>
//         <div className="head"></div>
//         <div className="eye"></div>
//         <div className="eye eye-r"></div>
//         <div className="mouth"></div>
//         <div className="blod"></div>
//         <div className="blod blod2"></div>
//       </div>
//     </span>
//     <p className="p">4</p>
//     </div>
//     <p className="text-center font-semibold text-2xl">Oops! The page{` you're`} looking for {`doesn't`} exist.</p>
//       <Link className="text-blue-500 text-xl" to="/">GO Back to Triogen Exports</Link>
//     </div>
//   );
// };

// export default ErrorPage;


import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import errorAnimation from './animations/error404.json'; // You can use any Lottie animation

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <div className="w-80 h-80 md:w-96 md:h-96">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">404</h1>
      <p className="text-lg md:text-2xl text-green-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-lg md:text-xl bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
