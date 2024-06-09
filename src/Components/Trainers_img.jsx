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
   
    <div className="trainers-gallery grid grid-cols-1 md:grid-cols-3 px-10 md:px-40 gap-10 my-16 ">
      <img src={traners1} alt="" className='rounded-xl  ' />
      <img src={traners2} alt="" className='rounded-xl' />
      <img src={traners3} alt="" className='rounded-xl' />
      <img src={traners4} alt="" className='rounded-xl' />
      <img src={traners5} alt="" className='rounded-xl' />
      <img src={traners6} alt="" />
    </div>
</>
  )}



export default Trainers_img