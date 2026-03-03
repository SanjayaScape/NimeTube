import React from 'react'
import Brand from './Brand'
import NavLink from './NavLink'
export default function Navbar () {
    return (
        <>
        <nav className="w-full flex flex-row bg-black items-center justify-center fixed top-0 z-1000" >
            <div className="w-full flex flex-row py-6 px-16 items-center justify-start gap-12 max-w-390 border-b-[0.5px] border-purpleN/15">
                <Brand></Brand>
                <NavLink></NavLink>
                <div className="flex flex-row items-center justify-start flex-1 bg-purpleN/5 border border-purpleN rounded-md px-3 py-1.5">
                    <div className="w-4">
                        <img src="/searchIcon.svg" alt="" />
                    </div>
                    <input type="text" placeholder="Search your series here..." className="w-full pl-3 outline-0 bg-none"/>
                </div>
                <button className="flex items-center justify-center min-w-24 px-4 py-1 border border-purpleN bg-purpleN/40 rounded-sm">
                    <p className='text-base'>Login</p>
                </button>
            </div>
        </nav>
        </>
    )
}