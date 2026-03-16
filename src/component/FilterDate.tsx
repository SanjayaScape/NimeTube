import React from 'react'
import { useState } from 'react'

export default function FilterDate() {
    const [iHover, setiHover] = useState<boolean>(false)
    const [isClick, setisClick] = useState<number>(0)
    const [iHoverD, setiHoverD] = useState<number>(0)
    const [isClickD, setisClickD] = useState<string>("")

    const year = new Date().getFullYear()
    const years = []
    for (let i = year; i >= 2000; i--) {
        years.push(i)
    }
  return (
    <div className={`flex flex-col items-start justify-start relative z-81 ${isClick || iHover ? "bg-purpleN/20 border-white/40" : "bg-purpleN/5 border-white/15"} rounded-md border `} onMouseEnter={() => {setiHover(true)}} onMouseLeave={() => {setiHover(false)}} onClick={ isClick ? () => {setisClick(0)} : () => {setisClick(1)}}>
            <div className="flex flex--row gap-5 px-4 py-3">
                <p className={`text-base ${iHover || isClick ? "opacity-100" : "opacity-70"}`}>Release Year</p>
                <div className={`flex items-center justify-center transition-all duration-200 ease ${isClick == 1? "rotate-315" : "rotate-225"}`}>
                    <img className={`items-center justify-center transition-all duration-200 ease min-w-3.5 w-3.5 h-3.5 ${isClick == 1 ? "hidden" : "flex"}`} src="/v_Block.svg" alt="" />
                    <img className={`items-center justify-center transition-all duration-200 ease min-w-4.5 w-4.5 h-4.5 rotate-45 ${isClick == 1 ? "flex" : "hidden"}`} src="/v_Full.svg" alt="" />
                </div>
            </div>
            <div className={`${isClick ? "flex" : "hidden"} flex-col absolute w-72 px-3 py-2 bg-black/97 top-14 z-65 right-0 gap-1 rounded-md overflow-y-scroll h-48`}>
                {years.map(y => (
                    <div className={`w-full flex flex-row items-center justify-center border border-white/10 ${iHoverD == y? "bg-purpleN/20 border-white/40" : "bg-purpleN/5"} px-3 py-2 rounded-md`} onMouseEnter={() => setiHoverD(y)} onMouseLeave={() => setiHoverD(0)}>
                        <p className={`text-base ${iHoverD == y? "opacity-100" : "opacity-80"}`}>{y}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}
