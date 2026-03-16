import React from 'react'
import { useState } from 'react'
import { Anime } from '../api/animeApi'
interface Props {
    anime : Anime
}
export default function Card({ anime } : Props) {
    const [vHover , setvHover] = useState(false)
  return (
    <div className={`flex flex-col items-center justify-end w-full max-w-[calc(20%-calc(48px/5))] min-h-80 border border-purpleN rounded-md relative z-80 bg-cover ${vHover ? "scale-[102%]" : "scale-none"} bg-center overflow-hidden`}
    style={{backgroundImage: `url(${anime.images.jpg.image_url})`}}
    >
        <div className={`absolute w-full h-full rounded-md flex flex-col items-center justify-center overflow-hidden z-50 gap-2 ${vHover ? "bg-black/60" : "bg-black/0"}`} onMouseEnter={() => setvHover(true)} onMouseLeave={() => setvHover(false)}>
            <div className={`flex w-24 h-24 rounded-md border border-purpleN/60 bg-[url(anime.images.jpg.image_url)] bg-cover bg-center relative items-center justify-center z-40 ${vHover ? "flex" : "hidden"}`}
            style={{backgroundImage: `url(${anime.images.jpg.image_url})`}}
            >
                <div className="w-6 h-6 absolute z-30">
                    <img src="/playIconP.svg" alt="" className='w-full'/>
                </div>
            </div>
            <div className={`flex-row flex-wrap justify-center items-center gap-1.5 w-full px-3 ${vHover ? "flex" : "hidden"}`}>
                <div className="text-sm px-2 py-0.5 bg-green-800 rounded-md border border-white/20">Adveture</div>
                <div className="text-sm px-2 py-0.5 bg-blue-800 rounded-md border border-white/20">Fantasy</div>
                <div className="text-sm px-2 py-0.5 bg-red-800 rounded-md border border-white/20">Drama</div>
                <div className="text-sm px-2 py-0.5 bg-yellow-800 rounded-md border border-white/20">Seinen</div>
                <div className="text-sm px-2 py-0.5 bg-cyan-800 rounded-md border border-white/20">Isekai</div>
            </div>
        </div>
        <div className="w-full bg-purpleN py-2 px-4 absolute z-70">
            <p className={`text-base text-center ${vHover ? "overflow-visible whitespace-normal line-clamp-2" : "truncate"}`}>{anime.title}</p>
        </div>
        <div className="px-2 py-0.5 bg-purpleN/90 border border-white/10 rounded-md absolute right-3 top-3 z-60">
            <p className='text-sm'>{anime.episodes} Episodes</p>
        </div>
    </div>
  )
}