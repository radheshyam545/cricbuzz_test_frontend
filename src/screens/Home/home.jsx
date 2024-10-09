import React from 'react'
import Navbar from '../../component/navbar'
import MatchNavBar from '../../component/MatchNavBar'
import MatchList from '../../component/MatchCard'
import QuickAccess from '../../component/QuickAccess'
import NewsLayout from '../../component/NewsLayout/NewsLayout'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <MatchNavBar/>
      <MatchList/>
      <QuickAccess/>
      <NewsLayout/>
    </>
  )
}

export default HomePage
