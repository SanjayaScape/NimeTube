import React from 'react'
import GenreTube from '../component/GenreTube'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Anime } from '../api/animeApi'
import Card from '../component/Card'
import ButtonMore from '../component/ButtonMore'
import SubTitle from '../component/SubTitle'
import FilterDate from '../component/FilterDate'
import Footer from '../component/Footer'
import FilterGenre from '../component/FilterGenre'

export default function AnimeList() {
  const [aniList, setaniList] = useState<Anime[]>([])
  const [animeTot, setanimeTot] = useState<number>(0)
  const [year , setyear] = useState<number>(0)
  const [genre , setgenre] = useState<number>(0)
  const [text , settext] = useState<string>("Top Anime")
  const [textG , settextG] = useState<string>("")
  const [page , setpage] = useState<number>(1)
  const [filOpen , setfilOpen] = useState<string>("")
  useEffect (() => {
    async function topAnime () {
      let url = `https://api.jikan.moe/v4/anime?page=${page}&`
      let t = "Anime"
      if (genre == 0 && year == 0) {
        url = `https://api.jikan.moe/v4/top/anime?page=${page}&`
        
      } else {
        if (genre){
          url += `genres=${genre}&`
          t += ` / ${textG}`
        } 
        if (year){
          url += `start_date=${year}-01-01&end_date=${year}-12-31&`
          t += ` / ${year}`
        } 
      }
      const res =await axios.get(url)
      setaniList(res.data.data)
      setanimeTot(res.data.pagination.items.total)
      settext(t)
    }
    topAnime()
  },[year, genre, page])

  return (
    <div className='flex flex-col justify-start items-center'>
      <div className="flex flex-col justify-start items-center mt-27 gap-6 w-full max-w-360 px-16">
        <GenreTube></GenreTube>
        <SubTitle title={text} num={animeTot}></SubTitle>
        <div className='flex flex-row w-full items-center justify-end gap-4'>
          <FilterGenre setG={setgenre} setTG={settextG} setFO={setfilOpen} FO={filOpen}></FilterGenre>
          <FilterDate setY={setyear}  setFO={setfilOpen} FO={"Date"}></FilterDate>
        </div>
        <div className="flex flex-row items-center justify-start gap-3 w-full flex-wrap">
          {aniList.map(ani => (
            <Card key={ani.mal_id} anime = {ani}></Card>
          ))}
        </div>
        <ButtonMore text="Next page" onClick={() => setpage(page + 1)} ></ButtonMore>
      </div>
      <Footer></Footer>
    </div>
  )
}
