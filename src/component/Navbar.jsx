function Navbar () {
    return (
        <>
        <nav>
            <div className="brand">
                <div className="logoBrand">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="searchBar">
                <div className="logoSearchBar">
                    <img src="" alt="" />
                </div>
                <input type="text" placeholder="" />
            </div>
            <div className="navLink">
                <p>Anime list</p>
                <p>Release lineup</p>
                <p>Hot leaks</p>
            </div>
            <button className="loginBut">
                <p>Login</p>
            </button>
        </nav>
        </>
    )
}
export default Navbar