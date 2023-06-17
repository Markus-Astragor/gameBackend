import React from 'react';
import { NavLink } from 'react-router-dom';

function Mainpage() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className="text-3xl font-bold bold container mx-auto px-15 max-w-screen-sm text-center">
        Welcome to the game
      </div>
      <div className='space-x-4'>
        <span className='font-bold hover:text-sky-500 transition ease-in-out duration-700'><NavLink to='/login'>Login</NavLink></span>
        <span className='font-bold hover:text-sky-500 transition ease-in-out duration-700'><NavLink to='/register'>Register</NavLink></span>
      </div>
    </div>

  )
}

export default Mainpage
