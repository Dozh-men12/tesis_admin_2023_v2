import React from 'react'
import DashboardCards from './components/DashboardCards'
import { dashboardCardsData } from './constans/Index'

function Dashboard() {
  return (
    <main className=''>
      <div className='my-5 border-b-2'>
        <h1 className='text-3xl '>DASHBOARD</h1>
      </div>
      <main className=' mx-12 grid grid-cols-3 grid-rows-2 gap-4 bg-transparent '>      
      {/*  Aquí se colocan los dashboards */}
       {dashboardCardsData.map((cards , index)=>(
         <DashboardCards key={index} {...cards}/>
       ))}
     </main>
    </main>
    
    
   
  )
}

export default Dashboard