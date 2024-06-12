import React from 'react'
import Galleryimg1 from '../assets/img/gallery/gallery-1.jpg'
import Galleryimg6 from '../assets/img/gallery/gallery-6.jpg'
import Galleryimg7 from '../assets/img/gallery/gallery-7.jpg'
import Galleryimg2 from '../assets/img/gallery/gallery-2.jpg'
import Galleryimg3 from '../assets/img/gallery/gallery-3.jpg'
import Galleryimg4 from '../assets/img/gallery/gallery-4.jpg'
import Galleryimg5 from '../assets/img/gallery/gallery-5.jpg'


const Galleyimg = () => {
  return (
    <>
    <div className="main-gallery my-10 md:my-20 px-10 md:px-28 ">
      <div className="text text-center ">
        <h1 className='text-2xl md:text-4xl text-yellow-800 font-["Kanit"] font-[800] ' >In Focus</h1>
        <p className='mb-8 text-black text-sm  font-serif md:text-xl   ' >Experience the world in sharp, vibrant detail with 'In Focus.</p>
      </div>
      <div className="gallery-img grid grid-cols-1  md:grid-cols-3  gap-10  ">
        
      <img src={Galleryimg1} alt="" className='rounded-xl' /> 
      <img src={Galleryimg6} alt=""  className='rounded-xl' />
<img src={Galleryimg7} alt="" className='rounded-xl ' />
<img src={Galleryimg2} alt="" className='rounded-xl sm:w-[641px]  ' />
<img src={Galleryimg3} alt="" className='rounded-xl sm:w-[641px]  ' />
<img src={Galleryimg4} alt="" className='rounded-xl sm:w-[641px]  ' />
<img src={Galleryimg5} alt="" className='rounded-xl sm:w-[641px]  ' />
<img src={Galleryimg2} alt="" className='rounded-xl sm:w-[641px]   md:w-0 ' />
<img src={Galleryimg5} alt="" className='rounded-xl sm:w-[641px]  ' />

      </div>
    </div>
    
    </>
  )
}

export default Galleyimg
