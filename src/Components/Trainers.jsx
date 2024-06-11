import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trainerimg from '../assets/img/team/team-2.jpg';
import trainerimg2 from '../assets/img/team/team-1.jpg';
import trainerimg3 from '../assets/img/team/team-3.jpg';
import trainerimg4 from '../assets/img/team/team-4.jpg';
import trainerimg5 from '../assets/img/team/team-5.jpg';
import trainerimg6 from '../assets/img/team/team-6.jpg';
import '/Trainers.css'; // Make sure to import the CSS file

const Trainers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div className="main-trainers px-5  md:px-20 mt-24 mb-10 ">
      <div className="trainers flex items-center justify-between">
        <div className="right-text text-center  md:text-none px-16 md:px-0 ">
          <h1 className="text text-3xl  text-yellow-800 font-[800] font-['Kanit']">OUR TEAM</h1>
          <p className="textdes text-xl text-black font-['Merriweather'] my-2">TRAIN WITH EXPERTS</p>
        </div>
        <div className="lefttext">
          <button className='uppercase hidden md:block bg-yellow-800 py-2 px-3 text-white rounded font-["Kanit"]'>Appointment</button>
        </div>
      </div>
      <div className="image-container mt-8">
        <Slider {...settings}>
          <div className="trainer-slide px-2 outline-none ">
            <img src={trainerimg} alt="Trainer 1" className="trainer-image w-full h-auto rounded-xl" />
            <div className="trainer-info">
              <h1 className=' text-sm md:text-2xl font-["Kanit"] font-[800] ' >John</h1>
              <h4 className='text-sm md:text-xl font-serif text-white ' >Gym trainer</h4>
            </div>
          </div>
          <div className="trainer-slide px-2">
            <img src={trainerimg2} alt="Trainer 2" className="trainer-image w-full h-auto rounded-xl" />
            <div className="trainer-info">
              <h1 className='text-sm md:text-2xl font-["Kanit"] font-[800] ' >John</h1>
              <h4 className=' text-sm md:text-xl font-serif text-white ' >Gym trainer</h4>
            </div>
          </div>
          <div className="trainer-slide px-2">
            <img src={trainerimg3} alt="Trainer 3" className="trainer-image w-full h-auto rounded-xl" />
            <div className="trainer-info">
              <h1 className=' text-sm md:text-2xl font-["Kanit"] font-[800] ' >John</h1>
              <h4 className=' text-sm md:text-xl font-serif text-white ' >Gym trainer</h4>
            </div>
          </div>
          <div className="trainer-slide px-2">
            <img src={trainerimg4} alt="Trainer 4" className="trainer-image w-full h-auto rounded-xl" />
            <div className="trainer-info">
              <h1 className='text-sm md:text-2xl font-["Kanit"] font-[800] ' >John</h1>
              <h4 className='text-sm md:text-xl font-serif text-white ' >Gym trainer</h4>
            </div>
          </div>
          <div className="trainer-slide px-2">
            <img src={trainerimg5} alt="Trainer 5" className="trainer-image w-full h-auto rounded-xl" />
            <div className="trainer-info">
              <h1 className='text-sm md:text-2xl font-["Kanit"] font-[800] ' >John</h1>
              <h4 className='text-sm md:text-xl font-serif text-white ' >Gym trainer</h4>
            </div>
          </div>
          <div className="trainer-slide px-2">
            <img src={trainerimg6} alt="Trainer 6" className="trainer-image w-full h-auto rounded-xl" />
             <div className="trainer-info">
              <h1 className='text-sm md:text-2xl font-["Kanit"] font-[800] ' >John</h1>
              <h4 className='text-sm md:text-xl font-serif text-white ' >Gym trainer</h4>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Trainers;
