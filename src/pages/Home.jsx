import React from 'react'
import Secone from '../components/Secone'
import Aboutus from '../components/Aboutus'
import Secfour from '../components/Secfour'
import Secfive from '../components/Secfive'
import Footer from '../components/Footer'
import Accreditors from '../components/Accreditors'

const Home = () => {
  return (
    <div className='w-full text-black'>
        <Secone />
        <Accreditors />
        <Aboutus />
        <Secfour />
        <Secfive />
        <Footer />
    </div>
  )
}

export default Home