import React from 'react'
import Map from './Map'
import Form from './Form'
const ContactInfo = () => {
  return (
  <>
  <div className="main-contact-box my-10 md:my-16 px-5 w-full h-auto md:px-30 ">
  <h1 className='text-2xl md:text-4xl font-["Kanit"] font-[800] mb-2 text-center ' > Contact us</h1>
    <p className='text-xl font-["Merriweather"]  text-center ' >Find our way to easily.</p>
<div className="Contact-Box flex items-center justify-between flex-wrap mt-10 md:mt-20 px-3 md:px-32 ">
<div className="map">
  <Map></Map>
</div>
<Form></Form>
  </div>
  </div>
  </>
  )
}

export default ContactInfo
