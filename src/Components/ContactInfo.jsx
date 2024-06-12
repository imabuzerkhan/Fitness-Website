import React from 'react'

import Form from './Form'
const ContactInfo = () => {
  return (
  <>
  <div className="main-contact-box my-10 md:my-16 px-5 w-full h-auto md:px-32 flex item-center justify-center flex-col ">
    <div className="content">
    <h1 className='text-2xl md:text-4xl font-["Kanit"] font-[800] mb-2  ' > Contact us</h1>
    <p className='text-xl font-["Merriweather"]   ' >Find our way to easily.</p>
    </div>
 
<div className="Contact-Box  mt-10   ">

<Form></Form>
  </div>
  </div>
  </>
  )
}

export default ContactInfo
