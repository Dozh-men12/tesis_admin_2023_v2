import React from 'react'
import DashboardCards from './components/DashboardCards'
import { dashboardCardsData } from './constans/Index'

function Dashboard() {
  return (
    <main className='h-full'>
      <div className='my-5 border-gray-500 border-b-2 '>
        <h1 className='text-3xl '>DASHBOARD</h1>
      </div>
      <main className='  grid grid-cols-3 grid-rows-2 gap-4 bg-transparent '>      
      {/*  Aquí se colocan los dashboards */}
       {dashboardCardsData.map((cards , index)=>(
         <DashboardCards key={index} {...cards}/>
       ))}
     </main>
    </main>
    
    
   
  )
}

export default Dashboard