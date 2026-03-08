import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function NavLink() {
    const [isHov , setisHov] = useState(0);
    const [isClick , setisClick] = useState(false);
  return (
    <div className="cursor-pointer flex flex-col items-start justify-start relative z-20" onClick={() => isClick ? setisClick(false) : setisClick(true) }>
        <div className="flex flex-row items-center justify-start gap-4">
            <p className={`text-lg ${isClick ? "opacity-100" : "opacity-70"}`}>Features</p>
            <div className={`transition-all duration-200 ease ${isClick ? "rotate-315" : "rotate-225"}`}>
                <img className={`transition-all duration-200 ease w-3.5 h-3.5 ${isClick ? "hidden" : "flex"}`} src="/v_Block.svg" alt="" />
                <img className={`transition-all duration-200 ease w-4.5 h-4.5 rotate-45 ${isClick ? "flex" : "hidden"}`} src="/v_Full.svg" alt="" />
            </div>
        </div>
        <div className={`p-3 rounded-md border-purpleN border absolute top-12 bg-black/90 ${isClick ? "flex" : "hidden"} flex-col gap-1 w-64`}>
            <Link to="/AnimeList">
            <div className={`w-full flex flex-col items-start justify-start gap-2 px-3 py-2 rounded-sm border ${isHov == 1 ? "bg-purpleN/20 border-white/70" : "bg-black/0 border-white/20"}`} onMouseEnter={() => setisHov(1)} onMouseLeave={() => setisHov(0)}>
                <p className='text-base'>Anime list</p>
                <p className={`text-sm opacity-70 ${isHov == 1 ? "flex" : "hidden"}`}>Browse All Anime Here!</p>
            </div>
            </Link>
            <Link to="/ReleaseLineup">
            <div className={`w-full flex flex-col items-start justify-start gap-2 px-3 py-2 rounded-sm border ${isHov == 2 ? "bg-purpleN/20 border-white/70" : "bg-black/0 border-white/20"}`} onMouseEnter={() => setisHov(2)} onMouseLeave={() => setisHov(0)}>
                <p className='text-base'>Release lineup</p>
                <p className={`text-sm opacity-70 ${isHov == 2 ? "flex" : "hidden"}`}>Fresh Episode Drops</p>
            </div>
            </Link>
            <Link to="/HotLeaks">
            <div className={`w-full flex flex-col items-start justify-start gap-2 px-3 py-2 rounded-sm border ${isHov == 3 ? "bg-purpleN/20 border-white/70" : "bg-black/0 border-white/20"}`} onMouseEnter={() => setisHov(3)} onMouseLeave={() => setisHov(0)}>
                <p className='text-base'>Hot leaks</p>
                <p className={`text-sm opacity-70 ${isHov == 3 ? "flex" : "hidden"}`}>Insider Episode Leaks</p>
            </div>
            </Link>
        </div>
    </div>
  )
}
