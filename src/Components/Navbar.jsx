import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import { Links} from '/src/Data/Data.js'
const Navbar = () => {
  return (
  <>
  <nav className='bg-white shadow-lg py-4 px-10 w-full sticky top-0 bottom-0   '>
    <div className="main-container flex items-center justify-between ">
      <div className="logo">
        <Link to='/'>
        <h3 className='text-4xl font-[800] text-yellow-800 font-["Merriweather"]  '>Fitness</h3>
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
  className={({ isActive }) => isActive ? '  bg-yellow-800 text-white px-2 py-2 rounded-md ' : ''}>
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
