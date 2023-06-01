import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`flex justify-between items-center p-2 bg-[#222] text-white`}>
        <div className='text-2xl'>{props.title}</div>
        {/* <ul className='flex space-x-10'>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
        </ul> */}
    </nav>

  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired}