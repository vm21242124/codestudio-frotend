import React from 'react'
import Features from '../../components/Features/Features'
import Hero from '../../components/Main/Hero'

import Navbar from '../../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
    </div>
  )
}

export default HomePage