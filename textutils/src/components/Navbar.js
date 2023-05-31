import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`flex justify-between items-center p-2 bg-[#222] text-white`}>
        <div className='text-2xl'>{props.title}</div>
    </nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired}