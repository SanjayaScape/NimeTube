import React from 'react'
import { useState } from 'react'

interface con {
    text ?: string
}

export default function ButtonMore({text = "View more"} : con) {
    const [isHov , setisHov] = useState(false)
  return (
    <div className="flex flex-row items-center justify-start p-1 rounded-md border-white/30 border self-end" onMouseEnter={() => setisHov(true)} onMouseLeave={() => setisHov(false)}>
        <div className={`flex flex-row items-center justify-start ${isHov ? "gap-0" : "gap-3"} transition-all rounded-sm overflow-hidden relative bg-black/30`}>
            <div className={`absolute -z-10 inset-0 bg-purpleN duration-1000 ${isHov ? "scale-x-100 origin-left" : "scale-x-10 origin-right"}`}></div>
            <div className="flex flex-row items-center justify-start px-4 py-1">
                <p className='text-base'>{text}</p>
            </div>
            <div className="flex flex-row items-center justify-center px-2.5 py-2 bg-purpleN rounded-sm">
                <img src="/moreIcon.svg" alt="" className='w-5'/>
            </div>
        </div>
    </div>
  )
}
