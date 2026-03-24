import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface gen {
    mal_id : number
    name : string
}
interface setP {
    setG : React.Dispatch<React.SetStateAction<number>>
    setTG : React.Dispatch<React.SetStateAction<string>>
    setFO : React.Dispatch<React.SetStateAction<string>>
    FO : string
}

export default function FilterGenre({setG , setTG , setFO , FO} : setP) {
    const [genre , setgenre] = useState<gen[]>([])
    const [iHover, setiHover] = useState<boolean>(false)
    const [iHoverD, setiHoverD] = useState<number>(0)
    const [isClickD, setisClickD] = useState<string>("Genre")

    useEffect (() => {
        async function allGen () {
            const res = await axios.get("https://api.jikan.moe/v4/genres/anime")
            setgenre(res.data.data)
        }
        allGen()
    },[])
    return (
    <div className={`flex flex-col items-start justify-start relative z-81 w-42 ${ FO == "Genre" || iHover ? "bg-purpleN/20 border-white/40" : "bg-purpleN/5 border-white/15"} rounded-md border `} onMouseEnter={() => {setiHover(true)}} onMouseLeave={() => {setiHover(false)}} onClick={ () => FO == "Genre"  ? (setFO("") ) : ( setFO("Genre") )} >
        <div className="flex flex-row items-center justify-between px-4 py-3 w-full gap-2">
            <p className={`text-base ${iHover || (FO == "Genre") ? "opacity-100" : "opacity-70"} truncate`}>{isClickD}</p>
            <div className={`flex items-center justify-center transition-all duration-200 ease ${ FO == "Genre" ? "rotate-315" : "rotate-225"}`}>
                <img className={`items-center justify-center transition-all duration-200 ease min-w-3.5 w-3.5 h-3.5 ${FO == "Genre" ? "hidden" : "flex"}`} src="/v_Block.svg" alt="" />
                <img className={`items-center justify-center transition-all duration-200 ease min-w-4.5 w-4.5 h-4.5 rotate-45 ${FO == "Genre" ? "flex" : "hidden"}`} src="/v_Full.svg" alt="" />
            </div>
        </div>
        <div className={`${FO == "Genre" ? "flex" : "hidden"} flex-col absolute w-72 px-3 py-2 bg-black/97 top-14 z-65 right-0 gap-1 rounded-md overflow-y-scroll h-48`}>
            {genre.map(gen => (
                <div className={`w-full flex flex-row items-center justify-center border border-white/10 ${iHoverD == gen.mal_id ? "bg-purpleN/20 border-white/40" : "bg-purpleN/5"} px-3 py-2 rounded-md`} onMouseEnter={() => setiHoverD(gen.mal_id)} onMouseLeave={() => setiHoverD(0)} onClick={() => isClickD != gen.name ? (setisClickD(gen.name), setG(gen.mal_id), setTG(gen.name)) : (setisClickD("Genre"), setG(0) , setTG(""))} key={gen.mal_id} >
                    <p className={`text-base ${iHoverD == gen.mal_id? "opacity-100" : "opacity-80"}`}>{gen.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
