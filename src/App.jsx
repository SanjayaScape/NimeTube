import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
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
