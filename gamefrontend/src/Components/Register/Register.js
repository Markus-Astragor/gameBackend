import React from 'react';
import { NavLink } from 'react-router-dom';

function Register() {
  return (
       <div className='h-screen flex justify-center items-center flex-col'>
      <div className='w-1/6'>
        <h2 className='font-black text-2xl text-center'>Let's login to the game</h2>
      </div>
      <div className='w-1/6'>
        <span>UserName</span>
        <input type="text" class="bg-black-50 border border-black-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-yellow-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
      </div>
      <div className='w-1/6'>
        <span>Password</span>
        <input type="text" class="bg-black-50 border border-black-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-yellow-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
      </div>
      <div className='w-1/6'>
        <span>Repeat password</span>
        <input type="text" class="bg-black-50 border border-black-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-yellow-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
      </div>
      <div className='w-1/6 flex justify-center'>
        <button className='rounded-lg bg-sky-500 px-4 py-2 text-white my-4 hover:bg-sky-700 transition ease-in-out duration-700'>Register</button>
      </div>
      <div className='w-1/6 flex justify-center'>
        <span className='font-bold hover:text-sky-500 transition ease-in-out duration-700'><NavLink to='/login'>Login</NavLink></span>
      </div>
    </div>
  )
}

export default Register
