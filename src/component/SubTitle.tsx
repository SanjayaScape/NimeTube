import React from 'react'

type listProps = {
  title : string ,
  num : number
}

export default function SubTitle({title, num} : listProps) {
  return (
    <div className='w-full flex flex-row items-center justify-center relative z-50'>
        <p className='text-2xl'>{title}</p>
        <div className='absolute z-20 right-0 bg-purpleN/40 rounded-md px-4 py-1 border border-purpleN/60'>
            <p className='text-sm'>{num}</p>
        </div>
    </div>
  )
}
