import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Page from './Page'
import { Outlet } from 'react-router-dom'

function Inicio() {
  return (  
    <div className='bg-slate-100 h-screen flex '>
    <Navbar/>
    <Header/>

    </div>
    
  )
}


export default Inicio



{/* <section className='h-screen flex  bg-slate-700 gap-9'>
        <Navbar/>
        <div className='flex flex-col w-screen gap-6'>
        <Header/> 
        <Outlet/>        
        </div>     
    </section> */}