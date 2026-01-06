import React from 'react'
import Tube from '../component/Tube'
import Card from '../component/Card'
import Footer from '../component/Footer'
import SubTitle from '../component/SubTitle'
export default function Home() {
  return (
    <div className='flex flex-col justify-start items-center'>
      <div className='flex flex-col justify-start items-center mt-27 gap-6 w-full max-w-360 px-16'>
        <div className='flex flex-col items-center gap-2 justify-start w-full'>
          <Tube></Tube>
          <ul className='flex flex-row gap-1'>
            <span className='bg-purpleN rounded-full w-6 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
            <span className='bg-purpleN/60 rounded-full w-2 h-2 border border-white/10'></span>
          </ul>
        </div>
        <div className='flex flex-col items-center justfy-start gap-6 w-full max-w-360'>
          <SubTitle title="Ongoing Series" num={24} ></SubTitle>
          <div className='flex flex-row items-center justify-start gap-3 w-full flex-wrap'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="bg-purpleN/60 border border-purpleN rounded-md px-4 py-1 self-end flex flex-row items-center justify-start gap-4">
            <p className='text-base'>View more</p>
            <div className="w-4 h-4">
              <img src="/moreIcon.svg" alt="" />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justfy-start gap-6 w-full max-w-360'>
          <SubTitle title="This Season's Anime" num={32} ></SubTitle>
          <div className='flex flex-row items-center justify-start gap-3 w-full flex-wrap'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className="bg-purpleN/60 border border-purpleN rounded-md px-4 py-1 self-end flex flex-row items-center justify-start gap-4">
            <p className='text-base'>View more</p>
            <div className="w-4 h-4">
              <img src="/moreIcon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
