import React from 'react'
import Brand from './Brand'

export default function Footer() {
  return (
    <div className='w-full bg-purpleN flex flex-col items-center justify-start mt-16'>
      <div className="top">
        <div className="side">
          <Brand></Brand>
          <p></p>
          <div className="sosmed"></div>
        </div>
        <div className="side">
          <p></p>
          <div className="navl"></div>
          <div className="navl"></div>
        </div>
        <div className="side">
          <p></p>
          <div className="cp">
            <div className="inputcp">
              <div className="imginput">
                <img src="" alt="" />
              </div>
              <input type="text" />
            </div>
            <div className="telp">
              <div className="imgtelp">
                <img src="" alt="" />
              </div>
              <p></p>
            </div>
            <div className="email">
              <div className="imgemail">
                <img src="" alt="" />
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 items-center justify-end max-w-328 p-4">
        <p className='text-sm'>Guides</p>
        <p className='text-sm'>Terms of Use</p>
        <p className='text-sm'>NimeTube Privacy Policy</p>
      </div>
    </div>
  )
}
