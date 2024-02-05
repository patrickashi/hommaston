import React from 'react'
import Secone from '../components/Secone'
import Aboutus from '../components/Aboutus'
import Secfour from '../components/Secfour'
import Secfive from '../components/Secfive'

const Home = () => {
  return (
    <div className='w-full text-black'>
        <Secone />
        <Aboutus />
        <Secfour />
        <Secfive />
    </div>
  )
}

export default Home