import React from 'react';

const HeroSection = () => {
  return (
    <div className="main-section  pt-14 pb-4 px-16 font-[Kanit] bg-[url('/img/hero/hero-1.jpg')]  ">
      <div className="left-section md:w-[500px] pl-7  text-center md:text-left">
        <h1 className="md:text-6xl text-[#171717] font-bold mb-4">Stay <span className='text-yellow-800'  >slim</span> and look <span className='text-yellow-800'  >great</span> forever.</h1>
        <p className="mb-6 text-start text-[15px] w-[400px] font-['Merriweather'] ">Stay slim and look great forever. Health is beauty and fitness is its key. Exercise your mind and stay fit. Give your tomorrows a better and fitter start.</p>
        <button className="px-4 py-2 bg-yellow-700 text-white rounded-md hover:bg-yellow-800">Know more</button>
      </div>
      {/* <div className="right-section md:w-1/2">
        <img
          className="  rounded-lg"
          src={hero1image}
          alt="Fitness"
        />
      </div> */}
    </div>
  );
}

export default HeroSection;
