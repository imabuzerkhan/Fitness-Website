import React from 'react'
import HeroSection from '../../Components/HeroSection'
import Programs from '../../Components/Programs'
import Value from '../../Components/Value'
import Choose from '../../Components/Choose'
import RegistrationBanner from '../../Components/RegistrationBanner'
import Trainers from '../../Components/Trainers'

import Footer from '../../Components/Footer'
const Home = () => {
  return (
   <>
   <HeroSection></HeroSection>
   <Choose></Choose>
   <Programs></Programs>
   <Value></Value>
   <RegistrationBanner></RegistrationBanner>
   <Trainers></Trainers>

   <Footer></Footer>

   </>
  )
}

export default Home
