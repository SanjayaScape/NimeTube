import React from 'react'
import ButtonMore from './ButtonMore'
export default function GenreTube() {
  return (
    <div className='box'>
      <div className="carda">
        <div className="titeltop">
          <p></p>
          <div className="series"></div>
        </div>
        <div className="bot">
          <p className='text'></p>
          <ButtonMore></ButtonMore>
        </div>
      </div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  )
}
