import React from 'react'
import bannerimg from '../assets/img/breadcrumb-bg.jpg'
import Content from './Content'
const Gallerybanner = () => {
  return (
   <>
   <div className="main-banner w-full   " >
   
   <div
          className="relative bg-cover bg-center h-96 md:h-[500px] w-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${bannerimg})`
          }}
        >
                    <div className="absolute inset-0 bg-black opacity-50"></div>

       
<div className=" relative content text-center py-28 " >
<Content    
title = "Welcome to Our Gallery Showcase"
description="Discover the beauty in every moment with our gallery of captured memories."
button = "Explore more"
></Content>
</div>


    </div>
    
   </div>
</>
  )}
export default Gallerybanner 
