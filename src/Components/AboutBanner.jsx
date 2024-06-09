import React from 'react'
import bannerimg from '../assets/img/hero/hero-1.jpg'
import Content from './Content'
const AboutBanner = () => {
  return (
   <>
   <div className="main-banner w-full   " >
   
    <div className="image bg-cover md:bg-none w-full h-96 bg-no-repeat  "
    style={{backgroundImage: `url(${bannerimg})`}}
    >
       
<div className="content text-center py-28 " >
<Content    
title = "Welcome to Our Fitness Journey"
description="Empowering you to achieve fitness goals with expert guidance, state-of-the-art facilities, and a supportive community. Join us today ."
button = "Learn more"
></Content>
</div>


    </div>
    
   </div>
   
   </>
  )
}

export default AboutBanner
