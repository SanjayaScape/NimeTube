import React from 'react'
import Tube from '../component/Tube'
import Footer from '../component/Footer'
import SubTitle from '../component/SubTitle'
import ButtonMore from '../component/ButtonMore'
import Card from '../component/Card'
import { Anime, topAnime } from '../api/animeApi'
import { useEffect, useState } from 'react'

export default function Home() {
  const [anime , setAnime] = useState<Anime[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    topAnime()
    .then(data => setAnime(data))
    .finally(() => setLoading(false))
  }, [])
  return (
    <div className='flex flex-col justify-start items-center'>
      <div className='flex flex-col justify-start items-center mt-27 gap-6 w-full max-w-360 px-16'>
        <Tube></Tube>
        <div className='flex flex-col items-center justfy-start gap-6 w-full max-w-360'>
          <SubTitle title="Ongoing Series" num={20} ></SubTitle>
          <div className='flex flex-row items-center justify-start gap-3 w-full flex-wrap'>
            {anime.map(anim => (
              <Card key={anim.mal_id} anime={anim}></Card>
            ))}
          </div>
          <ButtonMore></ButtonMore>
        </div>
        <div className='flex flex-col items-center justfy-start gap-6 w-full max-w-360'>
          <SubTitle title="This Season's Anime" num={32} ></SubTitle>
          <div className='flex flex-row items-center justify-start gap-3 w-full flex-wrap'>
            {anime.map(anim => (
              <Card key={anim.mal_id} anime={anim}></Card>
            ))}
          </div>
          <ButtonMore></ButtonMore>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
