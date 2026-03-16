import React from 'react'
import { Anime } from '../api/animeApi'
import { useState } from 'react'
interface anime {
    con : Anime
}

export default function AnimeBar({con} : anime) {
  const [isHov , setisHov] = useState(false)

  return (
    <div className={`w-full px-4 py-3 ${isHov ? "bg-purpleN/20 border border-white/40" : "bg-purpleN/5"} rounded-sm flex flex-row items-start justify-start gap-4`} onMouseEnter={() => {setisHov(true)}} onMouseLeave={() => {setisHov(false)}}>
      <div className={`flex w-24 h-24 rounded-md border border-purpleN/60 bg-cover bg-center items-center justify-center`}
      style={{backgroundImage: `url(${con.images.jpg.image_url})`}}></div>
      <div className="flex flex-col items-start justify-start gap-3 w-full">
        <p className='text-lg'>{con.title}</p>
        <div className={`flex flex-row justify-start items-center gap-1.5 w-full`}>
          <div className="text-sm px-2 py-0.5 bg-green-800 rounded-md border border-white/20">Adveture</div>
          <div className="text-sm px-2 py-0.5 bg-blue-800 rounded-md border border-white/20">Fantasy</div>
          <div className="text-sm px-2 py-0.5 bg-red-800 rounded-md border border-white/20">Drama</div>
          <div className="text-sm px-2 py-0.5 bg-yellow-800 rounded-md border border-white/20">Seinen</div>
        </div>
      </div>
    </div>
  )
}
