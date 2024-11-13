import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-blue-600 text-white py-4'>
      <nav className='container mx-auto flex justify-around items-center'>
        <div className='text-lg font-semibold'>
          <NavLink to='/' className='hover:text-blue-300'>
            Book's Store
          </NavLink>
        </div>

        <ul className='flex space-x-6'>
          <li>
            <NavLink
              to='/'
              className='hover:text-blue-300 transition duration-300'
              activeClassName='text-blue-300'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/add'
              className='hover:text-blue-300 transition duration-300'
              activeClassName='text-blue-300'
            >
              Add Books
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
