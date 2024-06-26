import React from 'react';
import herobanner from '../assets/img/hero/hero-2.jpg';

const HeroSection = () => {
  return (
    <div 
      className="main-section pt-14 pb-4 px-16 bg-cover w-full h-96 md:h-screen relative" 
      style={{backgroundImage: `url(${herobanner})`}}
    >
      <div className="main-banner bg-black bg-opacity-65 h-96 md:h-screen absolute top-0 left-0 w-full">
        <div className="left-section md:w-[500px] pt-24 md:pt-44 md:text-left px-10 md:px-20">
          <h1 className="md:text-4xl text-white font-bold mb-5">
            Stay <span className='text-yellow-800'>slim</span> and look <span className='text-yellow-800'>great</span> forever.
          </h1>
          <p className="mb-6 text-white text-[14px] md:text-[15px] font-['Merriweather'] md:w-[400px]">
            Stay slim and look great forever. Health is beauty and fitness is its key. Exercise your mind and stay fit. Give your tomorrows a better and fitter start.
          </p>
          <button className="px-4 py-2 bg-yellow-700 text-white rounded-md hover:bg-yellow-800">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
