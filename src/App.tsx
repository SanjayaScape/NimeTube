import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import AnimeList from "./pages/AnimeList"
import ReleaseLineup from "./pages/ReleaseLineup"
import HotLeaks from "./pages/HotLeaks"
import Navbar from "./component/Navbar"
function App() {
  return (
    <>
    <Navbar></Navbar>
    <main className="page">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="AnimeList" element={<AnimeList></AnimeList>}></Route>
        <Route path="ReleaseLineup" element={<ReleaseLineup></ReleaseLineup>}></Route>
        <Route path="HotLeaks" element={<HotLeaks></HotLeaks>}></Route>
      </Routes>
    </main>
    </>
  )
}

export default App
