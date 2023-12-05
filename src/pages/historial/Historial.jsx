import React from 'react'
import HistorialTable from "./components/HistorialTable"

function Historial() {
  return (
    <main className='h-full  flex flex-col gap-2 ' >
      <div className='my-5 border-gray-500 border-b-2 '>
        <h1 className='text-3xl uppercase'>Historial de reservas</h1>
      </div>      
      <div className='container mx-auto py-auto'>     
        <div className='bg-slate-600 flex flex-row py-8 px-auto'>
          <p>Acá va las opciones de la tabla</p>
        </div>
        <div className='pt-7'>
          <HistorialTable/>
        </div>
      </div>
      
      {/* <div className=' flex flex-col items-center justify-center container h-screen max-h-[750px] bg-white mx-auto'>
        <div className='w-full py-5 lg:flex lg:flex-wrap lg:gap-4 bg-slate-600 '>
          <div className='flex w-full flex-col items-center gap-4 md:flex-row md:justify-around xl:justify-between'>
            Opciones de tabla
          </div>  
        </div>
        <div>
        Acá va la tabla del historial de reservas
        </div>
      </div> */}
     
    </main>
  )
}

export default Historial