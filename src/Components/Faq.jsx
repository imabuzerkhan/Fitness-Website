import React, { useState } from 'react'

const Faq = () => {
const [ShowData , Setshowdata] = useState(false)

const togglebtn  = ()=>{
  Setshowdata(prevstate => !prevstate)
}

  return (
    <div className="main-text max-w-[545] w-[600px] bg-blue-500 px-10 py-10 mt-20 mx-auto ">
      <h1 onClick={togglebtn} className='text-center text-3xl text-white cursor-pointer ' >Ask question</h1>
      <p className={`${ShowData ? 'block' : 'hidden'} text-center text-2xl border-t-2 border-red-400 text-white mt-4`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta porro deserunt ullam repellendus minus repudiandae! Odit corrupti fugit magni.
      </p>
    </div>
  )
}

export default Faq
