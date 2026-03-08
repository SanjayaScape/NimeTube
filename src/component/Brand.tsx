import React from 'react'
import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <Link to={''}>
    <div className='flex justify-start items-center flex-row gap-3'>
        <div className="flex">
            <img src="/Brand.svg" alt="" className='w-11'/>
        </div>
        <p className='text-xl'>NimeTube</p>
    </div>
    </Link>
  )
}
