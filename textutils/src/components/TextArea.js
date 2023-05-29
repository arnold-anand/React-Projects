import React from 'react'
import PropTypes from 'prop-types'
export default function TextArea(props) {
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='text-3xl'>{props.heading}</div>
        <textarea className='border border-blue-300 m-2' name="" id="" cols="80" rows="10"></textarea>
        <button className='border p-2 border-blue-300 rounded-lg'>Convert to Uppercase</button>
    </div>
  )
}
