import React from 'react';
import { NavLink } from 'react-router-dom';

export function Menutoggle({ Links, closeMenu }) {
  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-white h-80 shadow-lg transform ${Links ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <ul className="mt-10">
        {Links.map(({ name, path }, index) => (
          <li key={index} className="list-none px-10 text-black mt-5 font-['Merriweather']">
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
    </div>
  );
}
