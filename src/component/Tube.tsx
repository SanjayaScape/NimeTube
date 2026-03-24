import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ButtonMore from './ButtonMore';
import axios from 'axios';

interface content {
    mal_id : number
    images : {
        webp: {
            large_image_url : string
        }
    }
    title_english :string
    score : number
}

export default function Tube() {
    const [index, setindex] = useState<number>(1)
    const [isHov , setisHov] = useState(false)
    const [nimes, setnimes] = useState<content[]>([])
    const [transition, setTransition] = useState(true)

    const track = useRef<HTMLDivElement>(null)

    useEffect (() => {
        async function nTube () {
            const res = await axios.get("https://api.jikan.moe/v4/top/anime?limit=7")
            setnimes(res.data.data)
        }
        nTube()
    },[])

    const slides = nimes.length > 0 ? [nimes[nimes.length - 1], ...nimes , nimes[0]] : []

    const handleSlide = () => {
        if (!slides.length) return

        if (index == 0) {
            setindex(nimes.length)
            setTransition(false)
        }
        if (index === slides.length - 1) {
            setindex(1)
            setTransition(false)
        }
    }

    useEffect(() => {
        if (!transition) {
        requestAnimationFrame(() => setTransition(true))
        }
    }, [transition])
  
    let startX = 0
    let isDragging = false
    const onMouseDown = (e: React.MouseEvent) => {
        startX = e.clientX
        isDragging = true
    }
    const onMouseUp = (e: React.MouseEvent) => {
        if (!isDragging) return
        const diff = e.clientX - startX

        if (diff > 50) {
        setindex(prev => prev - 1)
        } else if (diff < -50) {
        setindex(prev => prev + 1)
        }

        isDragging = false
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setindex(prev => prev + 1)
        }, 10000)
    return () => clearInterval(interval)
    }, [])

    const realIndex = index - 1 < 0 ? nimes.length - 1 : index - 1 >= nimes.length ? 0 : index - 1
  return (
    <div className='flex flex-col items-center gap-2 justify-start w-full'>
        <div className="w-full flex overflow-hidden justify-start items-center h-120 border-2 border-purpleN rounded-3xl flex-row"onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            {slides.map((nime, i) => (
            <div className='min-w-full bg-[url(/friere.png)] bg-right bg-size-[73%] bg-no-repeat h-full snap-start' style={{backgroundImage: `url(${nime.images.webp.large_image_url})`,transform: `translateX(-${index * 100}%)`, transition: transition ? "0.4s ease" : "none"}} key={i} ref={track} onTransitionEnd={handleSlide}>
                <div className="w-full h-full px-12 py-12 relative z-100 flex flex-row justify-start bg-linear-to-r from-black from-30% to-none items-end">
                    <div className="flex flex-col justify-end items-start gap-4">
                        <div className="flex flex-row items-center justify-start gap-4">
                            <div className="w-18 rounded-sm bg-cover bg-center h-18" style={{backgroundImage: `url(${nime.images.webp.large_image_url})`}}></div>
                            <p className='text-4xl max-w-95'>{nime.title_english}</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2">
                            <div className="flex flex-row items-center justify-start gap-3">
                                <p className='text-2xl'>{nime.score} / 10.0</p>
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
            ))}
        </div>
        <ul className='flex flex-row gap-1'>
            {nimes.map((_, i) => (
                <span className={`${i == realIndex ? "bg-purpleN w-6" : "bg-purpleN/60 w-2"} rounded-full h-2 border border-white/10`} key={i} onClick={() => setindex(i + 1)}></span>
            ))}
        </ul>
    </div>
  )
}
