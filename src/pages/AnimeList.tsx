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

export default function AnimeList() {
  const [aniList, setaniList] = useState<Anime[]>([])
  const [animeTot, setanimeTot] = useState<number>(0)
  useEffect (() => {
    async function topAnime () {
      const res =await axios.get("https://api.jikan.moe/v4/top/anime")
      setaniList(res.data.data)
      setanimeTot(res.data.pagination.items.total)
    }
    topAnime()
  },[])

  return (
    <div className='flex flex-col justify-start items-center'>
      <div className="flex flex-col justify-start items-center mt-27 gap-6 w-full max-w-360 px-16">
        <GenreTube></GenreTube>
        <SubTitle title='Top Anime' num={animeTot}></SubTitle>
        <div className='flex flex-row w-full items-center justify-end gap-4'>
          <FilterDate></FilterDate>
        </div>
        <div className="flex flex-row items-center justify-start gap-3 w-full flex-wrap">
          {aniList.map(ani => (
            <Card key={ani.mal_id} anime = {ani}></Card>
          ))}
        </div>
        <ButtonMore text="Show more"></ButtonMore>
      </div>
      <Footer></Footer>
    </div>
  )
}
