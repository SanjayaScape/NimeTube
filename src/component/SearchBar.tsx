import React, { use } from 'react'
import { Anime } from '../api/animeApi'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import AnimeBar from './AnimeBar' 

export default function SearchBar() {
    const [query , setQuery] = useState("")
    const [search, setSearch] = useState<Anime[]>([])
    const wrapper = useRef<HTMLDivElement>(null)

    useEffect (() => {
        const checkClick = (e :MouseEvent) => {
        if (wrapper.current && !wrapper.current.contains(e.target as Node)) {
            setSearch([])
        }
    }
    document.addEventListener("mousedown" ,checkClick)
    return () => {
        document.removeEventListener("mousedown", checkClick)
    }
    }, [])

    useEffect (() => {
        async function find() {
            const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&limit=4`)
            setSearch(res.data.data)
        }
        if (query != "") {
            find()
        }
    }, [query])

  return (
    <div className='w-full relative z-15'>
        <div className="flex flex-row items-center justify-start flex-1 bg-purpleN/5 border border-purpleN rounded-md px-3 py-1.5">
            <div className="w-4">
                <img src="/searchIcon.svg" alt="" />
            </div>
            <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder="Search your series here..." className="w-full pl-3 outline-0 bg-none"/>
        </div>
        <div ref={wrapper} className="w-full p-3 bg-black/95 absolute z-10 rounded-md flex items-center justify-center flex-col gap-1">
            {search.map(anime => (
                <AnimeBar key={anime.mal_id} con={anime}></AnimeBar>
            ))}
        </div>
    </div>
  )
}
