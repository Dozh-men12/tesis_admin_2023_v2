import React from 'react'
import TodayTable from './components/TodayTable'

function Today() {
  return (
    <main className='h-full  flex flex-col gap-2' >
      <div className='my-5 border-gray-500 border-b-2 '>
        <h1 className='text-3xl uppercase'>Reservas de hoy </h1>
      </div> 
      <div className='container mx-auto py-auto'>
        <div className='bg-slate-600 flex flex-row py-8 px-auto'>
            <p>Acá va las opciones de la tabla</p>
        </div>
        <div className='pt-7'>
          <TodayTable/>
        </div>

      </div>
      
        
    </main>
  )
}

export default Today