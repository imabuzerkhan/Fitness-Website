import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import Links from '../Data/Data'
const Navbar = () => {
  return (
  <>
  <nav className='bg-white shadow-lg py-4 px-10 w-full   '>
    <div className="main-container flex items-center justify-between ">
      <div className="logo">
        <Link to='/'>
        <h3 className='text-3xl font-[800] text-yellow-600 font-["Merriweather"] '>Fitness</h3>
        </Link>
      </div>
      <ul className='flex gap-6  text-l font-["Kanit"]    '>
   {
   Links.map(({name , path} , index )=>{
return(
<>
<li key={index} >
<NavLink 
  to={path} 
  className={({ isActive }) => isActive ? '  bg-yellow-500 text-white px-2 py-2 rounded-md ' : ''}>
  {name}
</NavLink>
</li>

</>
)
   })}
      </ul>
    </div>
  </nav>
  </>
  )
}

export default Navbar
