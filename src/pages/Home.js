import React from 'react'
import KPI from '../components/KPI'
import Topcontent from '../components/Topcontent'
import UserNotification from '../components/UserNotification'
import Websiteinfo from '../components/Websiteinfo'

const Home = () => {
  return (
    <div className='home'>
        <Topcontent/>
        <Websiteinfo/>
        <KPI/>
        <UserNotification/>
    </div>
  )
}

export default Home