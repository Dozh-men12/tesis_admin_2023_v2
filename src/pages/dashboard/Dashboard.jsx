import React from 'react'
import DashboardCards from './components/DashboardCards'

function Dashboard() {
  return (
    <main className=' grid grid-cols-3 grid-rows-3 bg-transparent h-screen   '>
      Aquí se colocan los dashboards
      <DashboardCards></DashboardCards>
    </main>
  )
}

export default Dashboard