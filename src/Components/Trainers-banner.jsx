import React from 'react'
import bannerimg from '../assets/img/breadcrumb-bg.jpg'
import traners1 from '../assets/img/team/team-1.jpg'
import traners2 from '../assets/img/team/team-2.jpg'
import traners4 from '../assets/img/team/team-4.jpg'
import traners3 from '../assets/img/team/team-3.jpg'
import traners5 from '../assets/img/team/team-5.jpg'
import traners6 from '../assets/img/team/team-6.jpg'
const Trainers_banner = () => {
  return (
   <>
   <div className="main-banner w-full   " >
   
    <div className="image  bg-cover w-full h-96 bg-no-repeat  "
    style={{backgroundImage: `url(${bannerimg})`}} > </div>
      <div className="text text-center mt-16 ">
        <h1 className='text-2xl md:text-4xl text-yellow-800 font-["Kanit"] font-[800] mb-2 ' >The Minds Behind</h1>
        <p className='mb-8 text-black text-sm  font-serif md:text-xl   ' >Introducing the creative minds behind our success.</p>
      </div>
    <div className="trainers-gallery grid grid-cols-1 md:grid-cols-3 px:10 md:px-40 gap-10 my-16 ">
      <img src={traners1} alt="" className='rounded-xl' />
      <img src={traners2} alt="" className='rounded-xl' />
      <img src={traners3} alt="" className='rounded-xl' />
      <img src={traners4} alt="" className='rounded-xl' />
      <img src={traners5} alt="" className='rounded-xl' />
      <img src={traners6} alt="" />
    </div>
   </div>
</>
  )}



export default Trainers_banner
