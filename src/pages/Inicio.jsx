import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Page from './Page'
import { Outlet } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'

function Inicio() {
  return (  
    <div className='bg-slate-100 h-screen flex flex-row gap-[240px] font-second'>      
        <div>
          <Navbar/> 
        </div>  
        <div className='flex flex-col mx-4 w-screen gap-3 '>
          <Header/>
          <Outlet/>
        </div>    
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