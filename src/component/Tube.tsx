import React from 'react'
import { useState } from 'react'
import ButtonMore from './ButtonMore';

export default function Tube() {
    const [isHov , setisHov] = useState(false);
  return (
    <div className='flex flex-col items-center gap-2 justify-start w-full'>
        <div className='w-full bg-[url(/friere.png)] bg-center bg-cover h-120 rounded-3xl border-2 border-purpleN'>
            <div className="w-full h-full px-12 py-12 relative z-100 flex flex-row justify-start bg-linear-to-r from-black from-25% to-none rounded-3xl items-end">
                <div className="flex flex-col justify-end items-start gap-4">
                    <div className="flex flex-row items-center justify-start gap-4">
                        <div className="w-18 rounded-sm bg-[url(/frieren.png)] bg-cover bg-center h-18"></div>
                        <p className='text-4xl max-w-95'>Frieren: Beyond Journey's End</p>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <div className="flex flex-row items-center justify-start gap-3">
                            <p className='text-2xl'>8.8 / 10.0</p>
                            <div className="w-4 h-4">
                                <img src="/ratingIcon.svg" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <div className="px-4 py-1 bg-green-800 rounded-md border border-white/20">Adventure</div>
                            <div className="px-4 py-1 bg-blue-800 rounded-md border border-white/20">Fantasy</div>
                            <div className="px-4 py-1 bg-red-800 rounded-md border border-white/20">Drama</div>
                        </div>
                    </div>
                </div>
                <div className={`flex absolute z-50 right-8 bottom-8 bg-black/60 rounded-md`} onMouseEnter={() => setisHov(true)} onMouseLeave={() => setisHov(false)}>
                <ButtonMore text='Watch now'></ButtonMore>
                </div>
            </div>
        </div>
        <ul className='flex flex-row gap-1'>
            <span className='bg-purpleN rounded-full w-6 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
        </ul>
    </div>
  )
}
