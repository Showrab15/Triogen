
const ComingSoon = () => {
    return (
        <div className="h-screen bg-green-100 flex items-center justify-center flex-col">
        <h1 className="  text-4xl md:text-6xl font-bold text-green-800 animate-bounce">Coming Soon</h1>
        <p className="text-xl text-center text-green-700 mt-4">Triogen Export is growing. <br className="md:hidden " /> Stay tuned!</p>
  
        <div className="mt-10">
          <svg
            className="w-20 h-20 text-green-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
  
        <p className="text-md text-green-600 mt-4">We’ll be ready to launch soon!</p>
      </div>
    );
};

export default ComingSoon;