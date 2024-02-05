import React from 'react'
import Secone from '../components/Secone'
import Aboutus from '../components/Aboutus'
import Secfour from '../components/Secfour'
import Secfive from '../components/Secfive'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full text-black'>
        <Secone />
        <Aboutus />
        <Secfour />
        <Secfive />
        <Footer />
    </div>
  )
}

export default Home