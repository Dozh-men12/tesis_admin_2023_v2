import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Page from './Page'
import { Outlet } from 'react-router-dom'

function Inicio() {
  return (
    <section className='h-screen flex  bg-slate-700 gap-9'>
        <Navbar/>
        {/* <div className='flex flex-col w-screen gap-6'>
        <Header/> 
        <Outlet/>        
        </div>   */}   
    </section>
  )
}


export default Inicio