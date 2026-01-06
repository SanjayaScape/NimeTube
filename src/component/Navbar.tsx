import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar () {
    return (
        <>
        <nav className="w-full flex flex-row bg-black items-center justify-center fixed top-0 z-1000" >
            <div className="w-full flex flex-row py-6 px-16 items-center justify-start gap-8 max-w-390 border-b-[0.5px] border-purpleN/15">
                <div className="flex flex-row items-center justify-center">
                    <Link to="/"><img src="/Brand.svg" alt="NimeTube" className="w-[128px] h-auto"/></Link>
                </div>
                <div className="flex flex-row items-center justify-start flex-1 bg-purpleN/5 border border-purpleN rounded-md px-3 py-1.5">
                    <div className="w-4">
                        <img src="/searchIcon.png" alt="" />
                    </div>
                    <input type="text" placeholder="Search your series here..." className="w-full pl-3 outline-0 bg-none"/>
                </div>
                <div className="flex flex-row items-center justify-start gap-12">
                    <Link to="/AnimeList"><p className='text-lg'>Anime list</p></Link>
                    <Link to="/ReleaseLineup"><p className='text-lg'>Release lineup</p></Link>
                    <Link to="/HotLeaks"><p className='text-lg'>Hot leaks</p></Link>
                </div>
                <button className="flex items-center justify-center min-w-24 px-4 py-1 border border-purpleN bg-purpleN/40 rounded-sm">
                    <p className='text-base'>Login</p>
                </button>
            </div>
        </nav>
        </>
    )
}