import React from 'react'
import Header from './HomeComponents/Header'
import HomeMiddle from './HomeComponents/HomeMiddle'
import Fotter from '../Fotter'


function HomePage() {
  return (
    <div className=' bg-black overflow-hidden mr-3 lg:mr-0'>
        <Header/>
        <HomeMiddle />  
        <Fotter />


    </div>
  )
}

export default HomePage