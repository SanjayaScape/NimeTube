import React from 'react'
import Tube from '../component/Tube'
import Card from '../component/Card'
import Footer from '../component/Footer'
import SubTitle from '../component/SubTitle'
import ButtonMore from '../component/ButtonMore'
export default function Home() {
  return (
    <div className='flex flex-col justify-start items-center'>
      <div className='flex flex-col justify-start items-center mt-27 gap-6 w-full max-w-360 px-16'>
        <Tube></Tube>
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
          <ButtonMore></ButtonMore>
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
          <ButtonMore></ButtonMore>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
