import React from 'react'
import bannerimg from '../assets/img/breadcrumb-bg.jpg'
import Content from './Content'
const Gallerybanner = () => {
  return (
   <>
   <div className="main-banner w-full   " >
   
    <div className="image  bg-cover w-full h-96 bg-no-repeat  "
    style={{backgroundImage: `url(${bannerimg})`}}
    >
       
<div className="content text-center py-28 " >
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
