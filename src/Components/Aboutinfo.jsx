import React from 'react'
import aboubanner from '../assets/img/about-us.jpg'
const Aboutinfo = () => {
  return (
    <>
    <div className="main-about w-full my-10  md:my-20 px-20  ">
      <div className="heading text-center text-xl text-yellow-800 font-['Kanit] mb-5 md:mb-10 "><span className='font-bold text-4xl ' >About us </span>
      <p className='text-black font-[500] text-sm font-serif '  >Transform Your Life with Us</p>
      </div>
      <div className="aboutifo grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20 px:10 md:px-28 ">
        <div className="left">
          <img src={aboubanner} alt=""  className=' rounded-2xl w-full ' />
        </div>
        <div className="right  ">
          <h1 className='text-bold text-yellow-800 text-sm md:text-xl font-[800] mb-4  ' >Join Our Community for Transformative Fitness Journey.</h1>
          <p className='text-gray-800 font-serif   text-[11px] md:text-[17px] ' >At Fitness Gym, we are dedicated to helping you transform your life through fitness. Our passionate team of experts is committed to providing personalized guidance, innovative training programs, and a welcoming environment. Whether you're new to fitness or an experienced athlete, our state-of-the-art facilities and supportive community are here to inspire and motivate you every step of the way. Discover the difference at Fitness Gym and take the first step towards a healthier, happier you.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutinfo
