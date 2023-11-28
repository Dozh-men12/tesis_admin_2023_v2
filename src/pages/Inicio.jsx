import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'

function Inicio() {
  return (
    <section className='h-screen flex   bg-slate-700'>
        <Navbar/>
        <Header/>       
    </section>
  )
}

export default Inicio