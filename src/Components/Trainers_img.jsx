import React from 'react'
import traners1 from '../assets/img/team/team-1.jpg'
import traners2 from '../assets/img/team/team-2.jpg'
import traners4 from '../assets/img/team/team-4.jpg'
import traners3 from '../assets/img/team/team-3.jpg'
import traners5 from '../assets/img/team/team-5.jpg'
import traners6 from '../assets/img/team/team-6.jpg'
const Trainers_img = () => {
  return (
   <>
      <div className="text text-center mt-10 px-4 ">
        <h1 className='text-2xl md:text-4xl text-yellow-800 font-["Kanit"] font-[800] ' >In Focus</h1>
        <p className='mb-8 text-black text-sm  font-serif md:text-xl   ' >Experience the world in sharp.</p>
      </div>
    <div className="trainers-gallery grid xs:grid-cols-2  md:grid-cols-3 px-12 md:px-40 gap-10 my-10 md:my-16 ">
      <img src={traners1} alt="" className='rounded-xl  ' />
      <img src={traners2} alt="" className='rounded-xl' />
      <img src={traners3} alt="" className='rounded-xl' />
      <img src={traners4} alt="" className='rounded-xl' />
      <img src={traners5} alt="" className='rounded-xl' />
      <img src={traners6} alt="" className='rounded-xl' />
    </div>
</>
  )}



export default Trainers_img