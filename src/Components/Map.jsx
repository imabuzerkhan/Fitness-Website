import React from 'react'

const Map = () => {
  return (
   <div className="map  ">
    <h1 className='text-2xl md:text-4xl font-["Kanit"] font-[800] mb-2  ' >Our Location</h1>
    <p className='text-xl font-["Merriweather"] mb-3  ' >Find our way to easily.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1911.3914267137336!2d87.27043854498935!3d26.457763222074004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75eb1ca28cc3%3A0xdbbd9e1266f8afb2!2sNice%20biryani!5e0!3m2!1sen!2snp!4v1717988217361!5m2!1sen!2snp"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"  className=' 
       md:w-[500px] md:h-[400px] mb-10 md:mb-0 ' ></iframe>
   </div>
  )
}

export default Map
