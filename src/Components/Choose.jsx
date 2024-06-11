import React from 'react'
import { FaDumbbell, FaAppleAlt, FaClipboardList, FaBullseye } from 'react-icons/fa';
import { choose } from '../Data/Data';

const icons = {
  FaDumbbell: <FaDumbbell className='block mx-auto bg-yellow-800 hover:bg-black  shadow-2xl py-1 px-2 rounded-full   ' />,
  FaAppleAlt: <FaAppleAlt className='block mx-auto bg-yellow-800 hover:bg-black  shadow-2xl py-2 px-2 rounded-full   ' />,
  FaClipboardList: <FaClipboardList className='block mx-auto hover:bg-black bg-yellow-800 shadow-2xl py-2 px-2 rounded-full   ' />,
  FaBullseye: <FaBullseye className='block mx-auto hover:bg-black bg-yellow-800  shadow-2xl py-1 px-2 rounded-full   ' />,
}

const Choose = () => {
  return (
   <>
   <div className="choose w-full mt-20  md:px-22 h-auto   ">
    <h1 className='text-yellow-800 md:text-md font-bold text-center  ' >WHY CHOOSE US?</h1>
    <p className='text-black md:text-3xl text-center font-["Kanit"] font-[800] mt-2 mb-2 md:mb-4' >PUSH YOUR LIMITS FORWARD</p>
    <div className="choose-banner grid grid-cols-1 mx-20 px-2 md:px-0  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 md:my-10 gap-5  ">
      {choose.map(({title, description, icon}, index) => (
        <div className="card w-[200px] md:w-[300px] h-auto my-2 md:my-4 text-center   " key={index} >
          <div className="icon text-4xl md:text-6xl text-white mb-4 cursor-pointer ">{icons[icon]}</div>
          <h1 className=' text-md md:text-2xl font-[800] font-["Kanit"] my-2 '>{title}</h1>
          <p className='   text-sm text-center font-[600] text-gray-600  ' >{description}</p>
        </div>
      ))}
    </div>
   </div>
   </>
  )
}
export default Choose