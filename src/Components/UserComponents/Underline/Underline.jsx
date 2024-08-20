import React from 'react'
import './Underline.css';

export default function Underline({
    title = '',
    titleColor = '#000', // Default text color
    // separatorColor = '#000', // Default separator color
    separatorBackground = '#000' // Default separator background color
  }) {
  return (
    <div id='content-two-setion-two'>
      <div className='mt-5'>
        <h3 style={{ color: titleColor }} className='text-title-proprieter'>{title}</h3>
      </div>
      <div
        id='content-two-setion-two-separator'
        style={{
        //   borderColor: separatorColor,
          backgroundColor: separatorBackground
        }}
      >

      </div>
    </div>
  )
}
