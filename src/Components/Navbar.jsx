import React, { useState } from 'react';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Menutoggle } from "./Menutoggle";
import { Link, NavLink } from 'react-router-dom';
import { Links } from '/src/Data/Data.js';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <nav className='bg-white shadow-lg py-4 px-10 w-full sticky top-0 bottom-0 z-[999]'>
        <div className="main-container flex items-center justify-between">
          <div className="logo">
            <Link to='/'>
              <h3 className='text-4xl font-[800] text-yellow-800 font-["Merriweather"]'>Fitness</h3>
            </Link>
          </div>
          <ul className='hidden md:flex gap-6 text-l font-["Kanit"]'>
            {Links.map(({ name, path }, index) => (
              <li key={index}>
                <NavLink 
                  to={path} 
                  className={({ isActive }) => isActive ? 'bg-yellow-800 text-white px-2 py-2 rounded-md' : ''}
                  onClick={closeMenu} // Close menu on click
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            {!toggle ? <HiMenuAlt3 onClick={Toggle} className="text-black text-[22px]" />
              : <HiOutlineX onClick={Toggle} className="text-black text-[22px]"/>}
            {toggle ? <Menutoggle Links={Links} closeMenu={closeMenu} /> : null}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
