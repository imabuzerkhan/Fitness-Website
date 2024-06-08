import React from 'react';
import bannerimg from '../assets/img/gallery/gallery-6.jpg';

const RegistrationBanner = () => {
  return (
    <div
      className="main-banner bg-cover bg-center h-80 md:h-screen "
      style={{ backgroundImage: `url(${bannerimg})` }}
    >
<div className="main-banner bg-black bg-opacity-65 h-80 md:h-screen " >
      <div className="content text-center flex items-center justify-center flex-col py-5  md:py-52 px-5 md:px-0  ">
      <h1 className='text-white text-sm md:text-4xl font-[800] font-sans mt-10 mb-4 '>REGISTRATION NOW TO GET MORE DEALS</h1>
      <p className='text-white text-2xl  mb-10 font-["Merriweather"] ' >WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
      <button  className='border-[3px] border-yellow-800 text-3xl py-2 px-4 text-white font-["Merriweather"] uppercase ' > Appoinment</button>
    </div>
    </div>
    </div>
  );
}

export default RegistrationBanner;

