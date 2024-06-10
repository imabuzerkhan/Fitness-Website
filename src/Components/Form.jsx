import React from 'react'

const Form = () => {
  return (
  <>
  
  
  <div className="main-form w-full max-w-[545px] bg-yellow-800 rounded-xl h-auto py-5 px-3 ">
    <form action="">
      <div className="form-container grid grid-cols-1 md:grid-cols-2  gap-3 mb-2 ">
        <label htmlFor="Firstname" className='font-["Kanit"] font-[800] text-white text-2xl ' >Firstname
        <input type="text" 
        className='w-full mt-3 outline-none rounded-md  text-black px-2 '
        />
        </label>
        <label htmlFor="Lastname" className='font-["Kanit"] font-[800] text-white text-2xl ' >Lastname
        <input type="text" name="" id="" 
        className='w-full mt-3 outline-none rounded-md  text-black px-2 '
        /> </label>

<label htmlFor="Phonenumber" className='font-["Kanit"] font-[800] text-white text-2xl ' >Phone Number
      <input type="number" 
      className='w-full mb-2 mt-3 outline-none rounded-md  text-black px-2 '
      />
      </label>
      <label htmlFor="Address"  className='font-["Kanit"] font-[800] text-white text-2xl ' >Address
      <input type="text" 
      className='w-full mb-2 mt-3 outline-none rounded-md  text-black px-2 '
      />
      </label>

      </div>
      <label htmlFor="Email"  className='font-["Kanit"] font-[800] text-white text-2xl ' >Email 
      <input type="text" placeholder='Enter your mail'
      className='w-full mb-3 mt-3 outline-none rounded-md text-md text-black px-2 '
      />
      
      </label>

      <label htmlFor="Message us"  className='font-["Kanit"] font-[800] text-white text-2xl '  >Message us</label>
   <textarea name="Message" id="Message  " className='w-full h-24 mt-3 px-2 py-1 outline-none rounded-md  text-black  ' placeholder='Write your message here'></textarea>
   
     
    
      
    </form>
    </div>
    </>
  )
}

export default Form
