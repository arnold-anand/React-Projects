import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className='flex justify-between items-center p-2'>
        <div className='text-2xl'>{props.title}</div>
        <div>
            <ul className='flex space-x-5'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
        <div className='space-x-3'>
            <input className='border border-green-300 p-2 rounded-md' type="search" name="" id="" />
            <button className='border border-green-500 text-green-700 p-2 hover:bg-green-200 rounded-md'>Search</button>
        </div>
    </nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired}