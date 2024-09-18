import { Link } from "react-router-dom";
import './errorpage.css'
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-center p-5">
      {/* Animated Leaf using CSS */}
      <div className="relative mb-8">
        <div className="leaf-container">
          <div className="leaf"></div>
        </div>
      </div>

      {/* Text Section */}
      <h1 className="text-green-700 font-bold text-5xl mb-4">404</h1>
      <p className="text-green-600 text-xl mb-6">
        Oops! The page{` you're`} looking for is lost in nature.
      </p>

      {/* Action Button */}
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors duration-300"
      >
        Go Back Home
      </Link>

      {/* Decorative Elements (Optional) */}
      <div className="mt-10">
        <p className="text-green-500 text-sm">
          Take a moment to enjoy the beauty of nature.
        </p>
        <div className="flex justify-center mt-2 space-x-3">
          <span className="inline-block w-10 h-10 bg-green-300 rounded-full animate-bounce"></span>
          <span className="inline-block w-8 h-8 bg-green-400 rounded-full animate-spin"></span>
          <span className="inline-block w-6 h-6 bg-green-500 rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
