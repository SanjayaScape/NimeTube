import React from 'react'
import Brand from './Brand'
import NavLink from './NavLink'
import SearchBar from './SearchBar'
export default function Navbar () {
    return (
        <>
        <nav className="w-full flex flex-row bg-black items-center justify-center fixed top-0 z-1000" >
            <div className="w-full flex flex-row py-6 px-16 items-center justify-start gap-12 max-w-390 border-b-[0.5px] border-purpleN/15">
                <Brand></Brand>
                <NavLink></NavLink>
                <SearchBar></SearchBar>
                <button className="flex items-center justify-center min-w-24 px-4 py-1 border border-purpleN bg-purpleN/40 rounded-sm">
                    <p className='text-base'>Login</p>
                </button>
            </div>
        </nav>
        </>
    )
}