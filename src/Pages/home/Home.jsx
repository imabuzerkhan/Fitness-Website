import React from 'react'
import HeroSection from '../../Components/HeroSection'
import Programs from '../../Components/Programs'
import Value from '../../Components/Value'
import Choose from '../../Components/Choose'
import RegistrationBanner from '../../Components/RegistrationBanner'
const Home = () => {
  return (
   <>
   <HeroSection></HeroSection>
   <Choose></Choose>
   <Programs></Programs>
   <Value></Value>
   <RegistrationBanner></RegistrationBanner>
   </>
  )
}

export default Home
