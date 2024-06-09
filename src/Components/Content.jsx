import React from 'react'

const Content = ({title , description , button}) => {
  return (
   <div className="main-content inline-block    ">
<h1  className='md:text-4xl text-md text-white font-["Kanit"] font-[800] mb-2 ' >{title}</h1>
<p className='  text-[11px] md:text-[16px] capitalize  text-white font-serif font-[600] w-[300px] px-10 md:px-0 text-start md:w-[500px] ' >{description}</p>
<button className='bg-yellow-800 text-white py-2 px-4  text-md rounded-md font-["Kanit"] my-6 ' >{button}</button>
   </div>
  )
}

export default Content
