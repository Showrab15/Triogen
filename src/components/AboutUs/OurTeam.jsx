
const OurTeam = () => {
  const cards = [
    {
      name: 'V.Karthik Prabhu',
      image: 'https://i.ibb.co.com/2PtHxRN/karthik.jpg',
      description: 'Best cocopeat for moisture retention.',
    },
    {
      name: 'S. Senthil Vendhan',
      image: 'https://i.ibb.co.com/sRSt2WN/senthil.jpg',
      description: 'High-quality cocopeat for gardening.',
    },
   
    {
      name: 'Mohammed Faizhanudin',
      image: 'https://i.ibb.co.com/pwW457N/moohmed.jpg',
      description: 'Best cocopeat for moisture retention.',
    },
  ];

  return (
   <>
   <h1 className="p-10 text-2xl sm:text-4xl lg:text-7xl font-bold text-[#f4e5c2] text-center">Our Directors</h1>
    <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-8  p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
        >
          {/* Image */}
          <div className="relative w-full h-64">

            
            <img
              src={card.image}
              alt={card.name}
              className="absolute inset-0  w-[400px] h-[400px] object-center rounded-lg transition-transform duration-500"
            />
            {/* Text Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white
             opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <p className="text-center px-4">{card.name}</p>
            </div>
          </div>
          {/* Name Section */}
          <div className="py-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">{card.name}</h3>
          </div>
        </div>
      ))}
    </div>
   </>
  );
};

export default OurTeam;
