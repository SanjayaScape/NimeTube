import React from 'react'
import ButtonMore from './ButtonMore'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface nimeGen {
    mal_id: number
    images: {
        jpg: {
            image_url:string
        }
    }
}

export default function GenreTube() {
  const [iHover, setiHover] = useState(0)
  const [iClick, setiClick] = useState(1)
  const [nimeFan, setnimeFan] = useState<nimeGen[]>([])
  const [nimeRom, setnimeRom] = useState<nimeGen[]>([])
  const [nimeCom, setnimeCom] = useState<nimeGen[]>([])

  useEffect (() => {
    async function getNimeRom () {
      if (iClick == 1 && nimeFan != []) {
        const resFan = await axios.get("https://api.jikan.moe/v4/anime?genres=10&limit=4")
        setnimeFan(resFan.data.data)
      } else if (iClick == 2 && nimeRom != []){
        const resRom = await axios.get("https://api.jikan.moe/v4/anime?genres=22&limit=4")
        setnimeRom(resRom.data.data)
      } else if (iClick == 3 && nimeCom != []) {
        const resCon = await axios.get("https://api.jikan.moe/v4/anime?genres=4&limit=4")
        setnimeCom(resCon.data.data)
      }
    }
    getNimeRom()
  },[])
  return (
    <div className={`flex flex-row justify-start items-center w-full border-purpleN/70 border rounded-lg`}>
      <div className={`flex flex-row justify-start items-start transition-all duration-250 rounded-lg border overflow-hidden border-purpleN border-r ${iClick == 1 ? " min-w-[45%] max-w-[45%] w-[45%]" : "min-w-[27.5%] max-w-[27.5%] w-[27.5%]"} bg-[url(/frieren.png)] bg-cover bg-center`} onClick={() => setiClick(1)}>
      <div className={`flex flex-col items-start justify-between w-full transition-all duration-150 ${iClick == 1 ? "bg-black/50" : "bg-black/90"} rounded-lg py-10 px-8 h-120`}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <p className={`${iClick == 1 ? "opacity-100 text-7xl" : "opacity-80 text-5xl "}`}>ISEKAI</p>
          <div className={`flex-row items-end justify-start w-full gap-2.5 ${iClick == 1 ? "flex" : "hidden"}`}>
            {nimeFan.map((nf) => (
              <div className={`flex w-16 h-16 rounded-md border border-purpleN/60 bg-cover bg-center items-center justify-center ${iHover == nf.mal_id ? "scale-120" : "scale-100"}`}
              style={{backgroundImage: `url(${nf.images.jpg.image_url})`}} onMouseEnter={() => setiHover(nf.mal_id)} onMouseLeave={() => setiHover(0)} key={nf.mal_id}></div>
            ))}
            <div className={`flex flex-row items-center justify-start gap-0.5 bg-purpleN ${iHover > 0 ? "opacity-100" : "opacity-0"} rounded-md p-2 transition-opacity duration-100`} onMouseEnter={() => setiHover(5)} onMouseLeave={() => setiHover(0)}>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-full gap-2">
          <p className={`text-base ${iClick == 1 ? "line-clamp-2" : "hidden"}`}>Isekai is a genre that follows a protagonist who is transported, reincarnated, or summoned into different world</p>
          <ButtonMore></ButtonMore>
        </div>
      </div>
      </div>
      <div className={`flex flex-row justify-start items-start transition-all duration-250 rounded-lg border overflow-hidden border-purpleN border-r ${iClick == 2 ? " min-w-[45%] max-w-[45%] w-[45%]" : "min-w-[27.5%] max-w-[27.5%] w-[27.5%]"} bg-[url(/liw.png)] bg-cover bg-center`} onClick={() => setiClick(2)}>
      <div className={`flex flex-col items-start justify-between w-full transition-all duration-150 ${iClick == 2 ? "bg-black/50" : "bg-black/90"} rounded-lg py-10 px-8 h-120`}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <p className={`${iClick == 2 ? "opacity-100 text-7xl" : "opacity-80 text-5xl"}`}>ROMANCE</p>
          <div className={`flex-row items-end justify-start w-full gap-2.5 ${iClick == 2 ? "flex" : "hidden"}`}>
            {nimeRom.map((nr) => (
              <div className={`flex w-16 h-16 rounded-md border border-purpleN/60 bg-cover bg-center items-center justify-center ${iHover == nr.mal_id ? "scale-120" : "scale-100"}`}
              style={{backgroundImage: `url(${nr.images.jpg.image_url})`}} onMouseEnter={() => setiHover(nr.mal_id)} onMouseLeave={() => setiHover(0)} key={nr.mal_id}></div>
            ))}
            <div className={`flex flex-row items-center justify-start gap-0.5 bg-purpleN ${iHover > 0 ? "opacity-100" : "opacity-0"} rounded-md p-2 transition-opacity duration-100`} onMouseEnter={() => setiHover(5)} onMouseLeave={() => setiHover(0)}>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-full gap-2">
          <p className={`text-base ${iClick == 2 ? "line-clamp-2" : "hidden"}`}>Isekai is a genre that follows a protagonist who is transported, reincarnated, or summoned into different world</p>
          <ButtonMore></ButtonMore>
        </div>
      </div>
      </div>
      <div className={`flex flex-row justify-start items-start transition-all duration-250 rounded-lg border overflow-hidden border-purpleN border-r ${iClick == 3 ? " min-w-[45%] max-w-[45%] w-[45%]" : "min-w-[27.5%] max-w-[27.5%] w-[27.5%]"} bg-[url(/cid.png)] bg-cover bg-center`} onClick={() => setiClick(3)}>
      <div className={`flex flex-col items-start justify-between w-full transition-all duration-150 ${iClick == 3 ? "bg-black/50" : "bg-black/90"} rounded-lg py-10 px-8 h-120`}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <p className={`${iClick == 3 ? "opacity-100 text-7xl" : "opacity-80 text-5xl"}`}>COMEDY</p>
          <div className={`flex-row items-end justify-start w-full gap-2.5 ${iClick == 3 ? "flex" : "hidden"}`}>
            {nimeCom.map((nc) => (
              <div className={`flex w-16 h-16 rounded-md border border-purpleN/60 bg-cover bg-center items-center justify-center ${iHover == nc.mal_id ? "scale-120" : "scale-100"}`}
              style={{backgroundImage: `url(${nc.images.jpg.image_url})`}} onMouseEnter={() => setiHover(nc.mal_id)} onMouseLeave={() => setiHover(0)} key={nc.mal_id}></div>
            ))}
            <div className={`flex flex-row items-center justify-start gap-0.5 bg-purpleN ${iHover > 0 ? "opacity-100" : "opacity-0"} rounded-md p-2 transition-opacity duration-100`} onMouseEnter={() => setiHover(5)} onMouseLeave={() => setiHover(0)}>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
              <span className='flex w-1 h-1 bg-white rounded-full'></span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-full gap-2">
          <p className={`text-base ${iClick == 3 ? "line-clamp-2" : "hidden"}`}>Isekai is a genre that follows a protagonist who is transported, reincarnated, or summoned into different world</p>
          <ButtonMore></ButtonMore>
        </div>
      </div>
      </div>
    </div>
  )
}
