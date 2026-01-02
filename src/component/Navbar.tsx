function Navbar () {
    return (
        <>
        <nav className="w-full flex flex-row bg-black items-center justify-center" >
            <div className="w-full flex flex-row py-6 px-16 items-center justify-start gap-8 max-w-390 border-b-[0.5px] border-purpleO">
                <div className="flex flex-row items-center justify-center">
                    <img src="/Brand.svg" alt="NimeTube" className="w-[128px] h-auto"/>
                </div>
                <div className="flex flex-row items-center justify-start flex-1 bg-purpleO border border-purpleN rounded-md px-3 py-1.5">
                    <div className="w-4">
                        <img src="/searchIcon.png" alt="" />
                    </div>
                    <input type="text" placeholder="Search your series here..." className="w-full pl-3 outline-0 bg-none"/>
                </div>
                <div className="flex flex-row items-center justify-start gap-12">
                    <p>Anime list</p>
                    <p>Release lineup</p>
                    <p>Hot leaks</p>
                </div>
                <button className="flex items-center justify-center min-w-24 px-4 py-1 border border-purpleN bg-purpleO rounded-sm">
                    <p>Login</p>
                </button>
            </div>
        </nav>
        </>
    )
}
export default Navbar