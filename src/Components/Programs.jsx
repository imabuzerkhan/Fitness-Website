import React from 'react';
import { FaRunning, FaDumbbell,    FaBiking, FaFire, FaHeartbeat, FaPeace, FaCross, FaChild, FaCrown } from 'react-icons/fa';
import Button from './Button';

import fitnessData from '../Data/Data'; 

const iconMap = {
  
  FaRunning: <FaRunning className='mx-auto block bg-white px-2 py-1 rounded-md ' />,
  FaDumbbell: <FaDumbbell className='mx-auto block bg-white px-2 py-1 rounded-md ' />,

  FaBiking: <FaBiking className='mx-auto block bg-white px-2 py-1 rounded-md '/>,
  FaFire: <FaFire className='mx-auto block bg-white px-2 py-1 rounded-md ' />,
  FaHeartbeat: <FaHeartbeat className='mx-auto block bg-white px-2 py-1 rounded-md ' />,
  FaPeace: <FaPeace className='mx-auto block bg-white px-2 py-1 rounded-md '/>, 
  FaCross: <FaCross className='mx-auto block bg-white px-2 py-1 rounded-md ' />,
  FaChild: <FaChild className='mx-auto block bg-white px-2 py-1 rounded-md '/>
};

const Programs = () => {
  return (
    <div className="main-programs py-4 px-10 w-full mt-10 md:mt-20">
      <h1 className='font-["Kanit"] text-2xl md:text-4xl font-[800] flex items-center gap-2'>
        <FaCrown className='text-yellow-800 bg-white shadow-custom  cursor-pointer p-1 rounded-md text-3xl  md:text-4xl ' />Programs
      </h1>
      <div className="main-card grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-5 px-5 md:px-12  mt-8 items-center justify-center  ">
        {fitnessData.map(({ title, description, icon }, index) => (
          <div key={index} className="card bg-yellow-800 shadow-xl pt-4 pb-4 px-5 rounded-tr-3xl  h-auto w-64 md:w-none     ">
            <div className="icon text-4xl mb-4 text-black  my-2 cursor-pointer  ">{iconMap[icon]}</div>
            <h3 className='text-2xl font-[Kanit] text-white font-bold mt-[25px] mb-2'>{title}</h3>
            <p className='pb-4 text-white font-["Merriweather"] '>{description}</p>
            <Button></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
