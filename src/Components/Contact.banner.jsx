import React from 'react'
import bannerimg from '../assets/img/breadcrumb-bg.jpg'
import Content from './Content'
const Contactbanner = () => {
  return (
   <>
   <div className="main-banner w-full   " >
   
   <div
          className="relative bg-cover bg-center h-96 md:h-[500px] w-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${"https://t4.ftcdn.net/jpg/05/04/78/25/360_F_504782581_LHwsDbXlrFiiadWC4i15yV2lhbJnB8g0.jpg"})`
          }}
        >
                    <div className="absolute inset-0 bg-black opacity-50"></div>

       
<div className=" relative content text-center py-28 " >
<Content    
title = "Get in Touch with Us - Fitness!!"
description="Have a question or need assistance? Our team is ready to support you. Reach out via the form below, email, or phone. We look forward to connecting with you."
button = "Contact us"
></Content>
</div>


    </div>
    
   </div>
</>
  )}
export default Contactbanner 
