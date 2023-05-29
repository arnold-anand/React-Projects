import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className='flex justify-between items-center p-2 bg-[#222] text-white'>
        <div className='text-2xl'>{props.title}</div>
        <div className='space-x-3'>
            <input className='border border-blue-300 p-2 rounded-md' type="search" name="" id="" />
            <button className='border border-blue-500 text-blue-700 p-2 hover:bg-slate-300 rounded-md'>Search</button>
        </div>
    </nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired}