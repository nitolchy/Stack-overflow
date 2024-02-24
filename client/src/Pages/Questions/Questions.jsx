import React from 'react'


import '../../App.css'
import  Leftsidebar  from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Questions = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>

      </div>
    </div>
  )
}

export default Questions